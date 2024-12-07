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