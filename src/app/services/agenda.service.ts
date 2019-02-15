import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { URL_SERVICIOS, PARAMS } from '../config/config';
import { Agenda } from '../models/agenda.model';
import { AgendaDiaHora } from '../models/agenda-dia-horario';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private url_simple:string =URL_SERVICIOS;
  private url:string  = URL_SERVICIOS + 'pacienteagenda';
  private url_agenda:string  = URL_SERVICIOS + 'agenda/';

  constructor(public http: HttpClient) { }

getItem(id:number){
  return this.http.get<Agenda>(this.url+"/"+id);
  }

getItems(){
  return this.http.get<Agenda[]>(this.url);
  }

putItem(val:Agenda, id:string){
  console.log(val); 
  return this.http.put<Agenda>(this.url+"/"+id,val);
}

postItem(val:Agenda){
  console.log(val); 
  return this.http.post<Agenda>(this.url, val);
}

getItembyDateToday(){
  return this.http.get<Agenda[]>(this.url_simple+"pacienteagenda/bydate/today");
  }

getItembyDateSelected(fecha:string){
  return this.http.get<Agenda[]>(this.url_simple+"pacienteagenda/bydateselected/"+fecha);
  }


getItembyDni(dni:string){
  console.log(this.url_simple+"pacienteagenda/bydatedni/"+dni);
  return this.http.get<Agenda[]>(this.url_simple+"pacienteagenda/bydatedni/"+dni);
  }
  getItemsAgendaByhorario(){
    console.log(this.url_agenda+"horarios");
    return this.http.get<AgendaDiaHora[]>(this.url_agenda+"horarios");
    } 
  getItemsAgendaByMedico(dni:string){
    console.log(this.url_simple+"pacienteagenda/bydatedni/"+dni);
    return this.http.get<Agenda[]>(this.url_simple+"pacienteagenda/bydatedni/"+dni);
    }

  getItemsAgendaByDiaHorario(dni:string){
    console.log(this.url_agenda+"pacienteagenda/bydatedni/"+dni);
    return this.http.get<AgendaDiaHora[]>(this.url_agenda+"pacienteagenda/bydatedni/"+dni);
    }  
}
