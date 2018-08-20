(function () {

  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person = {
    name: 'Ricardo',
    lastname: 'Carvalho',
    age: 23
  }
  console.log('Propriedades de "person":');

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push({
    name: 'Clube da Luta',
    pages: 250
  });
  books.push({
    name: 'Anticristo',
    pages: 180
  });
  books.push({
    name: 'Aprenda a tirar boas fotos',
    pages: 1000
  });
  console.log('\nLista de livros:');
  
  /*
  Mostre no console todos os livros.
  */
  console.log(books);
  
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log('\nLivro que está sendo removido:');
  console.log(books.pop());

  /*
  Mostre no console os livros restantes.
  */
  for (var i = 0; i < books.length; i++) {
    console.log('\nAgora sobraram somente os livros:', books[i].name);
  }

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  console.log('\nLivros em formato string:');

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(JSON.stringify(books));

  /*
  Converta os livros novamente para objeto.
  */
  console.log('\nAgora os livros são objetos novamente:');
  console.log(JSON.parse(books));

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for (var i = 0; i < books.length; i++) {
    for (var props in books[i]) {
      console.log(props + ' : ' + books[i][props]);
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['R','i','c','a','r','d','o'];

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log('\nMeu nome é:');
  console.log(myName.join(''));

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log('\nMeu nome invertido é:');
  console.log(myName.reverse().join(''));

  console.log('\nAgora em ordem alfabética:');
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort());
})();
