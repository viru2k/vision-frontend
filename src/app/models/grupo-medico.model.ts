
export class GrupoMedico {

    
    
    public nombre:string;
    public apellido:string;
    public cirugia_grupo_nombre:string;
    public porcentaje_distribucion:number;
    public id_grupo:string;
    public medico_id:string;
    public codigo:string;
    public id:string;
    constructor(nombre:string, apellido:string, cirugia_grupo_nombre:string, porcentaje_distribucion:number,
        id_grupo:string, medico_id:string, codigo:string, id:string) {
        
       
        this.nombre = nombre;
        this.apellido = apellido;
        this.cirugia_grupo_nombre = cirugia_grupo_nombre;
        this.porcentaje_distribucion = porcentaje_distribucion;
        this.id_grupo = id_grupo;
        this.medico_id = medico_id;
        this.codigo = codigo;
        
         
    }
}