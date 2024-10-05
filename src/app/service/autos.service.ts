import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http:HttpClient) { }
  


  private API_AUTOS="http://localhost:3000/autos"

  //escribir o guardar post 

  postAutos(auto:JSON):Observable<any>{
    return this.http.post(this.API_AUTOS,auto);
  }
  //leees datos get 
  getAutos():Observable<any>{
    return this.http.get(this. API_AUTOS);
  }


  ///leer solo id para dellates gety

  


  getauto1(id: string): Observable<any> {
    return this.http.get(`${this.API_AUTOS}/${id}`);
  }
  ////eliinar drop 

  dropautos(id:string):Observable<any>{
    return this.http.delete(`${this.API_AUTOS}/${id}`);
  }


  ///leer una solo paersona get 

  getautoedit(id:string):Observable<any>{

    return this.http.get(this.API_AUTOS+"/"+id)
  }
  ///editar 


  putauto(auto:any):Observable<any>{
    return this.http.put(`${this.API_AUTOS}/${auto.id}`,auto);
  }
}
