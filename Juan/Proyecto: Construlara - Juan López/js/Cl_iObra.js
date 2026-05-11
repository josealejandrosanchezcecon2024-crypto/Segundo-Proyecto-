export default class Cl_iObra{

    leerCedula(){
        return prompt("ingrese la cedula del cliente: ")
    }

    leerZona(){
        return prompt("Ingrese la zona (1 = Oeste, 2 = Centro, 3 = Este): ")
    }

    leerTipoObra(){
        return prompt("Ingrese el tipo de obra (1 = Casa, 2 = Edificio, 3 = Local comercial): ")
    }

    leerTamaño(){
        return prompt("Ingrese el tamaño de metros cuadrados: ")
    }


    solicitarOpcion(){
        return prompt("¿Desea ingresar otro cliente? (1 = Sí, 0 = No)")
    }

    reporteObra(c, z, to, sub, rec, des, mp){
        return `<br> <b>Cedula:</b> ${c}
        <br> Zona: ${z}
        <br> Tipo de obra: ${to}
        <br> Subtotal: $${sub}
        <br> Recargo: $${rec}
        <br> Descuento: $${des}
        <br> Monto a pagar: $${mp}
        <br>`;
    }
}