// ======================================
// SISTEMA DE RECIBOS
// extenso.js
// Converte valor para reais por extenso
// ======================================


const unidades = [
    "",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove"
];


const especiais = [
    "dez",
    "onze",
    "doze",
    "treze",
    "quatorze",
    "quinze",
    "dezesseis",
    "dezessete",
    "dezoito",
    "dezenove"
];


const dezenas = [
    "",
    "",
    "vinte",
    "trinta",
    "quarenta",
    "cinquenta",
    "sessenta",
    "setenta",
    "oitenta",
    "noventa"
];


const centenas = [
    "",
    "cento",
    "duzentos",
    "trezentos",
    "quatrocentos",
    "quinhentos",
    "seiscentos",
    "setecentos",
    "oitocentos",
    "novecentos"
];


// ======================================
// Número por extenso
// ======================================

function numeroPorExtenso(numero){

    if(numero === 0)
        return "zero";


    if(numero === 100)
        return "cem";


    let resultado = "";


    if(numero >= 100){

        let c = Math.floor(numero / 100);

        resultado += centenas[c];

        numero %= 100;

        if(numero > 0)
            resultado += " e ";

    }


    if(numero >= 20){

        let d = Math.floor(numero / 10);

        resultado += dezenas[d];

        numero %= 10;


        if(numero > 0)
            resultado += " e ";

    }


    if(numero >= 10){

        resultado += especiais[numero - 10];

        numero = 0;

    }


    if(numero > 0){

        resultado += unidades[numero];

    }


    return resultado;

}


// ======================================
// Milhares e milhões
// ======================================

function valorPorExtenso(valor){

    valor = Number(valor);


    let reais = Math.floor(valor);

    let centavos = Math.round(
        (valor - reais) * 100
    );


    let texto = "";


    if(reais > 0){

        if(reais >= 1000000){

            let milhao = Math.floor(reais / 1000000);

            texto += numeroPorExtenso(milhao) + 
            (milhao > 1 ? " milhões" : " milhão");

            reais %= 1000000;

            if(reais > 0)
                texto += " e ";

        }


        if(reais >= 1000){

            let mil = Math.floor(reais / 1000);

            if(mil === 1){

                texto += "mil";

            }else{

                texto += numeroPorExtenso(mil) + " mil";

            }

            reais %= 1000;

            if(reais > 0)
                texto += " e ";

        }


        if(reais > 0){

            texto += numeroPorExtenso(reais);

        }


        texto += reais === 1 
            ? " real" 
            : " reais";


    }


    if(centavos > 0){

        if(texto !== "")
            texto += " e ";


        texto += numeroPorExtenso(centavos);


        texto += centavos === 1 
            ? " centavo" 
            : " centavos";

    }


    return texto;

}


// ======================================
// Atualização automática do campo
// ======================================

document.addEventListener("DOMContentLoaded",()=>{


    const campoValor = document.getElementById("valor");

    const campoExtenso = document.getElementById("extenso");


    if(campoValor){


        campoValor.addEventListener("input",()=>{


            let valor = campoValor.value
                .replace(/\D/g,"");


            if(valor === ""){

                campoExtenso.value="";
                return;

            }


            valor = Number(valor) / 100;


            campoValor.value = valor.toLocaleString(
                "pt-BR",
                {
                    style:"currency",
                    currency:"BRL"
                }
            );


            campoExtenso.value =
                valorPorExtenso(valor)
                .replace(/^./, letra => letra.toUpperCase());


        });


    }


});
