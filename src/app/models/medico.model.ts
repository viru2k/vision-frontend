export class Medico {

    
    
    public apellido:string;
    public nombre:string;
    public domicilio:string;
    public fecha_matricula:Date;
    public telefono:string;
    public telefono_cel:string;
    public email:string;
    public email_laboral:string;
    public cuit:string;
    public ing_brutos:string;
    public usuario_id:string;
    public id:string;

    constructor(
         apellido:string,
         nombre:string,
         domicilio:string,
         fecha_matricula:Date,
         telefono:string,
         telefono_cel:string,
         email:string,
         email_laboral:string,
         cuit:string,
         ing_brutos:string,
         usuario_id:string,
         id:string

    ) {
        
       
        this.apellido = apellido;
        this.nombre = nombre;     
        this.domicilio = domicilio;      
        this.email = email;
        this.email_laboral= email_laboral;
        this.fecha_matricula= fecha_matricula;
        this.id = id;
        this.cuit = cuit;
        this.ing_brutos= ing_brutos;
        this.telefono= telefono;
        this.telefono_cel= telefono_cel;
        this.usuario_id = usuario_id;
    }
}