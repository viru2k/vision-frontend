export class FacturaElectronicaRegistro {

    id:string;
    descripcion:string;
    unidad:string;
    cantidad:number;
    precio_unitario:number;
    precio_total:number;
    factura_id:string;

    constructor(  id:string,
        descripcion:string,
        unidad:string,
        cantidad:number,
        precio_unitario:number,
        precio_total:number,
        factura_id:string
        ){

        this.id = id;
        this.descripcion = descripcion;
        this.unidad = unidad;
        this.cantidad = cantidad;
        this.precio_unitario = precio_unitario;
        this.precio_total = precio_total;
        this.factura_id = factura_id;
    }
}