/*JAVASCRIPT - 2 - EXERCÍCIO #2
Faz a concatenação de duas strings que se encontram nas
 variáveis a e b, deixando um espaço entre elas e
  atribui o resultado à variável c
*/
let a = "Olá"
let b = "Mundo"
let c = a + " "+ b


/*JAVASCRIPT - 2 - EXERCÍCIO #3
Soma o valor numérico da duas variáveis. 
Guarda o resultado numa variável chamada soma.
*/
// Aqui é preciso somar dois números
// Mas em que um deles é uma string
// Guarda o resultado da soma na variável soma
let num = 100
let str = '100'

let number = parseInt(str)
let soma= num + number;


/**
 * JAVASCRIPT - 3 - EXERCÍCIO #2
Cria uma variável do tipo string com o nome equacao.

Utiliza ciclos para colocar nessa variável todos os valores do array, separados por " + ".

No final, acrescenta também " = " seguido da soma dos números presentes no array.
 */
let array = [4, 1, 4, 5];
let equacao = "";
let resultado = 0;

for (let i = 0; i < array.length;i++){
    equacao += array[i];
    if (i < array.length -1){
        equacao += " + ";
    }
    resultado += array[i];
}
equacao += " = " + resultado;
console.log(equacao);


/**
 * JAVASCRIPT - 3 - EXERCÍCIO #3
Cria uma variável do tipo number com o nome max.

Guarda nessa variável o maior valor presente no array.
 */
let array = [4, 1, 4, 5]
let max = 0

for (let i= 0; i < array.length ;i++){
    if (array[i] > max){
        max = array[i]
    }
}


/**
 * JAVASCRIPT - 3 - EXERCÍCIO #4
Cria uma variável do tipo number com o nome min.

Guarda nessa variável o menor valor positivo presente no array.
 */
let array = [4, 1, -5, 4, 5]
let min = array[0]

for (let pos= 0;pos < array.length ; pos++){

    // verificar se os números são positivos
    if (array[pos] > 0){
         //verificar o menor número positivo
        if (array[pos] < min){
            min = array[pos]
        }
    }
}


/**
 * JAVASCRIPT - 3 - EXERCÍCIO #5
Cria uma variável do tipo number com o nome maxIndex.

Guarda nessa variável o índice da primeira ocorrência do maior valor presente no array.
 */
let array = [4, 5, 4, 5]
let maxIndex = 0
let max = 0

for (let i= 0; i < array.length;i++){
    if (array[i]> max){
        maxIndex=i
        max= array[i]

    }
}

console.log(maxIndex)


/**
 * JAVASCRIPT - 3 - EXERCÍCIO #6
Cria uma variável do tipo number com o nome potencia.
Guarda nessa variável o resultado de elevar x a n 
*/
let x = 3
let n = 3
let potencia = x**n
potencia



/**
 * JAVASCRIPT - 4 - EXERCÍCIO #2
A fórmula resolvente serve para resolver equações de segundo grau.
Neste exercício deves implementar a função formulaResolvente que recebe 3 argumentos: a, b e c.
Se a equação tiver solução, deves retornar um array com as soluções possíveis. No indíce 0 deve estar a solução que resulta da utilização do , e no índice 1 deve estar a solução que resulta da utilização do 
Se a equação não tiver solução, deves retornar o texto "Sem Solução".
Notas:
A fórmula resolvente é utilizada para resolver equações de segundo grau, ou seja, equações com a forma ;
As equações de 2º grau têm duas soluções ou não têm solução. Não têm solução se o interior da raíz quadrada for menor que 0.
 */
function formulaResolvente(a, b, c) {
    // b ao quadrado - 4 a .c
    let dentroRaiz = Math.pow(b, 2) - 4 * a * c
    // validar se é menor que 0
    if (dentroRaiz <= 0){
        console.log("Sem Solução")
        return "Sem Solução"
    }
    // raiz quadrada do resultado de cima
    let raizQuadrada = Math.sqrt(dentroRaiz)
    // - b + o segundo resultado
    let resultado1 = -b + raizQuadrada
    // - b - o segundo resulado
    let resultado2= -b - raizQuadrada
    // pra cada um dos resultados dividir por 2a
    resultado1 = resultado1 / 2 * a
    // a mesma condição de cima para o resultado 2
    resultado2= resultado2 / 2 * a 

    return [resultado2, resultado1]
}


/**
 * JAVASCRIPT - 4 - EXERCÍCIO #3
O Teorema de Pitágoras permite-nos calcular a dimensão da hipotenusa de um triângulo rectângulo.
Implementa a função teoremaDePitagoras que recebe como argumento os comprimentos dos dois catetos e retorna o valor da hipotenusa.
 */
