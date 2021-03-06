/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Paulista';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthians', 'São Paulo', 'Palmeiras', 'Santos', 'Ponte Preta'];
console.log('Times que estão participando do campeonato:', teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(numArg) {
    if(numArg < 1 && numArg > 6){
        return 'O time que está em ' + numArg + 'º lugar é o ' + teams[numArg - 1] +
        '.';
    }
    return 'Não temos a informação do time que está nessa posição.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); //"O time que está em 1º lugar é o Corinthians."
showTeamPosition(4); //"O time que está em 4º lugar é o Santos."
showTeamPosition(3); //"O time que está em 3º lugar é o Palmeiras."
showTeamPosition(7); //"Não temos a informação do time que está nessa posição."
/*

Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var numero = 20;
while (numero <= 30) {
  console.log('Numero do While ->', numero++);
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(novaCor) {
  switch (novaCor) {
    case 'vermelha':
      return 'O hexadecimal para a cor ' + novaCor + ' é #ff0000';
    case 'azul':
      return 'O hexadecimal para a cor ' + novaCor + ' é #0000ff';
    case 'verde':
      return 'O hexadecimal para a cor ' + novaCor + ' é #00ff00';
    case 'preta':
      return 'O hexadecimal para a cor ' + novaCor + ' é #000000';
    case 'branca':
      return 'O hexadecimal para a cor ' + novaCor + ' é #ffffff';
    default:
      return 'Não temos o equivalente hexadecimal para ' + novaCor;
  }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('vermelha'); //O hexadecimal para a cor vermelha é #ff0000
convertToHex('azul'); //O hexadecimal para a cor azul é #0000ff
convertToHex('verde'); //O hexadecimal para a cor verde é #00ff00
convertToHex('branca'); //O hexadecimal para a cor branca é #ffffff
convertToHex('preta'); //O hexadecimal para a cor preta é #000000
convertToHex('rosa'); //Não temos o equivalente hexadecimal para rosa
convertToHex('laranja'); //Não temos o equivalente hexadecimal para laranja
convertToHex('roxo'); //Não temos o equivalente hexadecimal para roxo
