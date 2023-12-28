import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  [x:string]:any;

  private baseUrl="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getAllPatients():Observable<any>
  {
    return this.http.get(this.baseUrl+'patients');
  }


  addPatient(obj:any):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    
    return this.http.post(this.baseUrl+'patient',  body,{'headers':headers});
  }

  
  deletePatient(id:any):Observable<any>
  {
    return this.http.delete(this.baseUrl+'patient/'+id);
  } 


  updatePatient(obj:any, id:any):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    return this.http.patch(this.baseUrl+'patient/'+id,body,{'headers':headers});
  }

  viewPatient(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"patient/"+id);
  }
}
