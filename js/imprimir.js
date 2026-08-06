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




    // Valor

    document.getElementById("valor").textContent =
    dados.valor;



    // Valor por extenso

    document.getElementById("extenso").textContent =
    dados.extenso;



    // Referente

    document.getElementById("referente").textContent =
    dados.referente;



    // Cidade

    document.getElementById("cidade").textContent =
    dados.cidade;




    // Nome assinatura

    document.getElementById("nomeAssinatura").textContent =
    dados.recebedor;



    // CPF ou CNPJ do recebedor

    const documentoRecebedor = (dados.documento || "").replace(/\D/g, "");


    if(documentoRecebedor.length === 11){

        document.getElementById("documento").textContent =
        "CPF: " + dados.documento;

    }
    else if(documentoRecebedor.length === 14){

        document.getElementById("documento").textContent =
        "CNPJ: " + dados.documento;

    }
    else{

        document.getElementById("documento").textContent =
        dados.documento || "";

    }




    // Data

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



    // Abre impressão automática

    setTimeout(() => {

        window.print();

    },500);



    // Fecha após imprimir

    window.onafterprint = () => {

        window.close();

    };


};