function teoremaDePitagoras(c1, c2) {
    // a hipotenusa é igual a raiz quadrada da soma dos catetos ao quadrado
    let somaCatetosQuadrados = Math.pow(c1, 2)  + Math.pow(c2, 2)
    return Math.sqrt(somaCatetosQuadrados)
}


/**
 * JAVASCRIPT - 4 - EXERCÍCIO #4
Implementa a função somatorio que retorna a soma de todos os valores presentes no array de números arr.
 */
function somatorio(arr) {
    let soma = 0
    for (let i= 0;i < arr.length;i++){
        soma = soma + arr[i]
    }
    
    return soma
}


/**
 * JAVASCRIPT - 4 - EXERCÍCIO #5
Num bolo de aniversário existem várias velas.
No array velas é indicado o tamanho de cada uma das velas.
Implementa a função contarVelasMaisAltas de forma a que seja sempre
 retornado o número de velas que têm o maior tamanho.
 */
 function contarVelasMaisAltas(velas) {
    let valorMaisAlto = velas[0]
    let contadora = 1
    for (let i = 1; i < velas.length; i ++){
        if (velas[i] > valorMaisAlto ){
            valorMaisAlto = velas[i]
            contadora = 1
        } else if ( velas[i] === valorMaisAlto) {
            contadora = contadora + 1
        }
    }
    return contadora
}


/**
 * JAVASCRIPT - 5 - EXERCÍCIO #1
Num bolo de aniversário existem várias velas.
Cada elemento do array velas é um booleano que tem o valor  se a vela estiver acesa e 
 se estiver apagada.
Implementa a função contaVelasAcesas de forma a que seja 
sempre retornado o número de velas acesas.
 */

const velaAcesa = true
const velaApagada = false
function contaVelasAcesas(velas) {
    let numero = 0
    for (let i= 0; i < velas.length; i++){
        if (velas[i] === velaAcesa){
            numero += 1
        }
    }
    return numero
}


/**
 * JAVASCRIPT - 5 - EXERCÍCIO #2
Num bolo de aniversário existem várias velas.
Cada elemento do array velas é um booleano que tem o valor 
 se a vela estiver acesa e  se estiver apagada.
Implementa a função encontraPrimeiraVelaApagada de forma a 
que seja sempre retornado o índice da primeira vela apagada.
 */
let velas = [true, false]
function encontraPrimeiraVelaApagada(velas) {
   for (let i = 0;i < velas.length ;i++){
       if (velas[i] === false){
           return i
       }
   }
}


/**
 * JAVASCRIPT - 5 - EXERCÍCIO #3
Num bolo de aniversário existem várias velas.
Cada elemento do array velas é um booleano que tem o valor 
 se a vela estiver acesa e  se estiver apagada.
Implementa a função encontraUltimaVelaAcesa de forma 
a que seja sempre retornado o índice da última vela acesa.
 */
const velas = [true, false]
function encontraUltimaVelaAcesa(velas) {
    for (let i = velas.length -1; i >= 0; i--){
        if (velas[i] === true){
           return i
        }
    }
}


/**
 * JAVASCRIPT - 5 - EXERCÍCIO #4
Num bolo de aniversário existem várias velas.
Cada elemento do array velas é um booleano que tem o valor 
 se a vela estiver acesa e  se estiver apagada.
Implementa a função ordenaVelasApagadasPrimeiro de forma a 
que o array fique com as velas apagadas no início.
 */
let velas = [true, false]
function ordenaVelasApagadasPrimeiro(velas) {
    let listaOrdenada = []
    for (let i = 0; i < velas.length; i++){
        if (velas[i] === false){
            listaOrdenada.unshift(velas[i])
        } else if(velas[i] === true){
            listaOrdenada.push(velas[i])
        }
    }
    return listaOrdenada
}


/**
 * JAVASCRIPT - 5 - EXERCÍCIO #5
Num bolo de aniversário existem várias velas.
Cada elemento do array velas é um booleano que tem o valor 
 se a vela estiver acesa e  se estiver apagada.
Implementa a função ordenaVelasAcesasPrimeiro de forma a que o 
array fique com as velas acesas no início.
Nota que no exemplo apresentado no vídeo existe um pequeno bug que 
não altera o resultado. Consegues descobrir qual é?
 */
function ordenaVelasAcesasPrimeiro(velas) {
    let listaOrdenada = []
    for (let i = 0; i < velas.length; i++){
        if (velas[i] === true){
            listaOrdenada.unshift(velas[i])
        } else if (velas[i] === false){
            listaOrdenada.push(velas[i])
        }
    }
    return listaOrdenada
}
