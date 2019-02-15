import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { URL_SERVICIOS, PARAMS } from '../config/config';
import {Paciente} from '../models/paciente.model';
/*
@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class PacienteService {



    private url:string  = URL_SERVICIOS + 'paciente';

      constructor(public http: HttpClient) { }

    getItem(id:number){
      return this.http.get<Paciente>(this.url);
      }

    getItems(){
      return this.http.get<Paciente[]>(this.url);
      }

    putItem(paciente:Paciente, id:string){
   //   console.log(this.url+"/"+id);
      console.log(paciente); 
      return this.http.put<Paciente>(this.url+"/"+id,paciente);
    }

    postItem(paciente:Paciente){
      console.log(paciente); 
      return this.http.post<Paciente>(this.url, paciente);
    }

}
