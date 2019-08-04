import { Liquidacion } from './../models/liquidacion.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { URL_SERVICIOS, PARAMS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class LiquidacionService {

  private url:string  = URL_SERVICIOS + 'liquidacion';

  constructor(public http: HttpClient) { }

getItem(id:number){
  return this.http.get<Liquidacion>(this.url);
  }

getItems(){
  return this.http.get<Liquidacion[]>(this.url);
  }

putItem(val:Liquidacion, id:string){
//   console.log(this.url+"/"+id);
  console.log(val); 
  return this.http.put<Liquidacion>(this.url+"/"+id,val);
}

postItem(val:Liquidacion){
  console.log(val); 
  return this.http.post<Liquidacion>(this.url, val);
}


getLiquidacionDetalle(){
  return this.http.get<Liquidacion[]>(this.url+'/detalle');
  }

    
  getListadoPreFactura(selected:any){
    return this.http.post<any[]>(this.url+"/detalle/prefactura",selected);
    } 

  getListadoPreFacturaCirugia(selected:any){
    return this.http.post<any[]>(this.url+"/detalle/prefactura/cirugia",selected);
    } 

  generarTxt(selected:any){
    return this.http.post<any[]>(URL_SERVICIOS+"multiuploads/texto",selected);
    } 

    generarTxtCirugia(selected:any){
      return this.http.post<any[]>(URL_SERVICIOS+"multiuploads/texto/cirugia",selected);
      } 
}
