
export class  CirugiaCombinadaRegistro {

    public convenio_id:string;
    public codigo:string;
    public complejidad:string;
    public es_habilitada:string;
    public obra_social_id:string;
    public obra_social_nombre:string;
    public pmo_descripcion:string;
    public pmo_id:string;
    public valor:number;
    public total:number;
    public porcentaje:number;
    
    constructor(
        convenio_id:string,
        codigo:string,
        complejidad:string,
        es_habilitada:string,
        obra_social_id:string,
        obra_social_nombre:string,
        pmo_descripcion:string,
        pmo_id:string,
        valor:number,
        total:number,
        porcentaje:number
         ) {
        
         this.total= total;
         this.porcentaje= porcentaje;
         this.convenio_id= convenio_id;
         this.complejidad = complejidad;
         this.es_habilitada = es_habilitada;
         this.obra_social_nombre = obra_social_nombre;
         this.pmo_descripcion = pmo_descripcion;         
         this.obra_social_id= obra_social_id;
         this.pmo_id= pmo_id;
         this.codigo= codigo;         
         this.valor = valor;
    }
}

