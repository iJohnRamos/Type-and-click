const botao = document.querySelector("#btn")
const input = document.querySelector(".input")
const texto = document.querySelector(".texto")

let vezes = 1;

function adicionarItem(){
  if (input.value.trim() === "") return;

    for (let i = 0; i < vezes; i++) {
    const p = document.createElement("p");
    p.innerText = input.value;

    texto.appendChild(p);

    p.addEventListener("click", () => {
    p.remove();
});

input.value = "";
}}


botao.addEventListener("click", () => {
    adicionarItem();
  

})


//clean

document.querySelector("#clean").addEventListener("click", () => {
    input.value = "";
    texto.innerHTML = "";
    
    })


//BOTOES VEZES

document.querySelector("#btn1").addEventListener("click", () => {
    vezes = 1;
});

document.querySelector("#btn2").addEventListener("click", () => {
    vezes = 2;
});

document.querySelector("#btn3").addEventListener("click", () => {
    vezes = 4;
});