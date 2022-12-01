//criar o elemento html
var morty = document.createElement('img');
morty.src = 'img/morty.png';
morty.className = tamanhoMorty() + ' ' + ladoMorty();
morty.style.left = posicaoX + 'px';
morty.style.top = posicaoY + 'px';
morty.style.position = 'absolute';
morty.id = 'morty';
morty.onclick = function () {
    this.remove();
}

document.body.appendChild(morty);

function tamanhoMorty() {
    var classe = Math.floor(Math.random() * 3);
    switch(classe) {
        case 0:
            return 'morty1';
        case 1:
            return 'morty2';
        case 2:
            return 'morty3';
    }
}

function ladoMorty() {
    var classe = Math.floor(Math.random() * 2);
    switch(classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }

}