import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getAllDoctors():Observable<any>
  {
    return this.http.get(this.baseUrl+'doctors');
  }


  addDoctor(obj:any):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    
    return this.http.post(this.baseUrl+'doctor',  body,{'headers':headers});
  }

  
  deleteDoctor(id:any):Observable<any>
  {
    return this.http.delete(this.baseUrl+'doctor/'+id);
  } 


  updateDoctor(obj:any, id:any):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    return this.http.patch(this.baseUrl+'doctor/'+id, body,{'headers':headers});
  }

  viewDoctor(id:any):Observable<any>{
    return this.http.get(this.baseUrl+'doctor/'+id);
  }
}
