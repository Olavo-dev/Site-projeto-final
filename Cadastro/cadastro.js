let card = document.querySelector(".card");
let loginButton = document.querySelector(".loginButton");
let cadastroButton = document.querySelector(".cadastroButton");

loginButton.onclick =  () => {
    card.classList.remove("cadastroActive");
    card.classList.add("loginActive");
   
}

cadastroButton.onclick =  () => {
    card.classList.remove("loginActive");
    card.classList.add("cadastroActive");
   
}

const barraPesquisa = document.getElementById("barraPesquisa");
const lista = document.getElementById("listaDeItens");
const itens = lista.getElementsByTagName("li");

barraPesquisa.addEventListener("input", function () {
  const texto = barraPesquisa.value.toLowerCase();

  for (let i = 0; i < itens.length; i++) {
    const item = itens[i].textContent.toLowerCase();
    itens[i].style.display = item.includes(texto) ? "block" : "none";
  }
});