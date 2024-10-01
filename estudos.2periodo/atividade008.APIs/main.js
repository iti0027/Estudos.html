/*
const URL = "http://api.ipstack.com/134.201.250.155?access_key=0ec3343f9b5e48b5f2dd997da0a64193";

async function chamarAPI (){
    try {
        const response = await fetch(URL);

        if (!response.ok){
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const dado = await response.json();
        console.log(dado)
        const listaUsuario = document.getElementById("listaUsuario");

        dado.forEach(usuario => {
            var listaItem = document.createElement('li');
            listaItem.textContent = `${usuario.name} (${usuario.email})`;
            listaUsuario.appendChild(listaItem);
        });

    } catch (error){
        console.error("Erro ao buscar os dados", error);
    }
    console.log(chamarAPI())
}

chamarAPI();

*/

const useEscreve = document.querySelector("#useEscrever");
const texto = document.querySelector("#texto");

function chamarAPI(){
    let userValue = useEscreve.value.trim();
    if (userValue == ""){
        alert("Preencha o campo!");
        useEscreve.focus();
        return
    }
    fetch(`https://api.ipstack.com/${userValue}?access_key=0ec3343f9b5e48b5f2dd997da0a64193`)
    .then((response) => {
    if (!response.ok){
        throw new Error ("Erro em obter dados");
    }
    return response.json()
    }) 
    .then((data) => {
        if (data.success != false){
            useEscreve.innerHTML = ``
            let dataValue = [
                { nomeCampo: "Nome do continente:", dados: data.continent_name },
                { nomeCampo: "Nome do país:", dados: data.continent_name },
                { nomeCampo: "Nome do estado:", dados: data.region_name },
                { nomeCampo: "Nome da cidade:", dados: data.city },
                { nomeCampo: "Nome da capital:", dados: data.location.capital },
                { nomeCampo: "Latitude:", dados: data.latitude },
                { nomeCampo: "Longitude:", dados: data.longitude },
              ];
              dataValue.forEach((data) => {
                const lista = document.createElement("li");
                lista.innerHTML = `${data.nomeCampo} ${data.dados}`;
                texto.appendChild(lista);
              });
        } else{
            alert(`Erro ${data.error.code}, ${data.error.type}`)
        }
    })
}