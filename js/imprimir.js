// ======================================
// SISTEMA DE RECIBOS
// imprimir.js
// ======================================


document.addEventListener("DOMContentLoaded", () => {


    const dados = JSON.parse(
        localStorage.getItem("recibo")
    );


    if(!dados){

        alert("Nenhum recibo encontrado.");

        return;

    }



    // Preenche os dados


    document.getElementById("recebedor").textContent =
        dados.recebedor;



    document.getElementById("pagador").textContent =
        dados.pagador;



    document.getElementById("valor").textContent =
        dados.valor;



    document.getElementById("valorTexto").textContent =
        dados.valor;



    document.getElementById("extenso").textContent =
        dados.extenso;



    document.getElementById("referente").textContent =
        dados.referente;



    document.getElementById("cidade").textContent =
        dados.cidade;



    document.getElementById("nomeAssinatura").textContent =
        dados.recebedor;



    // Formata data


    const data = new Date(dados.data);



    const dia = String(
        data.getDate()
    ).padStart(2,"0");



    const mes = String(
        data.getMonth()+1
    ).padStart(2,"0");



    const ano = data.getFullYear();



    document.getElementById("data").textContent =
        `${dia}/${mes}/${ano}`;



});
