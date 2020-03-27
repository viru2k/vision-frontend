

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL_SERVICIOS, PARAMS } from '../config/config';



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url:string  = URL_SERVICIOS;
  constructor(public http: HttpClient) { }

  altaUsuarioSesionLista(id:number){
    return this.http.get<any>(this.url+'/'+id);
  }
  

  crearSesionListado(id:number){
    return this.http.get<any>(this.url+'/'+id);
  }

  asociarUsuarioGrupo(id:number){
    return this.http.get<any>(this.url+'/'+id);
  }

  crearSesionListadoGrupo(id:number){
    return this.http.get<any>(this.url+'/'+id);
  }

  getSesionListByUsuario(id:number){
    return this.http.get<any[]>(this.url+'chat/usuario/lista/sesion?id='+id);
  }


  getSesionListByGrupo(id:number){
    return this.http.get<any>(this.url+'chat/usuario/lista/sesion/grupo'+id);
  }


  insertarRenglonChat(renglon:any){
    return this.http.post<any>(this.url+'chat/renglon',renglon);
  }

  actualizarRenglonListado(id:string,sesion_id: string){
    return this.http.get<any>(this.url+'chat/renglon/leido?id='+id+'&sesion_id='+sesion_id);
  }

}