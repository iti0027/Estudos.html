window.alert('Bem vindo ao nosso site! :p');

function verificar(){
    var nome = document.querySelector('input.nome').value;
    var Nresultado = document.querySelector('div.nomeResultado');

    var idade = document.querySelector('input.idade').value;
    var Iresultado = document.querySelector('div.idadeResultado');

    var cidade = document.querySelector('input.cidade').value;
    var Cresultado = document.querySelector('div.cidadeResultado')

    var petTipo = document.querySelector('input.petTipo').value;
    var pTResultado = document.querySelector('div.pTResultado');

    var petName = document.querySelector('input.petName').value;
    var pNResultado = document.querySelector('div.pNResultado');

    if (nome == ""){
        Nresultado.innerHTML = 'Por favor, insira o seu nome.'
    } else{
        Nresultado.innerHTML = `Muito prazer em conhece-lo(a) <strong>${nome}</strong>!`
    }

    if(idade == ""){
        Iresultado.innerHTML = 'Por favor, insira a sua idade.'
    } else{
        Iresultado.innerHTML = `Hmm então quer dizer que você tem ${idade} não é seu <strong>${nome}</strong> bom saber.`
    }

    if (cidade == ""){
        Cresultado.innerHTML = 'Por favor, insira a cidade em que nasceu.'
    } else{
        Cresultado.innerHTML = `Que legal! Conheço ${cidade} muito bem. Sempre ia para lá quando criança. Vamos marcar de nos encontrar qualquer dia por lá <strong>${nome}</strong>, o que acha?`
    }

    if(petTipo ==""){
        pTResultado.innerHTML = 'Por favor, insira o tipo do deu pet.'
    } else if (petTipo == "cachorro"){
        pTResultado.innerHTML = `Que massa! Eu também tenho um Cachorro, aliás, tenho duas cachorras e seus nomes são Perola e Agatha.`
    } else if (petTipo == "gato"){
        pTResultado.innerHTML = `Que massa! Eu também tenho um cachorro, aliás, tenho uma gata chamada Safira.`
    } else {
        pTResultado.innerHTML = `Muito legal! Ainda não tive o prazer de cuidar desse tipo de pet, mas certeza que deve ser legal.`
    }


    if (petName ==""){
        pNResultado.innerHTML ='Por favor, diga o nome do seu pet.'
    } else{
        pNResultado.innerHTML = 'Que nome maneiro ksksksks'
    }
}