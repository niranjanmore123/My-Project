import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent {

  id:any;
  patient:any;
  constructor(private patientService:PatientService, private activatedRoute:ActivatedRoute,private router:Router)
  {

  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params[('id')];
    console.log(this.id);
    this.patientService.viewPatient(this.id).subscribe(
      (response)=>{
          this.patient=response; 
          console.log(this.patient);
      } 
    );
  }


  update()
  {
    this.patientService.updatePatient(this.patient,this.id).subscribe(
      (response) =>{
        alert('Patient record Updated successfully..!!!');
        this.router.navigate(['/patientsList']);

      },

      (error)=>{
        alert('problem in update operation!!')
        console.log(error.error.name);
      }
    );
  }
}
