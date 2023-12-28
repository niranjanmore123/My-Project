import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent {

  id:any;
  doctor:any;
  constructor(private  doctorService:DoctorService, private activatedRoute:ActivatedRoute,private router:Router)
  {

  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params[('id')];
    console.log(this.id);
    this.doctorService.viewDoctor(this.id).subscribe(
      (response)=>{
          this.doctor=response; 
          console.log(this.doctor);
      } 
    );
  }


  update()
  {
    this.doctorService.updateDoctor(this.doctor,this.id).subscribe(
      (response) =>{
        alert('Doctor record Updated successfully..!!!');
        this.router.navigate(['/doctorsList']);
      },

      (error)=>{
        alert('problem in update operation!!')
        console.log(error.error.name);
        
      }
    );
  }
}
