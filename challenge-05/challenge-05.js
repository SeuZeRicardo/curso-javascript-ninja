/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [0, 'dois', true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcao(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log (funcao(array)[0]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcao02(arg1, index) {
    return arg1[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var novaArr = [666, 'Numero do Capeta', null , true, 35];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log (funcao02(array)[0]);
console.log (funcao02(array)[1]);
console.log (funcao02(array)[2]);
console.log (funcao02(array)[3]);
console.log (funcao02(array)[4]);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nameBook){
    var bookObj = {
        'Clube da Luta': {
            quantidadePaginas: 320,
            autor: 'Chuck Palaniuk',
            editora: 'Editora Alef',
        },  
        'Dataclisma': {
            quantidadePaginas: 430,
            autor: 'Zeca Camargo',
            editora: 'Editora Nova',
        },
        'Anticristo':{
            quantidadePaginas: 340,
            autor: 'Filosofo alemão',
            editora: 'Editora Bugre',
        }
    }

    return !nameBook ? bookObj : bookObj[nameBook];

    //Array e Objetos são as mesmas coisas com uma diferença na declaração e tudo mais, nesse caso para acessar a propriedade desse objeto é necessario colocar a propriedade como uma string e acessar com o nome passado na função. 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var nomeLivro = 'Anticristo'
console.log('O livro '+ nomeLivro + ' tem ' + book(nomeLivro).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O livro '+ nomeLivro + ' tem ' + book(nomeLivro).autor + ' páginas!');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro '+ nomeLivro + ' tem ' + book(nomeLivro).editora + ' páginas!');

