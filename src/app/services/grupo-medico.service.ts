import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { URL_SERVICIOS, PARAMS } from '../config/config';
import {GrupoMedico} from '../models/grupo-medico.model';


@Injectable({
  providedIn: 'root'
})
export class GrupoMedicoService {


  private url:string  = URL_SERVICIOS + 'cirugia/grupomedico';

  constructor(public http: HttpClient) { }

getItem(id:number){
  return this.http.get<GrupoMedico>(this.url);
  }

getItems(){
  return this.http.get<GrupoMedico[]>(this.url);
  }

putItem(val:GrupoMedico, id:string){
//   console.log(this.url+"/"+id);
  console.log(val); 
  return this.http.put<GrupoMedico>(this.url+"/"+id,val);
}

postItem(val:GrupoMedico){
  console.log(val); 
  return this.http.post<GrupoMedico>(this.url, val);
}

}
