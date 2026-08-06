// ======================================
// SISTEMA DE RECIBOS
// imprimir.js
// ======================================

window.onload = () => {


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

    // CPF ou CNPJ do pagador

const documentoPagador = (dados.documentoPagador || "").replace(/\D/g, "");

if (documentoPagador.length === 11) {

    document.getElementById("documentoPagador").textContent =
        "CPF: " + dados.documentoPagador;

} else if (documentoPagador.length === 14) {

    document.getElementById("documentoPagador").textContent =
        "CNPJ: " + dados.documentoPagador;

} else {

    document.getElementById("documentoPagador").textContent =
        dados.documentoPagador || "";

}

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

    const documento = (dados.documento || "").replace(/\D/g, "");

if (documento.length === 11) {

    document.getElementById("documento").textContent =
        "CPF: " + dados.documento;

} else if (documento.length === 14) {

    document.getElementById("documento").textContent =
        "CNPJ: " + dados.documento;

else {

    document.getElementById("documento").textContent =
        dados.documento || "";

}

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

    // Aguarda a renderização e abre a impressão
    setTimeout(() => {
        
window.print();
    }, 500);

    // Fecha a janela após a impressão
    window.onafterprint = () => {
        window.close();
    };

};
