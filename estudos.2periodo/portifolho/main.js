const verMais = () => {
    const conteudo = document.getElementById("conteudoOculto");
    const botao = document.querySelector("button");

    if (conteudo.style.display === "none"){
        conteudo.style.display = "block";
        botao.textContent = "Ver Menos";
    } else{
        conteudo.style.display = "none";
        botao.textContent = "Ver Mais";
    }
}