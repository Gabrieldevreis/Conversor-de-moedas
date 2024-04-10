const convertButton = document.querySelector(".convert-button");

async function convertValues() {
    const inputValue = document.querySelector(".input-value").value;
    const valorParaConverter = document.querySelector(".moeda-valor-converter");
    const valorConvertido = document.querySelector(".moeda-valor-convertido");
    const escolherMoeda = document.querySelector(".change-currency").value;

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolarDay = data.USDBRL.high
    const euroDay = data.EURBRL.high

    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue);

    if (escolherMoeda == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarDay);
    }

    if (escolherMoeda == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroDay);
    }
}

function mudarTexto() {
    const textoAConverter = document.getElementById("texto-valor-convertido")
    const escolherMoeda = document.querySelector(".change-currency").value
    const imagemMoeda = document.querySelector(".moeda-imagem")

    if (escolherMoeda == "dolar") {

        textoAConverter.innerHTML = "Dólar americano"
        imagemMoeda.src = "./assets/estados-unidos .png"
    }

    if (escolherMoeda == "euro") {
        textoAConverter.innerHTML = "Euro"
        imagemMoeda.src = "./assets/euro.png"
    }

    convertValues()
}

document.querySelector(".change-currency").addEventListener("change", mudarTexto);
convertButton.addEventListener("click", convertValues);

