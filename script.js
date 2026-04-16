const botao = document.querySelector("#button");
const input = document.querySelector("#input");
const texto = document.querySelector("#texto");

let lastValue = "";
let vezes = 1;

let contador = 0;
const contadorElemento = document.querySelector("#contador");

let intervalo;
let timeout;

// função de remover (corrigida)
function removerItem(p) {
    p.remove();
    contador--;

    if (contador === 0) {
        contadorElemento.innerHTML = "";
    } else {
        contadorElemento.innerHTML = contador;
    }
}

// função de adicionar
function adicionarItem() {

    if (input.value !== lastValue){
        texto.innerHTML = "";
        contador = 0;
    }

    if (input.value.trim() === "") {
        return;
    }

    for (let i = 0; i < vezes; i++) {
        const p = document.createElement("p");

        p.innerText = input.value;
        texto.appendChild(p);

        // passando o p corretamente
        p.addEventListener("click", () => {
            removerItem(p);
        });
    }

    contador += vezes;

    if (contador === 0) {
        contadorElemento.innerHTML = "";
    } else {
        contadorElemento.innerHTML = contador;
    }

    lastValue = input.value;
}

// SEGURAR
botao.addEventListener("mousedown", () => {

    adicionarItem(); // executa na hora

    timeout = setTimeout(() => {

        intervalo = setInterval(() => {
            adicionarItem();
        }, 50);

    }, 500);
});

// SOLTAR
botao.addEventListener("mouseup", () => {
    clearTimeout(timeout);
    clearInterval(intervalo);
});



// IMPORTANTE: remover click pra não duplicar
// botao.addEventListener("click", () => {
//     adicionarItem();
// });

// botões de vezes
document.querySelector("#btn1").addEventListener("click", () => {
    vezes = 1;
});

document.querySelector("#btn2").addEventListener("click", () => {
    vezes = 2;
});

document.querySelector("#btn4").addEventListener("click", () => {
    vezes = 4;
});

// limpar
document.querySelector("#btn5").addEventListener("click", () => {
    texto.innerHTML = "";
    contador = 0;
    contadorElemento.innerHTML = "";
    lastValue = "";
});

// botão ativo
const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botoes.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");
    });
});