// decoração da função e ela retorna a mensagem
function saudacao (nome){
    return "Olá, " + nome + "!"
}

//pode usar com uma variável let ou pedir por console.log
let mensagem = saudacao("Ana")

console.log(mensagem)

function somar (a, b) {
    let resultado = a + b
    return resultado
}

console.log(somar(3, 4))

function comprimentoString (string) {
    return string.length;
}
/*function comprimentoString (string) {
 let comprimentoString = string.lenght
 return comprimentoString
} 

let string= "Gabi"
console.log(comprimentoStrind("string"))*/

console.log(comprimentoString("Gabi"))
console.log(comprimentoString("Carol"))
console.log(comprimentoString("Ricardo"))
console.log(comprimentoString("Diogo"))


function calcularAreaRetangulo (largura, altura){
    let area = largura * altura
    return area 
    //ou return altura * largura
}

console.log(calcularAreaRetangulo(4, 2))

//exerc 3
function concatenarStrings (stringPrimeira, stringSegunda){
    return (stringPrimeira + " " + stringSegunda); 
}

console.log(concatenarStrings("Gabriela", "Nunes"))

//exerc 4
function somarAgain (a, b){
    let resultado = a + b
    return resultado
}
console.log(somarAgain(1,2))

//exerc 5
/*let number = [ ]
function dobroETriplo (num){
    return number.push (num * 2, num * 3)
}
console.log(dobroETriplo (2) */

function dobroETriplo (number) {
    let dobro = number * 2
    let triplo = number * 3
    return [dobro, triplo]
}
console.log(dobroETriplo(4))

//exec 6
function calcularRaizQuadrada (numero){
    return  Math.sqrt(numero)
}
console.log(calcularRaizQuadrada(9))

//exec 7
function calcularIdadeEmDias (idade){
    let calcular = idade * 365
    return calcular
}
console.log(calcularIdadeEmDias(39))

//exec 8
function criarPessoa (nome, idade, cidade){
    let person = {
        nome: nome,
        idade: idade,
        cidade: cidade,

    }
    return person
}
console.log(criarPessoa("Gabi", 29, "Valongo"))
