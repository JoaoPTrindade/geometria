let resposta = document.getElementById("resposta")

let calculoPrisma = document.getElementById("calculoPrisma")
let calculoCone = document.getElementById("calculoCone")
let calculoEsfera = document.getElementById("calculoEsfera")
let calculoPiramide = document.getElementById("calculoPiramide")
let calculoCilindro = document.getElementById("calculoCilindro")

calculoPrisma.addEventListener("click", ()=>{

let area = Number(document.getElementById("area").value)
let altura = Number(document.getElementById("altura").value)
let base = Number(document.getElementById("base").value)


    const geometria =  new Geometria(area,altura,base)

    let volume = geometria.calculaPrisma()
    console.log(volume)

})

calculoCone.addEventListener("click",()=>{
let area = Number(document.getElementById("area").value)
let altura = Number(document.getElementById("altura").value)
let base = Number(document.getElementById("base").value)
let raio = Number(document.getElementById("raio").value)

const geometria =  new Geometria(area,altura,base,raio)

let volume = geometria.calculaCone()
console.log(volume)

})

calculoEsfera.addEventListener("click",()=>{
    let area = Number(document.getElementById("area").value)
let altura = Number(document.getElementById("altura").value)
let base = Number(document.getElementById("base").value)
let raio = Number(document.getElementById("raio").value)

const geometria =  new Geometria(area,altura,base,raio)

let volume = geometria.calculaEsfera()
console.log(volume)


    
})

calculoPiramide.addEventListener("click",()=>{
let area = Number(document.getElementById("area").value)
let altura = Number(document.getElementById("altura").value)
let base = Number(document.getElementById("base").value)

const geometria =  new Geometria(area,altura,base)

let volume = geometria.calculaPiramide()
console.log(volume)



    
})

calculoCilindro.addEventListener("click",()=>{
    let area = Number(document.getElementById("area").value)
let altura = Number(document.getElementById("altura").value)
let base = Number(document.getElementById("base").value)
let raio = Number(document.getElementById("raio").value)

const geometria =  new Geometria(area,altura,base,raio)

let volume = geometria.calculaCilindro()
console.log(volume)


    
})