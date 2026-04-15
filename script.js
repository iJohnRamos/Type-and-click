const botao = document.querySelector("#button");
const input = document.querySelector("#input");
const texto = document.querySelector("#texto");

let lastValue = "";
let vezes = 1;

let contador = 0;
const contadorElemento = document.querySelector("#contador");

botao.addEventListener("click", () => {

    if (input.value !== lastValue){
        texto.innerHTML = "";
        contador = 0;
    
    }

    if (input.value.trim() === "") {
    return;
}

    for(let i = 0; i < vezes; i++) {
        texto.innerHTML += `<p>${input.value}</p>`;
    }


    contador += vezes;
    if (contador === 0) {
    contadorElemento.innerHTML = "";
} else {
    contadorElemento.innerHTML = contador;
}


    lastValue = input.value;
});


document.querySelector("#btn1").addEventListener("click", () => {
    vezes = 1;

});


document.querySelector("#btn2").addEventListener("click", () => {
    vezes = 2;
});

document.querySelector("#btn4").addEventListener("click", () => {
    vezes = 4;
});

document.querySelector("#btn5").addEventListener("click", () => {
texto.innerHTML = "";
contador = 0;
contadorElemento.innerHTML = ""
});

const botoes = document.querySelectorAll(".btn");


botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        botoes.forEach(b => b.classList.remove("ativo"));

        botao.classList.add("ativo");
    });
});