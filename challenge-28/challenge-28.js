(function () {
  'use strict'

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  var $inputCEP = document.querySelector('[data-js="cep"]');
  var $buttonSubmit = document.querySelector('[type="button"]');
  var $textStatus = document.querySelector('.ajaxAnswer');
  var ajax = new XMLHttpRequest();

  //Verifica se  existe algum caracter que não seja numero
  function getCEP(){
    return $inputCEP.value.replace(/\D/g, '');
  }
  
  //verifica se a requisição esta OK
  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  //Função para mostrar os valores que veio da API
  function showData(){
    var data = JSON.parse(ajax.responseText);
    var $textInfo = document.querySelectorAll('p');
    
    $textInfo.forEach(function (value, key){          
      switch (value.className) {
        case 'logradouro':
          return value.innerHTML = 'Logradouro: ' + data.logradouro +'';
        case 'bairro':
          return value.innerHTML = 'Bairro: ' + data.bairro +'';
        case 'estado':
          return value.innerHTML = 'Estado: ' + data.uf +'';
        case 'cidade':
          return value.innerHTML = 'Cidade: ' + data.localidade +'';
        case 'cep':
          return value.innerHTML = 'CEP: ' + data.cep +'';        
      }      
    });
  }

  function requestCEP() {
    event.preventDefault();
    var cepValue = getCEP();    
    ajax.open('GET', "https://viacep.com.br/ws/" + cepValue + "/json/");    
    ajax.send();
    ajax.addEventListener('readystatechange', function () {
      $textStatus.innerHTML ='Buscando informações para o CEP ' + $inputCEP.value + '...';      
      if(isRequestOk()){
        $textStatus.innerHTML = 'Endereço referente ao CEP ' + $inputCEP.value + ':';
        showData();
      }
      else{
        $textStatus.innerHTML = 'Não encontramos o endereço para o CEP ' + $inputCEP.value + '.';      
      }      
    });        
  }

  //Quando clicado chama a função de buscar na API
  $buttonSubmit.addEventListener('click', requestCEP, false);
})();
