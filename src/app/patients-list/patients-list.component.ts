import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit{

  patients:any[]=[];
  constructor(private Service:PatientService){ }

  ngOnInit():void{

    this.Service.getAllPatients().subscribe(
      response=>{
        this.patients=response;
        console.log(response);
        
      }
    );
  }

  delete(id:any)
  {
   this.Service.deletePatient(id).subscribe(
    (response)=>{
      alert('Patient record deleted Successfully...!!!');
      this.ngOnInit();
    }
   );
  } 

  patient:any;
  view(id:any)
  {
    this.Service.viewPatient(id).subscribe(
      (response)=>{
          this.patient=response;
          this.ngOnInit();
      }
    );
  }
}
