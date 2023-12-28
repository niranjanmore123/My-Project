import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},

  {path:'doctorsList', component:DoctorsListComponent},
  {path:'addDoctor', component:AddDoctorComponent},
  {path:'updateDoctor/:id', component:UpdateDoctorComponent},
  {path:'viewDoctor/:id', component:ViewDoctorComponent},

  {path:'addPatient', component:AddPatientComponent},
  {path:'patientsList', component:PatientsListComponent},
  {path:'updatePatient/:id', component:UpdatePatientComponent},
  {path:'viewPatient/:id', component:ViewPatientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
