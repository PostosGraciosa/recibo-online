// ======================================
// SISTEMA DE RECIBOS
// imprimir.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const dados = JSON.parse(localStorage.getItem("recibo"));

    if (!dados) {
        alert("Nenhum recibo encontrado.");
        window.close();
        return;
    }

    // Nome do recebedor
    document.getElementById("recebedor").textContent = dados.recebedor;

    // Nome do pagador
    document.getElementById("pagador").textContent = dados.pagador;

    // Valor em números
    document.getElementById("valor").textContent = dados.valor;
    document.getElementById("valorTexto").textContent = dados.valor;

    // Valor por extenso
    document.getElementById("extenso").textContent = dados.extenso;

    // Referente
    document.getElementById("referente").textContent = dados.referente;

    // Cidade
    document.getElementById("cidade").textContent = dados.cidade;

    // Assinatura
    document.getElementById("nomeAssinatura").textContent = dados.recebedor;

    // Formatar data
    const partes = dados.data.split("-");

    const meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ];

    document.getElementById("data").textContent =
        `${partes[2]} de ${meses[parseInt(partes[1]) - 1]} de ${partes[0]}`;

});
