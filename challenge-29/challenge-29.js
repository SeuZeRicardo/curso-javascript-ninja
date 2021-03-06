(function (DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  var app = (function appController () {
    return {      

      //Função que inicializa a aplicação
      init: function init() {        
        //Aqui vai ser chamado a função ao iniciar o app
        this.companyInfo();
        this.initEvents();
      },

      //Função que faz a chamada do JSON com os dados da minha empresa
      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();      

        ajax.open('GET', "company.json", true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);              
      },

      //Função que vai inserir o texto recebido no campo necessario
      getCompanyInfo: function getCompanyInfo(){                
        if (!app.isReady.call(this)) 
          return;
          var data = JSON.parse(this.responseText);
          var $companyName = new DOM('[data-js="company-name"]').get()[0];
          var $companyFone = new DOM('[data-js="company-number"]').get()[0];

          $companyName.textContent = data.name;
          $companyFone.textContent = data.phone;        
      },

      //Verifica se a requisição foi feita
      isReady: function isReady(){
        return this.readyState === 4 && this.status === 200;
      },


      //Função que pega todos os eventos
      initEvents: function initEvents(){
        new DOM ("[type='button']").on('click', this.getInputValue);
      },

      getInputValue: function getInputValue(e){
        e.preventDefault();

        var $tableBody = new DOM('tbody').get()[0];

        var $fragment =  document.createDocumentFragment();
        var $tr = document.createElement('tr');
        var $tdImage = document.createElement('td');
        var $tdBrand = document.createElement('td');
        var $tdYear = document.createElement('td');
        var $tdColor = document.createElement('td');
        var $image = document.createElement('img');


        
        
        var $imageValue = new DOM('[data-js="car-image"]').get()[0].value;
        var $modelValue = new DOM('[data-js="car-model"]').get()[0].value;
        var $yearValue = new DOM('[data-js="car-year"]').get()[0].value;
        var $colorValue = new DOM('[data-js="car-color"]').get()[0].value;

        $image.setAttribute('src', $imageValue);

        $tdImage.appendChild($image);
        $tdBrand.innerHTML = $modelValue;          
        $tdYear.innerHTML = $yearValue;          
        $tdColor.innerHTML = $colorValue;

        $tr.appendChild($tdImage);
        $tr.appendChild($tdBrand);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdColor);

        $fragment.appendChild($tr);

        $tableBody.appendChild($fragment);
      },
    }
  })();

  //Chamada da função que inicializa o app
  app.init();

})(window.DOM);
