import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent {

  doctors:any[]=[];
  constructor(private Service:DoctorService){ }

  ngOnInit():void{

    this.Service.getAllDoctors().subscribe(
      response=>{
        this.doctors=response;
        console.log(response);
      }
    );
  }

  delete(id:any)
  {
   this.Service.deleteDoctor(id).subscribe(
    (response)=>{
      alert('Doctor record deleted Successfully...!!!');
      this.ngOnInit();
    }
   );
  } 

  doctor:any;
  view(id:any)
  {
    this.Service.viewDoctor(id).subscribe(
      (response)=>{
          this.doctor=response;
          this.ngOnInit();
      }
    );
  }
}
