function separar(){
    const palavras = document.getElementById('palavra').value;
    const saida = document.getElementById('saida');

    saida.innerHTML = ``;

    for ( let i = 0; i < palavras.length; i++) {
        const quadrado = document.createElement("div");
        quadrado.classList.add("quadrado");
        quadrado.textContent = palavras[i];
        saida.appendChild(quadrado);
    }
}