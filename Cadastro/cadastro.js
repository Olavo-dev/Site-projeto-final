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
document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.loginButton');
  const cadastroButton = document.querySelector('.cadastroButton');
  const container = document.querySelector('.containerPai');
  const formLogin = document.querySelector('#formLogin');
  const formCadastro = document.querySelector('.formCadastro form');

  // Alternar entre login e cadastro
  loginButton.addEventListener('click', () => {
    container.classList.add('cadastroActive');
  });

  cadastroButton.addEventListener('click', () => {
    container.classList.remove('cadastroActive');
  });

  // Cadastro
  formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = formCadastro.querySelector('input[placeholder="Nome completo"]').value.trim();
    const email = formCadastro.querySelector('input[placeholder="E-mail"]').value.trim();
    const senha = formCadastro.querySelector('input[placeholder="Senha"]').value;
    const confirmarSenha = formCadastro.querySelector('input[placeholder="Confirme sua senha"]').value;

    if (nome.length < 3) {
      alert('Nome precisa ter pelo menos 3 caracteres');
      return;
    }

    if (!email.includes('@')) {
      alert('Digite um email válido');
      return;
    }

    if (senha.length < 6) {
      alert('Senha precisa ter pelo menos 6 caracteres');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    const listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    const jaExiste = listaUser.some(user => user.email === email);
    if (jaExiste) {
      alert('Email já cadastrado');
      return;
    }

    listaUser.push({ nome, email, senha });
    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    alert('Usuário cadastrado com sucesso!');
    container.classList.add('cadastroActive');
  });

  // Login
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = formLogin.querySelector('input[placeholder="E-mail"]').value.trim();
    const senha = formLogin.querySelector('input[placeholder="Senha"]').value;

    const listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    const user = listaUser.find(user => user.email === email && user.senha === senha);

    if (user) {
      const token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
      localStorage.setItem('token', token);
      localStorage.setItem('userLogado', JSON.stringify(user));

      alert('Login realizado com sucesso!');
      window.location.href = '../index.html';
      
    } else {
      alert('Usuário ou senha incorretos');
    }
  });
});
