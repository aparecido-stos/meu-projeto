// Obtém o nome da página atual
const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

// Seleciona todos os links do menu com atributo data-page
const navLinks = document.querySelectorAll('.navbar a');

// Adiciona a classe 'active' ao link correspondente
navLinks.forEach(link => {
  if (link.dataset.page === currentPage) {
    link.classList.add('active');
  }
});