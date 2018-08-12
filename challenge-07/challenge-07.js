/*
Crie um array com 5 items (tipos variados).
*/
var array = [1, true, 'Javascript', null,{bola : 'redonda'}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem (novoItem) {
    array.push(novoItem);
    return array;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var novaArray = [3, null, "Funciona"]
console.log(addItem(novaArray)); //[1, true, "Javascript", null, {bola: 'redonda'},[3, null, "Funciona"]]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é', novaArray[5][1]); //O segundo elemento do segundo array é  null

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + array.length +' itens'); //O primeiro array tem 6 itens

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + array[5].length +' itens'); //O segundo array tem 3 itens

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var contador = 10;
while (contador <= 20){
    (contador % 2) === 0 ? console.log( 'Números pares entre 10 e 20:', contador) : ''; 
    contador++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var contador = 10;
while (contador <= 20){
    if ((contador % 2) !== 0){
        console.log( 'Números impares entre 10 e 20:', contador);
    }
    contador++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(var i = 100; i <= 120; i++){
    (i % 2) === 0 ? console.log( 'Números pares entre 100 e 120: ', i) : '';
}

for(var cont = 110; cont <= 125; cont++){
    if((cont % 2) === 1){
        console.log( 'Números ímpares entre 111 e 125: ', cont);
    }
}