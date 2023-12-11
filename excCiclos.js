/*1. Crie uma função chamada contadorCrescente que recebe um número inteiro
positivo como argumento e, em seguida, utiliza um loop while para contar de 1 até o
número fornecido. A função deve imprimir cada número no console à medida que
conta.*/

/*function contadorCrescente (numero) {
    if (numero < 0 ){
        console.log("Insira um número inteiro")
         return 
    }
    let i = 1
    while (i <= numero){
        console.log(i)
        i ++;
    }
}
contadorCrescente(8)

/*2. Repita a mesma função contadorCrescente que recebe um número inteiro positivo
como argumento e, em seguida, só que utiliza um loop for para contar de 1 até o
número fornecido. A função deve imprimir cada número no console à medida que
conta.*/

/* function contadorCrescente (numero){
    if (numero < 0){
        console.log("Insira um número inteiro!")
        return
    }
    for (let i = 0; i <= numero; i++){
        console.log(i)
    }
    return 

}
contadorCrescente(9)*/


/*3. Implemente a função somaNumerosPares que recebe um número inteiro positivo
como argumento. A função deve calcular a soma de todos os números pares de 1
até o número fornecido, inclusive.*/
/*function somaNumerosPares (numero){
    if (numero < 0){
        console.log("Insira um número inteiro")
    }
    let soma = 0
    for (i = 0; i <= numero; i++){
        if (i % 2 === 0){
         soma += i
        }
        
    }
    console.log(soma)
}
somaNumerosPares(16) */


















// let soma = 0;
//     for (let i = 0; i <= numero; i++) {
//         if (i % 2 === 0) {
//             soma += i
//         }
//     }
//     return soma;
// }


// console.log(somaNumerosPares(6));



/*4. Crie uma função chamada somaNumerosImpares que recebe um número inteiro
positivo como argumento e utiliza um loop while para somar todos os números
ímpares de 1 até o número fornecido. Retorne o resultado da soma.*/

function somaNumerosImpares(numero) {
    let soma = 0
    let i = 0
    if (numero < 0) {
        console.log("Insira número inteiro")
        return
    }

    while (i <= numero) {
        if (i % 2 === 1) {
            soma = soma + i
        }
        i++
    }
    console.log(soma)

}

somaNumerosImpares(3)

/*5. Num bolo de aniversário existem várias velas.
Cada elemento do array velas é um booleano que tem o valor true se a vela estiver
acesa e false se estiver apagada.
Implementa a função contaVelasAcesas de forma a que seja sempre retornado o
número de velas acesas.*/
let velaAcesa = true
let velaApagada = false
let velas = [velaAcesa, velaApagada, velaAcesa, velaAcesa, velaApagada]
function contaVelasAcesas (velas){
    let soma = 0
    for (let i = 0; i < velas.length; i++ ){
        if (velas[i]){
            soma= soma + 1
        }
    }
    console.log(soma)
}
contaVelasAcesas(velas)


/*6. Crie uma função chamada imprimirNomesMaiuscula que recebe um array de
nomes como argumento e imprime no console cada nome em letra maiúscula. Para
isso, você deve declarar o seguinte array: let people = ["Scooby", "Velma", "Daphne",
"Shaggy", "Fred"];
A função imprimirNomesMaiuscula deve iterar sobre o array de nomes, converter
cada nome para letra maiúscula e, em seguida, imprimir o resultado no console.*/

let people = ["Scooby", "Velma", "Daphne","Shaggy", "Fred"]

function imprimirNomesMaiuscula (people){
    for (let i = 0; i < people.length; i++){
        console.log(people[i].toUpperCase())        
    }
}

imprimirNomesMaiuscula(people)