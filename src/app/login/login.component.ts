import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sampleform:any;

  constructor(private service:LoginService, private router:Router){}

  ngOnInit(): void {

    this.sampleform=new FormGroup({
      'email':new FormControl('', [Validators.required, Validators.email]),
      'password':new FormControl('', [Validators.required]),
    } );
  }

  handleFormData(){
    console.log(this.sampleform.value);
    this.service.login(this.sampleform.value.email, this.sampleform.value.password).subscribe(
      response => {
        alert('Succesfully Logen in');
        this.router.navigate(['/home']);
      }
    )
  }

}
