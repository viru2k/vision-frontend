export class Practica {

    
    
    public cirugia_grupo_medico_id:string;
    public convenio_id:string;
    public fecha_atencion:Date;
    public paciente_id:string;
    public cantidad:string;
    public valor:string;
    public total_practica:string;
    public conceptos_debito_id:string;
    public liquidacion_id:string;
    public liquidacion_generada_id:string;
    public es_refacturada:string;
    public paciente_agendas_id:string;
    public usuario_alta_id:string;
    public usuario_liquida_id:string;
    public usuario_factura_id:string;
    public estado_liquidacion:string;

    constructor(
        cirugia_grupo_medico_id:string,
        convenio_id:string,
        fecha_atencion:Date,
        paciente_id:string,
        cantidad:string,
         valor:string,
         total_practica:string,
         conceptos_debito_id:string,
         liquidacion_id:string,
         es_refacturada:string,
         paciente_agendas_id:string,
         usuario_alta_id:string,
         usuario_liquida_id:string,
         usuario_factura_id:string,
         estado_liquidacion:string
         

    ) {
        
       
        this.cirugia_grupo_medico_id = cirugia_grupo_medico_id;
        this.convenio_id = convenio_id;     
        this.fecha_atencion = fecha_atencion;      
        this.paciente_id = paciente_id;
        this.cantidad= cantidad;
        this.valor= valor;
        this.total_practica = total_practica;
        this.conceptos_debito_id = conceptos_debito_id;
        this.liquidacion_id= liquidacion_id;
        this.es_refacturada= es_refacturada;
        this.paciente_agendas_id= paciente_agendas_id;
        this.usuario_alta_id = usuario_alta_id;
        this.usuario_liquida_id = usuario_liquida_id;
        this.usuario_liquida_id = usuario_liquida_id;
        this.usuario_factura_id = usuario_factura_id;
        this.estado_liquidacion = estado_liquidacion;
    }
}