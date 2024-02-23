class Geometria{
    constructor(area,altura,base,raio){
        this.area = area
        this.altura = altura
        this.base = base
        this.raio = raio
    }
    calculaPrisma(){ // Arthur
        let v = 0
        v = (this.area * this.base) * this.altura
        return v
    }
    calculaPiramide(){ // Eduardo
       let volume = 0
       volume = ((this.altura * this.base) * this.altura) / 3
       return volume


    }
    calculaCilindro(){ // Laura
       cilindro = 0
       cilindro = (3.14 * (this.raio * this.raio)) * (this.altura)
       return cilindro

    }
    calculaCone(){ // Eduardo
    let volume = 0 
    volume = (3.14 * (this.raio^2) * this.altura) / 3
    return volume

    }
    calculaEsfera(){ // Arthur
        let v = 0
        v = 1,333333333333333 * (3.14159265359 *(this.raio ^ 3))
        return v
    }
}