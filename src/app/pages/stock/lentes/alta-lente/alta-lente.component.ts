import { Component, OnInit } from '@angular/core';
import { CirugiaFicha } from '../../../../models/cirugia-ficha.model';

import { OverlayPanel } from 'primeng/overlaypanel';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/components/common/api';

import swal from 'sweetalert2';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { calendarioIdioma } from './../../../../config/config';
import { CirugiaService } from './../../../../services/cirugia.service';
import { CirugiaLente } from 'src/app/models/cirugia-lente.model';
import { PopupDetalleLenteComponent } from './../popup/popup-detalle-lente/popup-detalle-lente.component';
import { PopupFichaQuirurgicaLenteComponent } from '../../../../shared/components/popups/popup-ficha-quirurgica-lente/popup-ficha-quirurgica-lente.component';


@Component({
  selector: 'app-alta-lente',
  templateUrl: './alta-lente.component.html',
  styleUrls: ['./alta-lente.component.css'],
  providers: [MessageService,DialogService]
})
export class AltaLenteComponent implements OnInit {
  loading: boolean;
  selecteditem:CirugiaLente;
  elementos:CirugiaLente[] = [];
  elemento:CirugiaLente;
  selecteditems:CirugiaLente[] = [];
  es:any;
  columns: any[];
  cols: any[];
  popItemLente:CirugiaLente;

  constructor(private miServicio:CirugiaService,private messageService: MessageService ,public dialogService: DialogService) { 

    this.cols = [              
      { field: 'tipo', header: 'Lente',  width: '20%' },
      {field: 'dioptria', header: 'Dioptria' , width: '10%' },
      { field: 'lote', header: 'Lote',  width: '15%' },
      { field: 'fecha_vencimiento', header: 'F. vencimiento',  width: '10%' },
      { field: 'proveedor', header: 'Proveedor',  width: '20%' },
      { field: 'ubicacion', header: 'Ubicación',  width: '10%' },
      { field: 'estado', header: 'Estado',  width: '20%' },
      { field: '', header: 'Editar' , width: '10%'} ,
   ];
  }

  ngOnInit() {
    this.es = calendarioIdioma;
    this.loadList();
  }

  editar(event){
    console.log(event);
    console.log(this.selecteditem);
  let data:any; 
  data = event;
  const ref = this.dialogService.open(PopupDetalleLenteComponent, {
  data,
   header: 'Gestionar lente', 
   width: '70%',
   height: '90%'
  });

  ref.onClose.subscribe((PopupDetalleLenteComponent:any) => {
    
      if (PopupDetalleLenteComponent) {
        console.log(PopupDetalleLenteComponent);
        this.popItemLente = PopupDetalleLenteComponent;
        this.loadList();
      }
  });
  }

  agregarLente(){
    console.log(this.selecteditem);
    let data:any; 

    const ref = this.dialogService.open(PopupDetalleLenteComponent, {
    data,
     header: 'Gestionar lente', 
     width: '90%',
     height: '90%'
    });
  
    ref.onClose.subscribe((PopupDetalleLenteComponent:any) => {
        if (PopupDetalleLenteComponent) {
          console.log(PopupDetalleLenteComponent);
          this.popItemLente = PopupDetalleLenteComponent;
          this.loadList();
        }
    });
  }

  buscarLentes(){}

  buscarLentesBaja(){}

  loadList() {

    try {
        this.miServicio.getLentesSinUso()
        .subscribe(resp => {

            this.elementos = resp;
            console.log(resp);
            this.loading = false;
        },
        error => { // error path
            console.log(error);
            console.log(error.status);
            this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
         });
    } catch (error) {
    this.throwAlert('error','Error al cargar los registros',error,error.status);
    }
}


throwAlert(estado: string, mensaje: string, motivo: string, errorNumero: string){
  let tipoerror:string;

  if(estado== 'success'){
      swal({
          type: 'success',
          title: 'Exito',
          text: mensaje
        })
  }

  if(errorNumero =='422'){
    mensaje ='Los datos que esta tratando de guardar son iguales a los que ya poseia';
    swal({   
        type: 'warning',
        title: 'Atención..',
        text: mensaje,
        footer: motivo
      })
}
  
  if((estado== 'error')&&(errorNumero!='422')){
    if(errorNumero =='422'){
        mensaje ='Los datos que esta tratando de guardar son iguales a los que ya poseia';
    }
    if(errorNumero =='400 '){
        mensaje ='Bad Request ';
    }
    if(errorNumero =='404'){
        mensaje ='No encontrado ';
    }
    if(errorNumero =='401'){
        mensaje ='Sin autorización';
    }
    if(errorNumero =='403'){
        mensaje =' Prohibido : La consulta fue valida, pero el servidor rechazo la accion. El usuario puede no tener los permisos necesarios, o necesite una cuenta para operar ';
    }
    if(errorNumero =='405'){
        mensaje ='Método no permitido';
    }
    if(errorNumero =='500'){
        mensaje ='Error interno en el servidor';
    }
    if(errorNumero =='503'){
        mensaje ='Servidor no disponible';
    }
    if(errorNumero =='502'){
        mensaje ='Bad gateway';
    }
    
      swal({
          type: 'error',
          title: 'Oops...',
          text: mensaje,
          footer: motivo
        })
  }


}
}

