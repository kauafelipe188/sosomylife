const startDate = new Date('2024-11-22T10:00:00');
const contador = document.createElement('p');
document.querySelector('.historia').appendChild(contador);

function atualizarContador() {
    const now = new Date();
    const diff = now - startDate;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    contador.textContent = `a nossa historia começou á(nos conhecemos): ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💖`;
}

setInterval(atualizarContador, 1000);
