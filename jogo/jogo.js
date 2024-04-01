const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth; 
canvas.heigth = window.innerHeight;

const player ={
    x: canvas.width/2,
    y: canvas.heigth/2,
    radius: 20, 
    color : '#00f'

} 

// Função para desenhar o jogador
function construindoJogador() {
    context.beginPath();
    context.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    context.fillStyle = player.color;
    context.fill();
    context.closePath();
}

window.addEventListener('deviceorientation', orientacaoDoPunho);

function orientacaoDoPunho(event) {
    const x = event.gamma; // esquerda/direita
    const y = event.beta; // frente/trás

    // Limitação de x e y dentro do limite do canvas
    player.x = Math.min(canvas.width - player.radius, Math.max(player.radius, player.x + x));
    player.y = Math.min(canvas.height - player.radius, Math.max(player.radius, player.y + y));
}

function gameLoop() {
    // Limpa o canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha o jogador
    construindoJogador();

    // Chama a função novamente para o próximo frame
    requestAnimationFrame(gameLoop);
}

// Inicia o loop de jogo
gameLoop();