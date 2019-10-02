import { FacturaElectronicaRegistro } from './factura-electronica-registro.model';
export class FacturaElectronica {

    
    
    
    public id:string;

      CantReg:string;
      PtoVta:string;
      CbteTipo:string;
      Concepto:string;
      DocTipo:string;
      DocNro:string;
      CbteDesde:string;
      CbteHasta:string;
      CbteFch:string;
      ImpTotal:string;
      ImpTotConc:string;
      ImpNeto:string;
      ImpOpEx:string;
      ImpIVA:string;
      ImpTrib:string;
      MonId:string;
      MonCotiz:string;
      Iva:string;
      FchServDesde: string;
      FchServHasta: string;
      FchVtoPago: string;
      facturaElectronicaRegistro: FacturaElectronicaRegistro[]

    constructor(  id:string,
        CantReg:string,
        PtoVta:string,
        CbteTipo:string,
        Concepto:string,
        DocTipo:string,
        DocNro:string,
        CbteDesde:string,
        CbteHasta:string,
        CbteFch:string,
        ImpTotal:string,
        ImpTotConc:string,
        ImpNeto:string,
        ImpOpEx:string,
        ImpIVA:string,
        ImpTrib:string,
        MonId:string,
        MonCotiz:string,
        Iva:string,
        FchServDesde: string,
        FchServHasta: string,
        FchVtoPago: string,
        facturaElectronicaRegistro: FacturaElectronicaRegistro[]
          ) {
        
            this.id = id;
            this.CantReg =  CantReg;
            this.PtoVta =         PtoVta;
            this.CbteTipo =         CbteTipo;
            this.Concepto =         Concepto;
            this.DocTipo =         DocTipo;
            this.DocNro =         DocNro;
            this.CbteDesde =         CbteDesde;
            this.CbteHasta =         CbteHasta;
            this.CbteFch =         CbteFch;
            this.ImpTotal =         ImpTotal;
            this.ImpTotConc =         ImpTotConc;
            this.ImpNeto =         ImpNeto;
            this.ImpOpEx =         ImpOpEx;
            this.ImpIVA =         ImpIVA;
            this.ImpTrib =         ImpTrib;
            this.MonId =         MonId;
            this.MonCotiz =         MonCotiz;
            this.Iva =         Iva;
            this.FchServDesde = FchServDesde;
            this.FchServHasta = FchServHasta;
            this.FchVtoPago = FchVtoPago;
            this.facturaElectronicaRegistro = facturaElectronicaRegistro;
    }
}