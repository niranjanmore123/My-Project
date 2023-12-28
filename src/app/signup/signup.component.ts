import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm:any;
  constructor(private service:LoginService, private router:Router){}

  ngOnInit(): void {
    this.signUpForm=new FormGroup({
      'name':new FormControl('', [Validators.required]),
      'username':new FormControl('', [Validators.required]),
      'email':new FormControl('', [Validators.required, Validators.email]),
      'password':new FormControl('', [Validators.required]),
    } );
  }
  

  handleFormData(){
    console.log(this.signUpForm.value);
    this.service.signUp(this.signUpForm.value.name, this.signUpForm.value.username, this.signUpForm.value.email, this.signUpForm.value.password).subscribe(
      response => {
        alert('Successfully Registered...');
        this.router.navigate(['/login']);
      }
    )
  }

  // handleFormData(data:NgForm){
  //   console.log(data.value);

  // }
  // save(form:any){
  //   console.log(form.value);
    
  // }

}
