/*1. Comprimento da String:
● Escreva uma função chamada comprimentoString que recebe uma string
como parâmetro e retorna o comprimento da string.*/
function comprimentoString (string){
    return string.length
}

console.log(comprimentoString("Gabriela"))

/*2. Área do Retângulo:
● Implemente uma função chamada calcularAreaRetangulo que recebe a
largura e a altura de um retângulo como parâmetros e retorna a área.*/

function calcularAreaRetangulo (largura, parametro){
    return largura * parametro
}
console.log(calcularAreaRetangulo(2, 3))


/* 3. Concatenar Strings:
● Escreva uma função chamada concatenarStrings que recebe duas strings
como parâmetros e retorna uma única string resultante da concatenação das
duas, com um espaço entre elas.*/

function concatenarStrings (string1, string2){
    return string1 + string2
}

console.log(concatenarStrings("Gabriela ", "Nunes"))


/* 4. Somar NAO ENTENDI
● Escreva uma função chamada somar que recebe duas variáveis a e b como
parâmetros e retorna valor numérico das duas variáveis, guarde o resultado
numa variável chamada soma.  */

function somar (a, b){
    return a + b
}
let soma = somar (2,3)

console.log(soma)


/* 5. Dobro e Triplo:
● Crie uma função chamada dobroETriplo que recebe um número como
parâmetro e retorna um array contendo o dobro e o triplo desse número.*/

function dobroETriplo (numero){
    let numeroDobro = numero * 2
    let numeroTriplo = numero * 3
    return numero = [numeroDobro, numeroTriplo]
}
console.log(dobroETriplo(2))

/*6. Raiz Quadrada:
● Escreva uma função chamada calcularRaizQuadrada que recebe um
número como parâmetro e retorna a raiz quadrada desse número.*/
function calcularRaizQuadrada (numero){
return Math.sqrt(numero)
}

console.log(calcularRaizQuadrada(9))


/* 7. Calcular Idade em Dias:
● Crie uma função chamada calcularIdadeEmDias que recebe a idade de
uma pessoa como parâmetro e retorna a idade em dias. Considere que um
ano tem 365 dias.*/
function calcularIdadeEmDias (idade){
    return idade * 365
}
console.log(calcularIdadeEmDias(30))

/* 8. Criar Objeto de Pessoa:
● Crie uma função chamada criarPessoa que recebe parâmetros como nome,
idade e cidade, e retorna um objeto representando uma pessoa.*/

function criarPessoa (nome, idade, cidade){
    let person = {
        nome: nome,
        idade: idade,
        cidade: cidade
    }
    
    return person
}

console.log(criarPessoa("Gabriela", 29, "Valongo"))


/* 9. Adicionar Propriedade:
● Escreva uma função chamada adicionarPropriedade que recebe um objeto
e adiciona uma nova propriedade a ele.*/

let objeto = {
    nome: "Gabriela",
    idade: 29,
    naturalidade: "Brasil"
}
function adicionarPropriedade (objeto, propriedade, valor){

    objeto[propriedade]=valor;
    return objeto;
}
console.log(adicionarPropriedade(objeto,"profissao", "Tester"))


/*10. Remover Propriedade:
● Escreva uma função chamada removerPropriedade que recebe um objeto e
o nome de uma propriedade, retornando um novo objeto sem a propriedade
especificada.*/

function removerPropriedade (objeto, nomePropriedade){
    delete objeto[nomePropriedade] 
    return objeto
}

console.log(removerPropriedade(objeto, "naturalidade"))
console.log(removerPropriedade(objeto, "idade"))