/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
document.addEventListener("DOMContentLoaded", function () {   
  //Inicializa os valores dos minutos e dos campos selecionados
  var showCounter = document.querySelector('.counter');
  var countDownValue = document.querySelector('input').value;
  var counter = 0;
  var stopTimer;

  //Função que faz o contador acrescentar de 1 em 1 a cada segundo
  function timer(){
    console.log('timer', counter++);
    if(counter > countDownValue)
      return;      
      stopTimer = setTimeout(timer , 1000);
      showCounter.innerHTML = counter;
  }

  //Quando clicado em cada botão chama a respectiva função
  document.querySelector('[data-js="start-clock"]').addEventListener('click', function () {
    timer();//Inicializa o contador
  });

  //A função clearTimeout faz que pare o contador, pois na função Timer() a variavel stopTimer esta recebendo a ID da função do setTimeout e acrescentando a cada segundo o contador
  document.querySelector('[data-js="pause-clock"]').addEventListener('click', function () {
    clearTimeout(stopTimer);
  });  

  document.querySelector('[data-js="reset-clock"]').addEventListener('click', function () {
    // Função para parar o cronometro quando clicado e zerar o campo e o contador
    clearTimeout(stopTimer);
    counter = 0;
    showCounter.innerHTML = counter;
  });
});
