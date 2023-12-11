//main.js 

import { getEstoque, limpaEstoque, transacaoNoEstoque } from "./estoque.js";

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");

document.entrada.addEventListener('submit', leFormulario);
//leFormulario();
document.entrada.reset();

function leFormulario(event)
{
    event.preventDefault();
    
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;
    
    console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);
    //document.entrada.submit();

    transacaoNoEstoque(origem, destino, fruta, quantidade);
    atualizarTela();
}

document.addEventListener('DOMContentLoaded', () => 
{
    document.getElementById('botaoLimparLista').addEventListener('click', () => 
    {
        limpaEstoque();
        atualizarTela();
    });
});

atualizarTela();

function preencherLista(lista, estoqueDaPessoa)
{
    lista.textContent = "";

    if(Array.isArray(estoqueDaPessoa)) 
    {
        for(let i = 0; i < estoqueDaPessoa.length; i++) 
        {
            const monte = estoqueDaPessoa[i];
            const li = document.createElement('li');
            li.textContent = `${monte.tipo}: ${monte.quantidade}`;
            lista.appendChild(li);
        }
    }
}

function atualizarTela() 
{
    const estoque = getEstoque();

    olJoao.innerHTML = "";
    olMaria.innerHTML = "";
    
    document.entrada.fruta.value = "maca";
    document.entrada.quantidade.value = 1;
   
    preencherLista(olJoao, estoque.joao);
    preencherLista(olMaria, estoque.maria);
}