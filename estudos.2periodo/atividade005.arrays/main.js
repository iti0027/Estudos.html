let vetor = []
const numero = document.getElementById('numeroInput');

function adicionar() {

    const resultado = document.getElementById('resultado');
    vetor.push(Number(numero.value))
    console.log(vetor);
    soma = vetor.reduce((valorAtual, valorNovo) => valorAtual + valorNovo, 0);
    resultado.innerHTML = `O resultado vai ser agora ${soma}`;
    console.log(soma);
    let midium = document.getElementById('media');
    let media = soma / vetor.length
    midium.innerHTML = `A média é ${media}`; 

    numero.value = '';
    numero.focus();
}
