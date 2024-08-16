function bemVindo (){
    window.alert('Olá! Muito bem vindo ao nosso site.');
    var nome = window.prompt('Pode me informar o seu nome?');
        if (nome == 0){
            alert('Por favor, insira o seu nome :).');
        } else{
            window.alert(`Olá, ${nome}! Espero que se divirta-se no nosso site :) !`);
        }
     
}

function introducao() {
    var welcome = document.querySelector('p.introducao');
    innerhtml.p.introducao = `Prazer em lhe conhecer ${nome}! Eu me chamo ítalo e sou o criador desta página. Espero que se divirta!`
}

function conhecendo (){
    var age = document.querySelector('input.idade');
    var idade = Number(age.value);
    var cidade = document.querySelector('input.cidade');
    var petTipo = document.querySelector('input.pet-tipo');
    var petName = document.querySelector('input.pet-name');

    if (idade == 0){
        innerhtml.idade-resultado == 'Por favor, insira a sua idade.'
    } else{
            innerWidth.idade-resultado == `Essa idade é maravilhosa.`
    }
}

conhecendo();
bemVindo();
introducao();