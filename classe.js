class Geometria {

    constructor(area,altura,base,raio){

        this.area = area
        this.altura = altura
        this.base = base
        this.raio = raio

    }


    calculaPrisma(){
    // Área * Base * Altura
        let v = 0

        v = (this.area * this.base) * this.altura

        return v
        
    }

    
    calculaEsfera(){
    // (4/3) pir³
        let v = 0

        v = 1,333333333333333 * (3.14159265359 *(this.raio ^ 3))

        return v
    
    }
}



