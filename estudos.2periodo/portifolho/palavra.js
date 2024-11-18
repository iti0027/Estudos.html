const codigo = document.getElementById('tentativa');
const btVerificar = document.getElementById('btVerificar');
const btNewGame = document.getElementById('btNewGame');
const btQuit = document.getElementById('btQuit');

let contador = 0;
function randomNumber(){
    let numero = Math.floor(Math.random()* 10);
    return numero;
}

function codigoNumeros (){
    let quarto = randomNumber()
    for (let i; i = 1; i++){
        let terceiro = randomNumber();
        let segundo = randomNumber();
        let primeiro = randomNumber();
        if (terceiro!= quarto && segundo!= quarto && segundo!= terceiro && primeiro!= quarto && primeiro!= terceiro && primeiro!= segundo){break}
    }
    let randomNumberString = quarto.toString() + terceiro.toString() + segundo.toString() + primeiro.toString();
    console.log(randomNumberString);
    return randomNumberString;
}

function verificar(numero){
    numero = numero.toString();
    verif = true;
    for ( let i = 0; i < 4; i++){
        if (numero.lastIndexOf(numero.charAt(i))!=i){
            verif = false;
            break;
        }
    }
    return verif;
}
    randomNumberString = codigoNumeros();

function conferir(){
    let userNumber = $("#try").val().toString();
    let cows = 0;
    let bulls= 0;
    if(verificar(userNumber)===false){$("#regras").prepend(userNumber + "- Número inválido ou número duplicado, por favor, tentar novamente.")} else{
        for (let n = 0; n<4; n++){
            for(let i = 0; i < 4; i++){
                if(userNumber.charAt(i) === randomNumberString.charAt(n) && i == n) {bulls++;}
                else{if(userNumber.charAt(i)=== randomNumberString.charAt(n)) {cows++}}
            }
        }
    }
    contador++;
    if(bulls ===4){
        $("#regras").prepend(`${userNumber} - 4 bulls! Você ganhou depois de ${contador} tentativas.`)
        randomNumberString = codigoNumeros();
        contador = 0;}
    else{
        $('#regras').prepend(`${userNumber} - ${cows} cow(s) e ${bulls} bull(s), tentativas: ${contador}`)}
        $("#tentativas").val('');
    
}