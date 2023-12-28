import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  constructor(private Service:PatientService)
  {
  }

  processAddPatientForm(patient:any)
  {
    console.log(patient.value);
    
    this.Service.addPatient(patient.value).subscribe(
      (response)=>{
        console.log(response);
        alert('Patient Added Successfully...!!!');
      },
      (error) => {
        alert('Error in Saving Patient Record...!!!');
        console.log(error.error.name);
      }
    );
  }
}
