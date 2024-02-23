class Geometria{

constructor(area,altura,base,raio){

    this.area = area
    this.altura = altura
    this.base = base
    this.raio = raio
}

calculaPiramede(){
let volume = 0
volume = ((this.altura * this.base) * this.altura) / 3
return volume


}

calculaCone(){
let volume = 0 
volume = (3.14 * (this.raio^2) * this.altura) / 3
return volume

}




}

