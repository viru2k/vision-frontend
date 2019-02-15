import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { URL_SERVICIOS, PARAMS } from '../config/config';
import {Medico} from '../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

 

  private url:string  = URL_SERVICIOS + 'medico';

  constructor(public http: HttpClient) { }

getItem(id:number){
  return this.http.get<Medico>(this.url+"/"+id);
  }

getItems(){
  return this.http.get<Medico[]>(this.url);
  }

putItem(paciente:Medico, id:string){
//   console.log(this.url+"/"+id);
  console.log(paciente); 
  return this.http.put<Medico>(this.url+"/"+id,paciente);
}

postItem(paciente:Medico){
  console.log(paciente); 
  return this.http.post<Medico>(this.url, paciente);
}

}
