import { Practica } from './../models/practica.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { URL_SERVICIOS, PARAMS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class PracticaService {

  private url:string  = URL_SERVICIOS + 'practica';

  constructor(public http: HttpClient) { }

getItem(id:number){
  return this.http.get<Practica>(this.url+"/"+id);
  }

getItems(){
  return this.http.get<Practica[]>(this.url);
  }

putItem(val:Practica, id:string){
//   console.log(this.url+"/"+id);
  console.log(val); 
  return this.http.put<Practica>(this.url+"/"+id,val);
}

postItem(val:Practica){
  console.log(val); 
  return this.http.post<Practica>(this.url, val);
}

getItemByObraSocial(id:number){
  return this.http.get<Practica>(this.url+"/byobrasocial/"+id);
  }

getItemByFecha(fechaDesde:string , fechaHasta:string){
  return this.http.get<Practica>(this.url+"/by/fecha/orden?fecha_desde="+fechaDesde+"&fecha_hasta="+fechaHasta);
  }

getItemByFechaAndObraSocialAndMedico(fechaDesde:string , fechaHasta:string, medico_id:string, obra_social_id:string){
  return this.http.get<Practica>(this.url+"/by/obrasocialmedico?medico_id="+medico_id+"&obra_social_id="+obra_social_id+"&fecha_desde="+fechaDesde+"&fecha_hasta="+fechaHasta);
  }

getItemByAgendaId(agendaId:string){
  console.log(this.url+"/by/agenda/"+agendaId);
  return this.http.get<Practica>(this.url+"/by/agenda/"+agendaId);
  }
}
