console.log("Hello Cornos!")

const nPrimos = (numero) => {
    let divisores = 0;
    for(let i = 1; i <= numero; i++){
        if(numero % i == 0){
            divisores++;
        }
    }
    return divisores == 2;
}

let resposta = "2"
for (let i = 3; i<= 100; i++){
    if (nPrimos(i)) {
        resposta += "," + i;
    }
}
console.log(resposta);

a = 40
b = 35
c = 15
d = 25
e = 35
soma = a + b + c + d + e;
console.log(soma);