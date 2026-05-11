export default class Cl_Construlara{
    constructor(){
        this.acIngresosCasa = 0.0;
        this.acIngresosEdificio = 0.0;
        this.acIngresosLocalComercial = 0.0;
        this.acIngresosTotales = 0.0;
        this.cntTipoEdificio = 0;
        this.menorCobrarCliente = 99999999999;
        this.auxMenorCobrarCliente = "";
    }

    procesarObra(obra){
        //Acumulador de los ingresos tipo Casa
        if(obra.tipoObra == 1){
            this.acIngresosCasa += obra.montCobrar();
        }

        //acumulador de ingresos edificio
        if(obra.tipoObra == 2){
            this.acIngresosEdificio += obra.montCobrar();
        }

        //acumulador de ingresos local comercial
        if(obra.tipoObra == 3){
            this.acIngresosLocalComercial += obra.montCobrar();
        }

        //acumulador de ingresos totales 
            this.acIngresosTotales += obra.montCobrar();

        //contador de obras tipo edificio
        if(obra.tipoObra == 2){
            this.cntTipoEdificio++;
        }

        //cliente con menor monto a montCobrar
        if(obra.montCobrar() < this.menorCobrarCliente){
            this.menorCobrarCliente = obra.montCobrar();
            this.auxMenorCobrarCliente = obra.cedula;
        }
    }

    montTotalIngresosCasa(){
        return this.acIngresosCasa;
    }

    montTotalIngresosEdificio(){
        return this.acIngresosEdificio;
    }

    montTotalIngresosLocal(){
        return this.acIngresosLocalComercial;
    }

    montTotalIngresos(){
        return this.acIngresosTotales;
    }

    promedioCobradoEdificio(){
        return this.acIngresosEdificio / this.cntTipoEdificio;
    }

    cedulaClienteMenorCobro(){
        return this.auxMenorCobrarCliente;
    }
    
}