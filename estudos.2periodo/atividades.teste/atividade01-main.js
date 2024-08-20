window.alert('Bem vindo ao nosso site! :p');

function verificar(){
    var nome = document.querySelector('input.nome');
    var Nresultado = document.querySelector('div.nomeResultado');

    var idade = document.querySelector('input.idade');
    var Iresultado = document.querySelector('div.idadeResultado');

    var cidade = document.querySelector('input.cidade');
    var Cresultado = document.querySelector('div.cidadeResultado')

    var petTipo = document.querySelector('input.petTipo');
    var petName = document.querySelector('input.petName');

    if (nome == 0){
        Nresultado.innerHTML = 'Por favor, insira o seu nome.'
    } else{
        Nresultado.innerHTML = `Muito prazer em conhece-lo(a) <strong>${nome}</strong>!`
    }

    if(idade == 0){
        Iresultado.innerHTML = 'Por favor, insira a sua idade.'
    } else{
        Iresultado.innerHTML = `Hmm então quer dizer que você tem ${idade} não seu <strong>${nome}</strong> bom saber.`
    }

    if (cidade == 0 ){
        Cresultado.innerHTML = 'Por favor, insira a cidade em que nasceu.'
    } else{
        Cresultado.innerHTML = `Que legal! Conheço ${cidade} muito bem. Sempre ia para lá quando criança. Vamos marcar de nos encontrar qualquer dia por lá <strong>${nome}</strong>, o que acha?`
    }
}