// ======================================
// SISTEMA DE RECIBOS
// app.js
// ======================================

// Data automática
window.addEventListener("DOMContentLoaded", () => {

    const campoData = document.getElementById("data");

    const hoje = new Date();

    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");

    campoData.value = `${ano}-${mes}-${dia}`;

});


// ======================================
// Envio do formulário
// ======================================

document.getElementById("formRecibo").addEventListener("submit", function(e){

    e.preventDefault();

    const recibo = {

        data: document.getElementById("data").value,

        documento: document.getElementById("documento").value.trim(),

        pagador: document.getElementById("pagador").value.trim(),

        recebedor: document.getElementById("recebedor").value.trim(),

        valor: document.getElementById("valor").value.trim(),

        extenso: document.getElementById("extenso").value.trim(),

        referente: document.getElementById("referente").value.trim(),

        cidade: document.getElementById("cidade").value.trim()

    };

    // Validação

    if(recibo.pagador === ""){

        alert("Informe o nome do pagador.");
        return;

    }

    if(recibo.recebedor === ""){

        alert("Informe o nome do recebedor.");
        return;

    }

    if(recibo.documento === ""){

    alert("Informe o CPF ou CNPJ do recebedor.");

    return;

}
    
    if(recibo.valor === ""){

        alert("Informe o valor.");
        return;

    }

    if(recibo.referente === ""){

        alert("Informe o campo 'Referente a'.");
        return;

    }

    if(recibo.cidade === ""){

        alert("Informe a cidade.");
        return;

    }

    // Salva temporariamente

    localStorage.setItem(
        "recibo",
        JSON.stringify(recibo)
    );

    // Abre página do recibo

    window.open("recibo.html", "_blank");

});
