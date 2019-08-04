import { PopupObraSocialMedicoComponent } from './../popup-obra-social-medico/popup-obra-social-medico.component';
import { PopupObrasocialComponent } from './../../mantenimiento/popup/popup-obrasocial/popup-obrasocial.component';
import { DynamicDialogConfig, DialogService, MessageService, DynamicDialogRef } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { calendarioIdioma } from '../../../config/config';
import { ObraSocial } from 'src/app/models/obra-social.model';

@Component({
  selector: 'app-popup-medico-edit',
  templateUrl: './popup-medico-edit.component.html',
  styleUrls: ['./popup-medico-edit.component.css'],
  providers: [MessageService,DialogService]
})
export class PopupMedicoEditComponent implements OnInit {
  popItem:ObraSocial;
  es:any;
  updateDataForm: FormGroup;
  checked: boolean = false;
  constructor(public config: DynamicDialogConfig, private messageService: MessageService ,public dialogService: DialogService, public ref: DynamicDialogRef) { 
    this.es = calendarioIdioma;
  }

  ngOnInit() {
    console.log(this.config.data);
    this.updateDataForm = new FormGroup({
      'apellido': new FormControl(""),
      'nombre': new FormControl(""),      
      'domicilio': new FormControl("San Juan"),      
      'email_laboral': new FormControl("sin_correo@delavision.com.ar"),
      'email': new FormControl("sin_correo@delavision.com.ar"),
      'fecha_matricula': new FormControl(""),
      'cuit': new FormControl("0"),
      'telefono_cel': new FormControl("0"),
      'telefono': new FormControl("0"),
      'ing_brutos': new FormControl("0"),
      'usuario_id': new FormControl("0"),
      'id': new FormControl("0"),     
  });
    if(this.config.data.id !=""){
      let newDate = new Date( this.config.data.fecha_matricula);     
     this.config.data.fecha_matricula = newDate;
      this.updateDataForm.patchValue(this.config.data);
    }
    this.config.data.fecha_matricula = new Date();
  }


  buscarObraSocial(){
    this.popItem = new ObraSocial("","","","","","","","");
      let data:any; 
      const ref = this.dialogService.open(PopupObrasocialComponent, {
      data,
       header: 'Crear /Modificar registro', 
       width: '95%',
       height: '90%'
   });

   ref.onClose.subscribe((PopupObrasocialComponent:ObraSocial) => {
       if (PopupObrasocialComponent) {
       console.log(PopupObrasocialComponent);    
            this.popItem = PopupObrasocialComponent;
            this.config.data = this.updateDataForm.value;
            this.config.data.obra_social_nombre = this.popItem.nombre;
            this.config.data.obra_social_id = this.popItem.id;
            this.updateDataForm.patchValue(this.config.data);
       }
   });
  }

  agregarObraSocial(){
    this.popItem = new ObraSocial("","","","","","","","");
      let data:any; 
      data =this.config.data;
      const ref = this.dialogService.open(PopupObraSocialMedicoComponent, {
      data,
       header: 'Agregar obra social', 
       width: '95%',
       height: '90%'
   });

   ref.onClose.subscribe((PopupObraSocialMedicoComponent:ObraSocial) => {
       if (PopupObrasocialComponent) {
       console.log(PopupObrasocialComponent);    
          /*  this.popItem = PopupObrasocialComponent;
            this.config.data = this.updateDataForm.value;
            this.config.data.coseguro_nombre = this.popItem.nombre;
            this.config.data.coseguro_id = this.popItem.id;
            this.updateDataForm.patchValue(this.config.data);*/
       }
   });
  }

  guardarDatos(){
    this.config.data = this.updateDataForm.value;
    console.log(this.config.data);
    this.ref.close(this.updateDataForm.value);
  }

  throwAlert(estado:string, mensaje:string, motivo:string, errorNumero:string){
    let tipoerror:string;
  
    if(estado== "success"){
        swal({
            type: 'success',
            title: 'Exito',
            text: mensaje
          })
    }
  
  
  
    if(estado== "warning"){
      swal({
          type: 'warning',
          title: 'Cuidado!',
          text: mensaje
        })
  }
    if(estado== "error"){
      if(errorNumero =="422"){
          mensaje ="Los datos que esta tratando de guardar son iguales a los que ya poseia";
      }
      if(errorNumero =="400 "){
          mensaje ="Bad Request ";
      }
      if(errorNumero =="404"){
          mensaje ="No encontrado ";
      }
      if(errorNumero =="401"){
          mensaje ="Sin autorización";
      }
      if(errorNumero =="403"){
          mensaje =" Prohibido : La consulta fue valida, pero el servidor rechazo la accion. El usuario puede no tener los permisos necesarios, o necesite una cuenta para operar ";
      }
      if(errorNumero =="405"){
          mensaje ="Método no permitido";
      }
      if(errorNumero =="500"){
          mensaje ="Error interno en el servidor";
      }
      if(errorNumero =="503"){
          mensaje ="Servidor no disponible";
      }
      if(errorNumero =="502"){
          mensaje ="Bad gateway";
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
