function verificar(){
    const dados = document.querySelectorAll('#matriculainput, #cpfinput, #idadeinput, #nomeinput').values;
    const res = document.querySelector('#resultado');

    if (dados.idade % 2 !== 0){
        window.alert('Por favor, insira um número inteiro.');
        return;
    }

    if (dados.nome === ''){
        window.alert('Por favor, preencha o campo nome.');
        return;
    }

    if (!matricula || !cpf || !idade || !nome) {
        window.alert('Por favor, preencha todos os campos.');
        return
    }
    res.innerHTML = `${dados}`
};
