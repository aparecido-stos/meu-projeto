// escopo para chamar data e hora
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

