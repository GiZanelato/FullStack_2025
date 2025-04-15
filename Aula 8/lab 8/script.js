let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

// imagem
let dog = new Image();
dog.src = '../lab 8/imagens/dog.png';

// Posição inicial da imagem
let x = canvas.width / 2;
let y = canvas.height / 2;

// Tamanho da imagem
const imgWidth = 30;
const imgHeight = 30;

dog.onload = function () {
    // animação
    animacao();

    // Atualiza posição com o mouse
    document.addEventListener('mousemove', function (evento) {
        let rect = canvas.getBoundingClientRect();
        let mouseX = evento.clientX - rect.left;
        let mouseY = evento.clientY - rect.top;

        // Centraliza imagem no ponteiro
        x = mouseX;
        y = mouseY;

        // Garante que a imagem não ultrapasse os limites 
        if (x - imgWidth / 2 < 0) x = imgWidth / 2;
        if (y - imgHeight / 2 < 0) y = imgHeight / 2;
        if (x + imgWidth / 2 > canvas.width) x = canvas.width - imgWidth / 2;
        if (y + imgHeight / 2 > canvas.height) y = canvas.height - imgHeight / 2;

        animacao();
    });
};

function animacao() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let drawX = x - imgWidth / 2;
    let drawY = y - imgHeight / 2;

    ctx.drawImage(dog, drawX, drawY, imgWidth, imgHeight);
}
