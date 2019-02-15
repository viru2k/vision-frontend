export class Paciente {

    public dni:string;
    public apellido:string;
    public nombre:string;
    public domicilio:string;
    public sexo:string;
    public fecha_nacimiento:Date;
    public apellido_m:string;
    public ciudad:string;
    public telefono_fijo:string;
    public telefono_cel:string;
    public email:string;
    public id: string;

    constructor(dni:string, apellido:string, nombre:string, domicilio:string, sexo:string,
    fecha_nacimiento:Date, apellido_m:string, ciudad:string, telefono_fijo:string,
    telefono_cel:string, email:string ) {
        
        this.dni = dni;
        this.apellido = apellido;
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.sexo = sexo;
        this.fecha_nacimiento = fecha_nacimiento;
        this.apellido_m = apellido_m;
        this.ciudad = ciudad;
        this.telefono_fijo = telefono_fijo;
        this.telefono_cel = telefono_cel;
        this.email = email;
    }
}