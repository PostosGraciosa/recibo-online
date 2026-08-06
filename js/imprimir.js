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



    // ===============================
    // RECEBEDOR
    // ===============================

    document.getElementById("recebedor").textContent =
    dados.recebedor || "";



    const documentoRecebedor =
    (dados.documento || "").replace(/\D/g, "");



    let documentoRecebedorTexto = "";


    if(documentoRecebedor.length === 11){

        documentoRecebedorTexto =
        "CPF: " + dados.documento;

    }
    else if(documentoRecebedor.length === 14){

        documentoRecebedorTexto =
        "CNPJ: " + dados.documento;

    }
    else{

        documentoRecebedorTexto =
        dados.documento || "";

    }



    document.getElementById("documentoRecebedor").textContent =
    documentoRecebedorTexto;





    // ===============================
    // PAGADOR
    // ===============================


    document.getElementById("pagador").textContent =
    dados.pagador || "";



    const documentoPagador =
    (dados.documentoPagador || "").replace(/\D/g,"");



    let documentoPagadorTexto = "";



    if(documentoPagador.length === 11){

        documentoPagadorTexto =
        "CPF: " + dados.documentoPagador;

    }
    else if(documentoPagador.length === 14){

        documentoPagadorTexto =
        "CNPJ: " + dados.documentoPagador;

    }
    else{

        documentoPagadorTexto =
        dados.documentoPagador || "";

    }



    document.getElementById("documentoPagador").textContent =
    documentoPagadorTexto;





    // ===============================
    // VALORES
    // ===============================


    document.getElementById("valor").textContent =
    dados.valor || "";



    document.getElementById("valorTexto").textContent =
    dados.valor || "";



    document.getElementById("extenso").textContent =
    dados.extenso || "";





    // ===============================
    // REFERENTE
    // ===============================


    document.getElementById("referente").textContent =
    dados.referente || "";





    // ===============================
    // CIDADE
    // ===============================


    document.getElementById("cidade").textContent =
    dados.cidade || "";





    // ===============================
    // ASSINATURA
    // ===============================


    document.getElementById("nomeAssinatura").textContent =
    dados.recebedor || "";



    document.getElementById("documentoAssinatura").textContent =
    documentoRecebedorTexto;





    // ===============================
    // DATA
    // ===============================


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
    `${partes[2]} de ${meses[parseInt(partes[1])-1]} de ${partes[0]}`;





    // ===============================
    // IMPRESSÃO AUTOMÁTICA
    // ===============================


    setTimeout(()=>{

        window.print();

    },500);





    // ===============================
    // FECHAR APÓS IMPRESSÃO
    // ===============================


    window.onafterprint = () => {

        window.close();

    };


};
