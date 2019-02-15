import { PracticaDistribucion } from './../models/practica-distribucion.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class PracticaDistribucionService {
  private url: string = URL_SERVICIOS + 'practicadistribucion';
  constructor(public http: HttpClient) { }
  getItem(id: string) {
    console.log(this.url + "/byconvenioospmo/" + id);
    return this.http.get<PracticaDistribucion[]>(this.url + "/byconvenioospmo/" + "5");
  }
  getItems(id: number) {
    return this.http.get<PracticaDistribucion[]>(this.url + "/" + id);
  }
  putItem(val: PracticaDistribucion, id: string) {
    //   console.log(this.url+"/"+id);
    console.log(val);
    return this.http.put<PracticaDistribucion>(this.url + "/" + id, val);
  }
  postItem(val: PracticaDistribucion) {
    console.log(val);
    return this.http.post<PracticaDistribucion>(this.url, val);
  }
}
