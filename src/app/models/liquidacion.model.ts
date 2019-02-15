export class Liquidacion {

    
    
    public obra_social_id:string;
    public numero:string;
    public fecha_desde :Date;
    public fecha_hasta :Date;
    public liquidacion_generada_id :string;
    public liquidacion_id :string;
    public cant_orden :string;
    public total :string;
    public usuario_audito :string;
    public estado :string;
    

    constructor(
        obra_social_id:string,
        numero:string,
        fecha_desde :Date,
        fecha_hasta :Date,
        liquidacion_generada_id :string,
        liquidacion_id :string,
        cant_orden :string,
        total :string,
        usuario_audito :string,
        estado :string
         

    ) {
        
       
        this.obra_social_id = obra_social_id;
        this.numero = numero;     
        this.fecha_desde = fecha_desde;      
        this.fecha_hasta = fecha_hasta;
        this.liquidacion_generada_id= liquidacion_generada_id;
        this.liquidacion_id= liquidacion_id;
        this.cant_orden = cant_orden;
        this.total = total;
        this.liquidacion_id= liquidacion_id;
        this.usuario_audito= usuario_audito;
        this.estado= estado;      
    }
}