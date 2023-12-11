/*1. Verificação de Número Par ou Ímpar
● Crie uma função chamada verificarParOuImpar que recebe um número
como parâmetro. A função deve imprimir no console se o número é par ou
ímpar.*/

function verificarParouImpar (numero){
    if (numero % 2 === 0) {
        return "Este número é par!"
    }
    return "Este número é ímpar!"
}
console.log(verificarParouImpar(9))
/*2. Classifica Faixa Etária:
● Crie uma função com o nome calculaClassificacaoEtaria que recebe o
número de anos completos de uma criança e retorna a classificação etária:
■ Entre 0 e 1 Anos: Lactente
■ Entre 2 e 4 anos: Pré-escolar
■ Entre 5 e 10 anos: Escolar
■ Entre 11 e 17 anos: Adolescente*/

function calcularClassificacaoEtaria (idade){
    if (idade == 0 && idade <= 1 ){
        return "Lactente"
    } else if (idade >= 2 && idade <=4){
        return "Pré-escolar"
    } else if (idade >=5 && idade <=10){
        return "Escolar"
    } else if (idade >=11 && idade <= 17){
        return "Adolescente"
    } 
    return "Não há classificação!"
}
console.log(calcularClassificacaoEtaria(19))

/*3. Categorizar Idade
● Crie uma função chamada categorizarIdade que recebe a idade de uma
pessoa como parâmetro e imprime "Criança", "Adolescente", "Adulto" ou
"Idoso" com base na faixa etária.*/

function categorizarIdade (idade){
    if (idade >= 0 && idade <= 13){
        return "Criança"
    } else if (idade >= 14 && idade <=17){
        return "Adolescente"
    } else if (idade >= 18 && idade <= 59){
        return "Adulto"
    } else if (idade >= 60){
        return "Idoso"
    }
}
console.log(categorizarIdade(122))


/*4. Verificar Vogal ou Consoante
● Crie uma função chamada verificarVogalConsoante que recebe uma letra
como parâmetro e imprime "Vogal" se for uma vogal e "Consoante" se for
uma consoante. Considere letras minúsculas.*/
let vogais = ["a", "e", "i", "o", "u"]
function verificarVogalConsoante (letra){
    if (vogais.includes(letra)){
        return "Esta letra é uma vogal!"
    } 
    return "Esta letra é uma consoante!"
}
console.log(verificarVogalConsoante("g"))

/*5. Nome do Mês
● Crie uma função com o nome mesesDoAno que recebe um número que
representa um mês do ano, e retorna o mês correspondente. PODIA SER FEITO COM SWITCH CASE*/
function mesesDoAno (numero){
    if (numero === 1){
        return "Janeiro"
    } else if (numero === 2){
        return "Fevereiro"
    } else if (numero === 3){
        return "Março"
    } else if (numero === 4){
        return "Abril"
    } else if (numero === 5){
        return "Maio"
    } else if (numero === 6){
        return "Junho"
    } else if (numero === 7){
        return "Julho"
    } else if (numero === 8){
        return "Agosto"
    } else if (numero === 9){
        return "Setembro"
    } else if (numero === 10){
        return "Outubro"
    } else if (numero === 11){
        return "Novembro"
    } else if (numero === 12){
        return "Dezembro"
    } 
    return "Insira o número de mês válido!"
}
console.log(mesesDoAno(5))
/*6. Tradutor de Cores
● Crie uma função chamada traduzirCor que recebe o nome de uma cor em
inglês como parâmetro e retorna a tradução para português. Considere pelo
menos cinco cores.*/
function traduzirCor(cor) {
    switch (cor.toLowerCase()) {
        case "red":
            return "Vermelho";
        case "blue":
            return "Azul";
        case "green":
            return "Verde";
        case "yellow": 
            return "Amarelo";
        case "purple":
            return "Roxo"
        default:
            return "Cor desconhecida";
    }
}

console.log(traduzirCor("blue"));

/*7. Estações do Ano
● Crie uma função chamada estacaoDoAno que recebe um número de 1 a 12
representando um mês e imprime "Primavera", "Verão", "Outono" ou
"Inverno" com base na estação correspondente.*/
function estacaoDoAno (mes) {
    switch (mes) {
        case 12:
        case 1:
        case 2:
            return "Inverno"
        case 3:
        case 4:
        case 5:
            return "Primavera"
        case 6:
        case 7:
        case 8:
            return "Verão"
        case 9:
        case 10:
        case 11:
            return "Outono"
    }

}
console.log(estacaoDoAno(3))


/*8. Identificar Dia da Semana
● Crie uma função chamada identificarDiaDaSemana que recebe um número de 1 a
7 como parâmetro e retorna o nome do dia da semana correspondente.
A função deve imprimir uma mensagem indicando o dia da semana correspondente ao
número fornecido como argumento. Se o número estiver fora do intervalo de 1 a 7, a função
deve retornar a mensagem "Número inválido. Informe um número de 1 a 7."*/

function identificarDiaDaSemana (numero){
    switch (numero) {
        case 1:
            return "Domingo"
        case 2:
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7:
            return "Sábado"
    }
    return "Número inválido"
}
console.log(identificarDiaDaSemana(8))