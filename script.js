function searchFunction() {
  const query = document.getElementById("searchInput").value;
  alert("Você pesquisou: " + query);
}
function ativarContraste() {
  document.body.style.filter = "invert(1) hue-rotate(180deg)";
  localStorage.setItem("contrasteAtivo", "true");
  document.body.style.backgroundColor = "black";
}

function desativarC() {
  document.body.style.filter = "none";
  localStorage.setItem("contrasteAtivo", "false");
  document.body.style.backgroundColor = "white";

}
window.addEventListener("load", function () {
  const contrasteAtivo = localStorage.getItem("contrasteAtivo");
  if (contrasteAtivo === "true") {
    ativarContraste();
  } else {
    desativarC();
  }
})