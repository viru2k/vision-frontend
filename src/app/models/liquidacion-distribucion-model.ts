import { OperacionCobroPractica } from './operacion-cobro-practica.model';


export class  LiquidacionDistribucion {    
    public operacion_cobro_practica: OperacionCobroPractica[];
    public medico_opera: string;
    public medico_ayuda: string;
    public medico_ayuda2: string;
    public medico_clinica: string;
    public medico_opera_porcentaje: number;
    public medico_ayuda_porcentaje: number;
    public medico_ayuda2_porcentaje: number;
    public medico_clinica_porcentaje: number;
    public medico_opera_distribucion: number;
    public medico_ayuda_distribucion: number;
    public medico_ayuda2_distribucion: number;
    public medico_clinica_distribucion: number;

    
    constructor(
        operacion_cobro_practica: OperacionCobroPractica[],
        medico_opera: string,
        medico_ayuda: string,
        medico_ayuda2: string,
        medico_clinica: string,
        medico_opera_porcentaje: number,
        medico_ayuda_porcentaje: number,
        medico_ayuda2_porcentaje: number,
        medico_clinica_porcentaje: number,
        medico_opera_distribucion: number,
        medico_ayuda_distribucion: number,
        medico_ayuda2_distribucion: number,
        medico_clinica_distribucion: number

         ) {
            this.operacion_cobro_practica = operacion_cobro_practica;
            this.medico_opera = medico_opera ;
            this.medico_ayuda = medico_ayuda ;
            this.medico_ayuda2 = medico_ayuda2 ;
            this.medico_clinica = medico_clinica ;
            this.medico_opera_porcentaje = medico_opera_porcentaje ;
            this.medico_ayuda_porcentaje = medico_ayuda_porcentaje ;
            this.medico_ayuda2_porcentaje = medico_ayuda2_porcentaje ;
            this.medico_clinica_porcentaje = medico_clinica_porcentaje ;
            this.medico_opera_distribucion = medico_opera_distribucion ;
            this.medico_ayuda_distribucion = medico_ayuda_distribucion ;
            this.medico_ayuda2_distribucion = medico_ayuda2_distribucion ;
            this.medico_clinica_distribucion = medico_clinica_distribucion ;
    }
}
