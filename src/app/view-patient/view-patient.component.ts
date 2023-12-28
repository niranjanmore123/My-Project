import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {

  id:any;
  patient:any;
  constructor(private patientService:PatientService, private activatedRoute:ActivatedRoute)
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
}
