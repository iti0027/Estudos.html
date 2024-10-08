const descricaoTarefa = document.getElementById('inputDescricao');
const btAdicionar = document.getElementById('btAdicionar');
const olTarefas = document.getElementById('olTarefas');

const urlBack4app = 'https://parseapi.back4app.com/classes/B4aVehicle';
const headers = {
    'X-Parse-Application-Id': '6s1aeyLZKQ39EFh70cOao7xiN89ZB35d5NFEHcXq',
    'X-Parse-REST-API-Key': 'EmqsvDVFMmDEPItQzlvGIIGuxSXtLxuFStJ1hhCG',
};

const headerJson = {
    ...headers,
    'Content-Type': 'application/json',
};

const criarLista = (data) => {
    olTarefas.innerHTML = "";
    const tarefas = data.results;
    tarefas.forEach((tarefa) => {
        let texto = document.createTextNode(`${tarefa.descricao}`);
        let li = document.createElement("li");
        li.appendChild(texto);

        let cb = document.createElement('input');
        cb.type = "checkbox";
        cb.checked = tarefa.concluida;
        cb.onchange = ()=> handleCheckboxClick (cb,tarefa);
        li.appendChild(cb);

        let bt = document.createElement('button');
        bt.innerHTML = 'x';
        bt.onclick = ()=> handleBtRemoverClick (bt, tarefa);
        li.appendChild(bt);
        olTarefas.appendChild(li);
    });
};

const handleCheckboxClick = async (cb,tarefa) => {
    try{
        cb.disabled = true;
        const resposta = await fetch(`${urlBack4app}/${tarefa.objectId}`,{
            method : "PUT",
            headers: headerJson,
            body: JSON.stringify({concluida: !tarefa.concluida}),
        });
        cb.disabled = false;
        console.log(resposta);
        if (!resposta.ok){
            cb.checked = !cb.checked;
            alert('Erro ao acessar o servidor:' + resposta.status);
            throw new Error ('Erro encontrado' + resposta.status);
        }
    } catch (error){
        cb.checked = !cb.checked;
        console.log(error);
    }
};

const handleBtRemoverClick = async (bt,tarefa) =>{
    try {
        bt.disabled = true;
        const resposta = await fetch(`${urlBack4app}/${tarefa.objectId}`, {
            method: 'DELETE',
            headers: headers,
        });
        bt.disabled = false;
        console.log(resposta);
        if (!resposta.ok){
            alert('Erro ao acessar o servidor' + resposta.status);
            throw new Error('Erro encontrado' + resposta.status);
        }
        getTarefas();
    } catch(error){
        console.log(error);
    }
};

const getTarefas = async () => {
    try{
        const resposta = await fetch(urlBack4app, {
            method: "GET",
            headers: headers,
        });
        console.log(resposta);
        if (!resposta.ok){
            alert('Erro ao acessar o servidor' + resposta.status);
            throw new Error('Erro encontrado' + resposta.status);
        }
        const data = await resposta.json();
        criarLista(data);
    } catch(error){
        console.log(error);
    }
};

const handleBtAdicionarClick = async ()=>{
    const descricao = inputDescricao.value.trim();
    if (!descricao){
        alert('Necessário adicionar uma descrição para criar a tarefa!');
        inputDescricao.focus();
        return;
    }
    try{
        const resposta = await fetch(urlBack4app, {
            method: "POST",
            headers: headerJson,
            body: JSON.stringify({descricao: descricao}),
        });
        console.log(resposta);
        if (!resposta.ok){
            alert('Erro ao acessar o servidor' + resposta.status);
            throw new Error('Erro encontrado' + resposta.status);
        }
        inputDescricao.value = "";
        inputDescricao.focus();
        getTarefas();
    } catch(error){
        console.log(error)
    }
};

window.onload = getTarefas;
btAdicionar.onclick = handleBtAdicionarClick;