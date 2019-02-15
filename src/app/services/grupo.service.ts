import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { URL_SERVICIOS, PARAMS } from '../config/config';
import {Grupo} from '../models/grupo.model';


@Injectable({
  providedIn: 'root'
})
export class GrupoService {


  private url:string  = URL_SERVICIOS + 'cirugia/grupo';

  constructor(public http: HttpClient) { }

getItem(id:number){
  return this.http.get<Grupo>(this.url);
  }

getItems(){
  return this.http.get<Grupo[]>(this.url);
  }

putItem(val:Grupo, id:string){
//   console.log(this.url+"/"+id);
  console.log(val); 
  return this.http.put<Grupo>(this.url+"/"+id,val);
}

postItem(val:Grupo){
  console.log(val); 
  return this.http.post<Grupo>(this.url, val);
}

}
