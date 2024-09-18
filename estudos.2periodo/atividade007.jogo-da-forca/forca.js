const palavras = [
    "abacaxi", "anel", "amigo", "ave", "abacate",
    "bola", "bala", "banho", "bau", "banco",
    "casa", "cachorro", "carro", "cafe", "cama",
    "dado", "dedo", "doce", "dia", "dente",
    "elefante", "estrela", "escola", "elo", "escada",
    "faca", "festa", "fogo", "foca", "fada",
    "gato", "galo", "gelo", "goma", "ganso",
    "helicoptero", "hipopotamo", "hotel", "harpa", "horta",
    "ilha", "iglu", "iris", "indio", "ima", 
    "janela", "jarra", "jogo", "jumento", "joaninha",
    "ketchup", "kiwi", "karate", "koala", "kamikaze",
    "leao", "lago", "lua", "lima", "livro",
    "maca", "mala", "muro", "mapa", "mesa",
    "neve", "ninho", "navio", "nuvem", "nota",
    "olho", "ovo", "onda", "ouro", "orelha",
    "pato", "peixe", "pipoca", "pato", "perna",
    "quilo", "quadro", "queijo", "quina", "queda",
    "raio", "rosa", "rede", "rato", "roupa",
    "seboso", "sapo", "seda", "sabao", "sapato",
    "tigre", "touro", "teto", "tela", "tesoura",
    "uva", "urso", "urna", "uniao", "umidade",
    "vaca", "verao", "vento", "vela", "vidro",
    "webcam", "whisky", "waffle", "walker", "wifi",
    "xale", "xadrez", "xerox", "xarope", "xampu",
    "yoga", "yakisoba", "yogurte", "yeti", "yuppie",
    "zebra", "zoologico", "zumbi", "zero", "zagueiro"
];

const letras = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

let butons = document.getElementById("forcaButoes");
let palavraAleatoria = document.getElementById ("palavraAleatoria");
let guardarPalavra
let letraSelecionada = []


letras.forEach((letra) => {
    let butoesLetras = document.createElement("button");
    butoesLetras.innerText = letra
    butoesLetras.addEventListener("click", () => {
        clicando(letra)
    })

    butons.appendChild(butoesLetras)
})

function gerarPalavras(){
    guardarPalavra = palavras[Math.floor(Math.random() * palavras.length - 1 )].toUpperCase()
    console.log(guardarPalavra);
    letraSelecionada = []
    aparecerPalavra()
}

function aparecerPalavra (){
    palavraAleatoria.innerHTML = ""
    guardarPalavra.split("").forEach((letra) =>{
        palavraAleatoria.includes(letras) ? `<p></p>`
    })
}
