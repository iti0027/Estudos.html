const minimo = document.querySelector('input.valorMinimo');
const maximo = document.querySelector('input.valorMaximo');
const resultado = document.querySelector('div.res');


function sorteador () {
    var min = Number(minimo.value);
    var max = Number(maximo.value);

    while (max >= min && min <= max){
        let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        resultado.innerHTML = `Seu número é ${aleatorio} `
        return
    };
};

