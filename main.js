//main.js 

import { limpaEstoque } from "./estoque.js";

const olJoao = document.querySelector(#olJoao);
const olMaria = document.querySelector(#olMaria);

document.entrada.addEventListener('submit', leFormulario);
//leFormulario();
document.entrada.reset();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('botaoLimparLista').addEventListener('click', () => {
        limpaEstoque();
        atualizaTela();
    });
});
atualizaTela();

function leFormulario(event) {
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`fruta: ${fruta} qtd: ${quantidade}`);
    //document.entrada.submit();
}

