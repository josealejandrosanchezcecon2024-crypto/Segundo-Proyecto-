export default class Cl_Obra{
    constructor(cedula, zona,tipoObra, tamaño){
        this.cedula = cedula;
        this.zona = zona;
        this.tipoObra = tipoObra;
        this.tamaño = tamaño;
        
    }

    set cedula (c){
        this._cedula = c;
    }
    get cedula(){
        return this._cedula;
    }

    set zona(z){
        this._zona = +z;
    }
    get zona(){
        return this._zona;
    }

    set tamaño(tm){
        this._tamaño = +tm;
    }
    get tamaño(){
        return this._tamaño;
    }

    set tipoObra(to){
        this._tipoObra = +to;
    }
    get tipoObra(){
        return this._tipoObra;
    }

    costoBase(){
        if(this.tipoObra === 1){
            return 300;
        } 
        else if(this.tipoObra === 2){
            return 500;
        }
        else if(this.tipoObra === 3){
            return 800;
    } else return 0;
    }
    
    subTotal(){
        return this.costoBase() * this.tamaño;
    }

    recargo(){
        if(this.tamaño > 400 && this.zona === 3){
            return this.subTotal() * 0.25; 
        }
        else return 0;
    }

    descuento(){
        if(this.tamaño < 80 && this.zona === 1){
            return this.subTotal() * 5 / 100; 
        } else return 0;
    }

    montCobrar(){
        return (this.subTotal() + this.recargo()) - this.descuento();
    }

    nombreZona(){
        if(this.zona === 1){
            return "Oeste";
        }
        else if(this.zona === 2){
            return "Centro";
        }
        else if(this.zona === 3){
            return "Este";
    } else return ""
}

    nombreTipoObra(){
        if(this.tipoObra === 1){
            return "Casa";
        }
        else if(this.tipoObra === 2){
            return "Edificio";
        }
        else if (this.tipoObra === 3){
            return "Local comercial";
    } else return ""
}
}