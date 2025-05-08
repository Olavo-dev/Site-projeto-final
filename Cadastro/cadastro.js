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

if (barraPesquisa && lista) {
  const itens = lista.getElementsByTagName("li");

  barraPesquisa.addEventListener("input", function () {
    const texto = barraPesquisa.value.toLowerCase();

    for (let i = 0; i < itens.length; i++) {
      const item = itens[i].textContent.toLowerCase();
      itens[i].style.display = item.includes(texto) ? "block" : "none";
    }
  });
}

document.getElementById("formLogin").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede envio automático

  if (this.checkValidity()) {
      // Validação passou, redireciona
      window.location.href = "/index.html";
  } else {
      // Mostra mensagens de erro se campos estiverem inválidos
      this.reportValidity();
  }
});