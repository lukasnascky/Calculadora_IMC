let peso = 75
let altura = 1.75

const imc = peso / altura ** 2

console.log("Peso inserido: " + peso + " Kg")
console.log("Altura inserida: " + altura + " m")
console.log("IMC: " + imc)

if (imc < 16){
    console.log("Resultado: Magreza grave")
} 
else if (imc < 17){
    console.log("Resultado: Magreza moderada")
} 
else if (imc < 18.5){
    console.log("Resultado: Magreza leve")
} 
else if (imc < 25){
    console.log("Resultado: Saudável")
} 
else if (imc < 30){
    console.log("Resultado: Sobrepeso")
} 
else if (imc < 35){
    console.log("Resultado: Obesidade grau I")
} 
else if (imc < 40){
    console.log("Resultado: Obesidade grau II")
} 
else {
    console.log("Resultado: Obesidade grau III")
}