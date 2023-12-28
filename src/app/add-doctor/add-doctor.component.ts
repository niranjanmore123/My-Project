import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {

  constructor(private Service: DoctorService) {
  }

  processAddDoctorForm(doctor:any) {

    this.Service.addDoctor(doctor.value).subscribe(
      (response) => {
        console.log(response);
        alert('Doctor Added Successfully...!!!')
      },
      (error) => {
        alert('Error in Saving Doctor Record...!!!')
        console.log(error.error.name);
      }
    );
  }
}
