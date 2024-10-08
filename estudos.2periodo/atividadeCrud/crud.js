const inputTexto = document.getElementById('inputTexto');
const inputNum = document.getElementById('inputNUm');
const olLista = document.getElementById('olListaId');
const butao = document.getElementById('enviar');

const urlBack4app = "https://parseapi.back4app.com/classes/Despesas";
const headers = {
    "X-Parse-Application-Id": "cwfcDMDbMU1WbLgIIPxAvXkkP8i5lOJPm8B9a6Pm",
    "X-Parse-REST-API-Key": "1SeDEN0lgPeY7ldWB5NfYk0p0If2QEenhBLHoOry",
};
const headerJson = {
    ...headers,
    "Content-Type": "application/json"
};


const showList = async (data) => {
    olLista.innerHTML = "";
    const resultadoData = data.results;

    resultadoData.forEach((resultado) => {
        const text = document.createTextNode(`${resultado.descricao} = ${resultado.valor}`);
        let li = document.createElement("li");


        let btAdd = document.createElement("button");
        btAdd.innerHTML = "Adicionar"
        let btRemove = document.createElement("button");
        btRemove.innerHTML = "Remover"

        li.appendChild(text);
        li.appendChild(btAdd);
        li.appendChild(btRemove);
        olLista.appendChild(li);

    })    
}

const addItem = async () => {

    try {
        const response = await fetch(urlBack4app, {
            method: "GET",
            headers: headerJson
        }); if (!response.ok){
            alert("Probelma ao acessar o servisor" + response.status);
            throw new Error("Problema encontrado" + response.status);
        } 
        const data = await response.json()
        console.log(data)
        showList(data);
        
    } catch (error) {
        console.log(error);
    }
}

butao.addEventListener("click",async () =>{
    let textoValue = inputTexto.value.trim();
    let numValue = inputNum.value;

    if (textoValue = ""){
        alert("Por favor, preencha o nome do item.");
    } else if (numValue = ""){
        alert("Por favor, preencha o valor do item")
    } 
    try {
        const response = await fetch(urlBack4app,{
            method: "POST",
            headers: headerJson,
            body: JSON.stringify({
                descricao: textoValue,
                valor: numValue,
            }) 
        })
        if(!response.ok){
            alert("Problema ao acessar o servidor" + response.status);
            throw new Error("Problema encontrado" + response.status);
        }
        addItem()
    } catch (error) {
        console.log(error);
    }
})

window.onload = addItem