const convertButton = document.querySelector(".convert-button");

function convertValues() {
    const inputValue = document.querySelector(".input-value").value;
    const escolherMoeda = document.querySelector(".change-currency").value;
    const valorParaConverter = document.querySelector(".moeda-valor-converter");
    const valorConvertido = document.querySelector(".moeda-valor-convertido");

    const dolarDay = 5.2;
    const euroDay = 6.3;

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
    console.log("mudei");
}

document.querySelector(".change-currency").addEventListener("change", mudarTexto);
convertButton.addEventListener("click", convertValues);

