const convertButton = document.querySelector(".convert-button");

function convertValues() {
    const inputValue = document.querySelector(".input-value").value;
    const valorParaConverter = document.querySelector(".moeda-valor-converter");
    const valorConvertido = document.querySelector(".moeda-valor-convertido");
    const escolherMoeda = document.querySelector(".change-currency").value;
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
    const textoAConverter = document.getElementById("texto-valor-convertido")
    const escolherMoeda = document.querySelector(".change-currency").value
    const imagemMoeda = document.querySelector(".moeda-imagem")

    if(escolherMoeda == "dolar"){
        
        textoAConverter.innerHTML = "Dólar americano"
        imagemMoeda.src = "./assets/estados-unidos .png"
    }

    if(escolherMoeda == "euro"){
        textoAConverter.innerHTML = "Euro"
        imagemMoeda.src = "./assets/euro.png"
    }
    
    convertValues()
}

document.querySelector(".change-currency").addEventListener("change", mudarTexto);
convertButton.addEventListener("click", convertValues);

