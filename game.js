var altura = 0;
var largura = 0;

function tamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}
tamanhoTela();

function posicaoRandom() {
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) -90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    //criar o elemento html
    var morty = document.createElement('img');
    morty.src = 'img/morty.png';
    morty.className = 'morty1';
    morty.style.left = posicaoX + 'px';
    morty.style.top = posicaoY + 'px';
    morty.style.position = 'absolute';

    document.body.appendChild(morty);
}
