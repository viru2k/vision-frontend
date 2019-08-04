import { Component, OnInit } from '@angular/core';
import { UsuarioModulo } from '../../../../models/user-modulo.model';
import { User } from '../../../../models/user.model';
import { UserService } from '../../../../services/user.service';
import swal from 'sweetalert2';




import { DialogService } from 'primeng/components/common/api';
import { MessageService, DynamicDialogRef } from 'primeng/api';


@Component({
  selector: 'app-usuario-modulo',
  templateUrl: './usuario-modulo.component.html',
  styleUrls: ['./usuario-modulo.component.css']
})
export class UsuarioModuloComponent implements OnInit {

  loading: boolean;
  user:User;
  user_name:string;
  user_id:string;
  usuarios:User[];
  nombre:string
  public modulo:UsuarioModulo[];
  public moduloUsuario:UsuarioModulo[];
  public selectedItemUsuario:User;
  public selectedItemModulo:UsuarioModulo;
  public selectedItemModuloUsuario:UsuarioModulo;
  

  constructor(private miServico:UserService) {

    this.user = JSON.parse(localStorage.getItem('userData'));
   this.nombre = this.user['nombreyapellido'];
   }

  ngOnInit() {
    console.log(this.user['email']);
    this.loadUsuario();
    this.loadModulo();
    
  }



  loadListaUsuario(event){
    console.log(event.value);
    this.user_id = event.value.id;
    this.user_name = event.value.email;
    this.loadListUsuario();
    
  }

  loadUsuario(){
  
    this.loading = true;
    try {
        this.miServico.getItems()
        .subscribe(resp => {
        this.usuarios = resp;
            this.loading = false;
            console.log(resp);
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message, error.status);
         });    
    } catch (error) {
    this.throwAlert("error","Error al cargar los registros",error,error.status);
    }  
  }


  loadModulo(){
  
    this.loading = true;
    try {
        this.miServico.getItemsMenu()
        .subscribe(resp => {
        this.modulo = resp;
            this.loading = false;
            console.log(resp);
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message, error.status);
         });    
    } catch (error) {
    this.throwAlert("error","Error al cargar los registros",error,error.status);
    }  
  }
  
  loadListUsuario(){
    console.log(this.user);
    this.loading = true;
    try {
        this.miServico.getItemUserAndMenu(this.user_name)
        .subscribe(resp => {
        this.moduloUsuario = resp;
            this.loading = false;
            console.log(resp);
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message, error.status);
         });    
    } catch (error) {
    this.throwAlert("error","Error al cargar los registros",error,error.status);
    }  
  }

  
  agregarModuloUsuario(){
    console.log(this.user);
    this.loading = true;
    try {
        this.miServico.postUserMenu(this.selectedItemModulo,this.user_id)
        .subscribe(resp => {
                  
            this.loading = false;
            console.log(resp);
            this.loadListUsuario();
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message, error.status);
         });    
    } catch (error) {
    this.throwAlert("error","Error al cargar los registros",error,error.status);
    }  
  }

  
  borrarModuloUsuario(){
    console.log(this.selectedItemModuloUsuario);
    this.loading = true;
    try {
        this.miServico.delModulo(this.selectedItemModuloUsuario.user_modulo_id)
        .subscribe(resp => {
          this.loadListUsuario();
            this.loading = false;
            console.log(resp);
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.throwAlert("error","Error: "+error.status+"  Error al cargar los registros",error.message, error.status);
         });    
    } catch (error) {
    this.throwAlert("error","Error al cargar los registros",error,error.status);
    }  
  }

  
  
  borrar(){
    console.log(this.selectedItemModuloUsuario);
  }

  guardar(){
    console.log(this.selectedItemModulo);
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


