(function () {
  'use strict'
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;
  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  //Declaração de variaveis
  var $buttonNumbers = document.querySelectorAll('.numbers');
  var $buttonOperators = document.querySelectorAll('.operator');
  var $buttonResult = document.querySelector('.result');
  var $buttonClear = document.querySelector('.clear');
  var $displayCalc = document.querySelector('input');

  //Functions -> Pegar valor do botao clicado
  function getButtonValue(buttonValue) {
    $displayCalc.value += buttonValue;
  }

  //Functions -> Zera o operador e o display
  function clearDisplayCalc() {
    $displayCalc.value = 0;
  }

  //Functions -> Verifica se o ultimo item é de um operador
  function isOperatorLast() {
    var calcOperation = ['+', '-', 'x', '÷'];
    var lastOperator = $displayCalc.value.split('').pop();
    return calcOperation.some(function (operador) {
      return operador === lastOperator;
    });
  }

  function removeLastOperator() {
    if (isOperatorLast()) {
      $displayCalc.value = $displayCalc.value.slice(0, -1);
    }
  }

  //Functions -> Verifica se o ultimo item é de um operador
  function resultCalc() {
    removeLastOperator();
    var allValues = $displayCalc.value.match(/\d+[+x-÷]?/g);

    var result = allValues.reduce(function (accumulated, actual) {
      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split('').pop();
      var lastValue = actual;
      switch (operator) {
        case '+':
          return Number(firstValue) + Number(lastValue);
        case '-':
          return Number(firstValue) - Number(lastValue);
        case 'x':
          return Number(firstValue) * Number(lastValue);
        case '÷':
          return Number(firstValue) / Number(lastValue);
      }
    });
    $displayCalc.value = result; 
  }

  //Quando o botão é clicado pega o valor do botão Numerais e aciona a função
  $buttonNumbers.forEach(function (htmlElement) {
    htmlElement.addEventListener('click', function () {
      getButtonValue(htmlElement.getAttribute('data-value-btn'));
    });
  });

  //Quando o botão é clicado pega o valor do botão de Operadores e aciona a função
  $buttonOperators.forEach(function (htmlElement) {
    htmlElement.addEventListener('click', function () {
      if (isOperatorLast()) {
        $displayCalc.value = $displayCalc.value.slice(0, -1);
      }
      $displayCalc.value += htmlElement.getAttribute('data-value-btn');
    });
  });

  //Quando o botão é clicado pega o valor do botão de limpar o visor  e aciona a função
  $buttonClear.addEventListener('click', function () {
    clearDisplayCalc();
  });

  //Quando o botão de resultado é clicado e aciona a função que traz o valor calculado
  $buttonResult.addEventListener('click', function () {
    resultCalc();
  });

})();
