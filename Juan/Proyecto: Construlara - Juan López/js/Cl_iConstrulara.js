export default class Cl_iConstrulara{

    reporteConstrutora(montC, montE, montL, totIng, promEd, ced){
        return `<br> <b>Monto total de ingresos por cada tipo de obra</b>
        <br> Casa: $${montC.toFixed(2)}
        <br> Edificio: $${montE.toFixed(2)}
        <br> Local comercial: $${montL.toFixed(2)}
        <br>
        <br> Total de ingresos: $${totIng.toFixed(2)}
        <br> Monto promedio cobrado en obras de tipo edificio: $${promEd.toFixed(2)}
        <br> Cédula del cliente a quien se le cobro menos por la obra: ${ced}`;
    }
}