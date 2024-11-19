const btVerificar = document.getElementById('btVerificar');
let contador = 0;

function randomNumber(){
    return Math.floor(Math.random()* 10);

}

function codigoNumeros (){
    let quarto = randomNumber();
    let terceiro, segundo, primeiro;
    for (let i =0; i< 1000; i++){
        terceiro = randomNumber();
        segundo = randomNumber();
        primeiro = randomNumber();
        if (terceiro!= quarto && segundo!= quarto && segundo!= terceiro && primeiro!= quarto && primeiro!= terceiro && primeiro!= segundo){break}
    }
    let randomNumberString = `${quarto} ${terceiro} ${segundo} ${primeiro}`;
    console.log(randomNumberString);
    return randomNumberString;
}

function verificar(numero){
    numero = numero.toString();
    if (numero.length !== 4 || isNaN(numero)) {
        return false; // número inválido
    }
    
    for ( let i = 0; i < 4; i++){
        if(numero.lastIndexOf(numero.charAt(i)) !== i) {
            return false; // número contem dígitos repetidos
        }
    }
    return true; // número válido
}
let randomNumberString = codigoNumeros();

function conferir(){
    let userNumber = document.getElementById('tentativa').value;
    let regras = document.getElementById('regras');
    let cows = 0;
    let bulls= 0;

    if(!verificar(userNumber)){
        regras.value = `${userNumber} - Número inválidp ou número duplicado, por favor, inserir novamente os 4 números.`
        } 
        else{
            for (let n = 0; n < 4; n++){
                for(let i = 0; i < 4; i++){
                    if(userNumber.charAt(i) === randomNumberString.charAt(n)) {
                        if (i === n) bulls++;
                        else cows++;
                    }
                }
            }
         }
    contador++;
    if(bulls === 4){
        regras.value = `${userNumber} - 4 bulls! Você ganhou depois de ${contador} tentativas.\n`
        randomNumberString = codigoNumeros();
        contador = 0;}
    else{ 
        regras.value = `${userNumber} - ${cows} conw(s) e ${bulls} bull(s), tentativas: ${contador}\n` + regras.value;
    }

    document.getElementById('tentativa').value ='';
}

