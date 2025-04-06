function irParaProxima() {
    // aqui você pode redirecionar pra próxima página
    window.location.href = "historia.html"; // só criar depois essa página
  }
  
  // contador desde 22/11/2024 às 10h
  function atualizarContador() {
    const inicio = new Date("2024-11-22T10:00:00");
    const agora = new Date();
    const diff = agora - inicio;
  
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const contador = document.getElementById("contador");
  
    contador.textContent = `já fazem ${dias} dia${dias === 1 ? '' : 's'} desde aquele 22 de novembro de 2024 às 10h.`;
  }
  
  atualizarContador();
  