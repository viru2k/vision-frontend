import { GrupoMedico } from './../../../../models/grupo-medico.model';
import { GrupoMedicoService } from './../../../../services/grupo-medico.service';
import { Component, OnInit} from '@angular/core';
import { calendarioIdioma } from '../../../../config/config';
import swal from 'sweetalert2';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';




@Component({
  selector: 'app-popup-grupo-medico',
  templateUrl: './popup-grupo-medico.component.html',
  styleUrls: ['./popup-grupo-medico.component.css']
})
export class PopupGrupoMedicoComponent implements OnInit {

 
  cols: any[];
  selectedItem: GrupoMedico;
  es:any;
  // LOADING
  loading: boolean;
  elemento:GrupoMedico = null;
  elementos:GrupoMedico[] = null;


  constructor(private miServico:GrupoMedicoService, public ref: DynamicDialogRef, public config: DynamicDialogConfig ) {
    this.cols = [
      
        {field: 'cirugia_grupo_nombre', header: 'Grupo' },
        { field: 'codigo', header: 'Codigo' },
        { field: 'apellido', header: 'Apellido' },
        { field: 'nombre', header: 'nombre' },
     ];
    } 

ngOnInit() {

this.loadList();
}



loadList(){
    this.es = calendarioIdioma;
    this.loading = true;
    try {
        this.miServico.getItems()    
        .subscribe(resp => {
        this.elementos = resp;
            console.log(this.elementos);    
            this.loading = false;
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message);
         });    
    } catch (error) {
    this.throwAlert("error","Error al cargar los registros",error);
    }  
}


onRowSelect(event) {  
    this.selectedItem = event.data;
    console.log(this.selectedItem);
    this.ref.close(this.selectedItem);
}


/** ACCIONES */

throwAlert(estado:string, mensaje:string, motivo:string){
    if(estado== "success"){
        swal({
            type: 'success',
            title: 'Exito',
            text: mensaje
          })
    }
    if(estado== "error"){
        swal({
            type: 'error',
            title: 'Oops...',
            text: mensaje,
            footer: motivo
          })
    }
}
}