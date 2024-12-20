//funçao para linkar header.html
  document.querySelector('.header').innerHTML = fetch('/header/header.html').then(response => response.text()).then(data => {
  document.querySelector('.header').innerHTML = data;
  });
  //fim da funçao para linkar header.html
//funçao para linkar footer.html
  document.querySelector('.footer').innerHTML = fetch('/footer/footer.html').then(response => response.text()).then(data => {
  document.querySelector('.footer').innerHTML = data;
  });
  //fim da funçao para linkar footer.html

  function exibirDataHora() {
    const data = new Date();
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    const hora = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
  
    const dataHoraFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
    
    document.getElementById("data-hora").textContent = dataHoraFormatada;
  }
  
  // Atualiza a data e hora a cada segundo
  setInterval(exibirDataHora, 1000);
  
  // Exibe imediatamente ao carregar a página
  exibirDataHora();
  // fim escopo para chamar data e hora