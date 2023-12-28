import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {

  id:any;
  doctor:any;
  constructor(private doctorService:DoctorService, private activatedRoute:ActivatedRoute)
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
}
