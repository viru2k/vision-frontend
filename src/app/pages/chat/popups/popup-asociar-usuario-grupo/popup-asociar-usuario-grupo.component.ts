import { MedicoObraSocialService } from './../../../../services/medico-obra-social.service';
import { PacienteService } from './../../../../services/paciente.service';
import { Paciente } from './../../../../models/paciente.model';
import { Component, OnInit} from '@angular/core';
import { calendarioIdioma } from '../../../../config/config';
import swal from 'sweetalert2';
import { DynamicDialogConfig, DynamicDialogRef, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/components/common/api';
import { UserService } from './../../../../services/user.service';
import { ChatService } from '../../../../services/chat-service.service';

@Component({
  selector: 'app-popup-asociar-usuario-grupo',
  templateUrl: './popup-asociar-usuario-grupo.component.html',
  styleUrls: ['./popup-asociar-usuario-grupo.component.css']
})
export class PopupAsociarUsuarioGrupoComponent implements OnInit {

 
  cols: any[];
  cols_grupo: any[];
  selectedItem: any;
  selectedItem_grupo: any;
  es:any;
  // LOADING
  loading: boolean;
  elemento:any = null;
  elementos:any[] = null;
  elemento_grupo:any = null;
  elementos_grupos:any[] = null;
  grupo:string;

  constructor(private miServico:UserService, private chatService:ChatService , public ref: DynamicDialogRef, public config: DynamicDialogConfig,private messageService: MessageService ,public dialogService: DialogService ) {
    this.cols = [
        {field: 'nombreyapellido', header: 'Usuario',   width: '20%'  }
     ];
   this.cols_grupo = [
    {field: 'grupo_nombre', header: 'Grupo',   width: '20%'  }
   ];
    } 

ngOnInit() {

this.loadGrupos();
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


loadGrupos(){
  this.es = calendarioIdioma;
  this.loading = true;
  try {
      this.chatService.getGrupos()    
      .subscribe(resp => {
      this.elementos_grupos = resp;
          console.log(this.elementos_grupos);    
          this.loading = false;
          this.loadList();
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
    let userData = JSON.parse(localStorage.getItem('userData'));
    this.selectedItem = event.data;
    console.log(this.selectedItem);
    this.es = calendarioIdioma;
    this.loading = true;
    try {
        this.chatService.asociarUsuarioGrupo(userData['id'], this.selectedItem['id'], this.selectedItem_grupo['grupo_nombre'], this.selectedItem_grupo['id'])
        .subscribe(resp => {
        this.elementos = resp;
            console.log(this.elementos);    
            this.loading = false;
            this.ref.close(this.selectedItem);
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

onRowSelectGrupo(){
  console.log(this.selectedItem_grupo);
}

crearGrupo()
{
  if(this.grupo != ''){
    this.loading = true;
    try {
        this.chatService.crearSesionListadoGrupo(this.grupo)
        .subscribe(resp => {
        this.elementos = resp;
            console.log(this.elementos);    
            this.loading = false;
            this.loadGrupos();
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