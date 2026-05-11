import Cl_Obra from "./Cl_Obra.js";
import Cl_iObra from "./Cl_iObra.js";
import Cl_Construlara from "./Cl_Construlara.js";
import Cl_iConstrulara from "./Cl_iConstrulara.js";

let iconstru = new Cl_iConstrulara(),
    constru = new Cl_Construlara(),
    salida = document.getElementById("salida");

let opc = 1;

while(opc == 1){
    let iobra = new Cl_iObra(),
        c = iobra.leerCedula(),
        z = iobra.leerZona(),
        to = iobra.leerTipoObra(),
        tm = iobra.leerTamaño(),

        obra = new Cl_Obra(c, z, to, tm);
        constru.procesarObra(obra);

    salida.innerHTML += iobra.reporteObra(obra.cedula, obra.nombreZona(), obra.nombreTipoObra(),
    obra.subTotal(), obra.recargo(), obra.descuento(), obra.montCobrar());

        opc = iobra.solicitarOpcion();
    }

    salida.innerHTML += iconstru.reporteConstrutora(constru.montTotalIngresosCasa(), constru.montTotalIngresosEdificio(),
constru.montTotalIngresosLocal(), constru.montTotalIngresos(), constru.promedioCobradoEdificio(), constru.cedulaClienteMenorCobro());