/*1. Crie uma função chamada "multiplicaPares" que recebe um número inteiro
positivo como argumento e utiliza um loop for para multiplicar todos os
números pares de 1 até o número fornecido. Retorne o resultado da
multiplicação.*/

function multiplicarPares (numero){
    let multiplicar = 1
    if (numero < 0){
        console.log("Insira um número inteiro")
        return
    }
    for (let i = 1; i < numero; i++){
       if (i % 2 === 0) {
        multiplicar = multiplicar * i 
       }
    }
    return multiplicar
}
console.log(multiplicarPares(5))



/*2. Crie uma função chamada "concatenaPalavras" que recebe um array de
strings como parâmetro. Utilize um loop for para percorrer o array e
concatenar todas as palavras. Ao final, imprima a string resultante no
console.*/

let words = ["palavra1", "palavra2"]

function concatenaPalavras (words){
    let concatenar = ""
    for (let i = 0; i < words.length; i++){
       concatenar += words[i]
       
    }
    return concatenar 
}

console.log(concatenaPalavras(words))


/*3. Crie uma função chamada "imprimeElementos" que recebe um array como
parâmetro. Utilize um loop for para percorrer o array e imprimir cada
elemento no console.*/

function imprimeElementos (elementos){
    for (let i = 0; i < elementos.length; i++){
        console.log(elementos[i])
    }
}

let elementos = ["elemento1", "elemento2", "elemento3"]
imprimeElementos(elementos)

/*4. Crie uma função chamada "geraTabuada" que recebe um número inteiro
como parâmetro e utiliza um loop for para gerar a tabuada desse número de
1 a 10. Retorne um array com os resultados.*/

function geraTabuada (numero){
    if (numero < 0){
        console.log("Insira um número inteiro")
        return
    }
    for (let i = 1; i <= 10; i++){
        console.log(i*numero)
    }
}

geraTabuada(9)

/*5. Implemente uma função chamada "contaCaracteres" que recebe uma string
como argumento e utiliza um loop for para contar quantas vezes a letra 'a'
aparece na string. Retorne o número de ocorrências.*/

function contaCaracteres (texto){
    let letraAProcurar = 'a'
    let contador = 0
    for (let i = 0; i < texto.length; i++){
        if(texto[i] == letraAProcurar)
        {
            contador ++
        }
    }
    return contador
}
let numeroCaracteres = contaCaracteres("estao aqui 3 'a'")
console.log(numeroCaracteres)

/*6. Crie uma função chamada "invertePalavra" que recebe uma string como
argumento e utiliza um loop for para inverter a ordem dos caracteres. Retorne
a string invertida.*/

function invertePalavra (texto){
    let palavraInvertida = ""
    let posicaoMaximaTexto = texto.length - 1

    for (let i = posicaoMaximaTexto; i >= 0; i--){
        palavraInvertida = palavraInvertida + texto[i]
    }

    return palavraInvertida
}
let invertida = invertePalavra("ola!")
console.log(invertida)

/*7. Implemente uma função chamada "somaQuadrados" que recebe um
número inteiro positivo como parâmetro e utiliza um loop for para calcular a
soma dos quadrados de todos os números de 1 até o número fornecido.
Retorne o resultado.*/

function somaQuadrados (numero){
    if (numero < 0){
        console.log("Insira um número inteiro")
        return
    }

    let somaDosQuadrados = 0
    for (let i = 1; i <= numero; i++){
        somaDosQuadrados = somaDosQuadrados + (i*i)
    }
    
    return somaDosQuadrados
}
let valorSomaDosQuadrados = somaQuadrados(3)
console.log(valorSomaDosQuadrados)

/*8. Crie uma função chamada "contaDivisores" que recebe um número inteiro
positivo como parâmetro e utiliza um loop for para contar quantos divisores o
número possui. Retorne o número de divisores.*/

function contaDivisores (numero){
    if (numero < 0){
        console.log("Insira um número inteiro")
        return
    }

    let numeroDivisores = 0
    for (let i = numero; i >= 1; i--){
        if(numero%i === 0){
            numeroDivisores ++
        }
    }
    
    return numeroDivisores
}
let divisores = contaDivisores(6)
console.log(divisores)

/*9. Implemente uma função chamada "calculaMedia" que recebe um array de
números como argumento e utiliza um loop for para calcular a média dos
valores. Retorne a média.*/
function calculaMedia (numeros){

    // media = soma / numero elementos

    let soma = 0
    for (let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i]
    }

    let media = soma / numeros.length
    
    return media
}
let numerosParaCalcularMedia = [4, 7, 1, 5, 3]
let media = calculaMedia(numerosParaCalcularMedia)
console.log(media)

/*10.Desenvolva uma função chamada "somaParesEImpares" que recebe um
número inteiro positivo como parâmetro e utiliza um loop for para separar a
soma dos números pares da soma dos números ímpares de 1 até o número
fornecido. Retorne um objeto com as duas somas distintas.*/
function somaParesEImpares (numero){
    if (numero < 0){
        console.log("Insira um número inteiro")
        return
    }

    let objetoSoma = {
        pares: 0,
        impares: 0
    }
    
    for (let i = 1; i <= numero; i++){
        if(i % 2 === 0){
            objetoSoma.pares = objetoSoma.pares + i
        }else{
            objetoSoma.impares = objetoSoma.impares + i
        }
    }
    return objetoSoma
}

let objetoComSomas = somaParesEImpares(10)
console.log("Soma numeros impares: " + objetoComSomas.impares)
console.log("Soma numeros pares:" + objetoComSomas.pares)