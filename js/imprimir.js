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
    dados.recebedor;



    // CPF ou CNPJ do recebedor no texto

    const documentoRecebedor =
    (dados.documento || "").replace(/\D/g, "");


    if(documentoRecebedor.length === 11){

      document.getElementById("documentoRecebedor").textContent =
"CNPJ: " + dados.documento;

    }
    else if(documentoRecebedor.length === 14){

        document.getElementById("documentoRecebedor").textContent =
"CNPJ: " + dados.documento;
    }
    else{

        document.getElementById("documentoRecebedor").textContent =
        dados.documento || "";

    }




    // ===============================
    // PAGADOR
    // ===============================

    document.getElementById("pagador").textContent =
    dados.pagador;



    const documentoPagador =
    (dados.documentoPagador || "").replace(/\D/g, "");



    if(documentoPagador.length === 11){

        document.getElementById("documentoPagador").textContent =
        "CPF: " + dados.documentoPagador;

    }
    else if(documentoPagador.length === 14){

        document.getElementById("documentoPagador").textContent =
        "CNPJ: " + dados.documentoPagador;

    }
    else{

        document.getElementById("documentoPagador").textContent =
        dados.documentoPagador || "";

    }




    // ===============================
    // VALORES
    // ===============================

    document.getElementById("valor").textContent =
    dados.valor;


    document.getElementById("valorTexto").textContent =
    dados.valor;


    document.getElementById("extenso").textContent =
    dados.extenso;




    // ===============================
    // REFERENTE
    // ===============================

    document.getElementById("referente").textContent =
    dados.referente;




    // ===============================
    // CIDADE
    // ===============================

    document.getElementById("cidade").textContent =
    dados.cidade;




    // ===============================
    // ASSINATURA
    // ===============================

    document.getElementById("nomeAssinatura").textContent =
    dados.recebedor;



    document.getElementById("documentoAssinatura").textContent =
document.getElementById("documentoRecebedor").textContent;




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
    `${partes[2]} de ${meses[parseInt(partes[1]) - 1]} de ${partes[0]}`;




    // ===============================
    // ABRIR IMPRESSÃO AUTOMÁTICA
    // ===============================

    setTimeout(() => {

        window.print();

    },500);




    // ===============================
    // FECHAR APÓS IMPRESSÃO
    // ===============================

    window.onafterprint = () => {

        window.close();

    };


};
