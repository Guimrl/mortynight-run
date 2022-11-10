var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 60;

var criaMortyTempo = 2000;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'morty') {
    //2000
    criaMortyTempo = 2000;
} else if(nivel === 'normal') {
    //1500
    criaMortyTempo = 1500;
} else if(nivel === 'dificil') {
    //1000
    criaMortyTempo = 1000;
} else if(nivel === 'extremo') {
    //750
    criaMortyTempo = 750;
}

function tamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}
tamanhoTela();

var cronometro = setInterval(function() {

    tempo -= 1;

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMorty)
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
    
}, 1000);

function posicaoRandom() {

    //remover o morty anterior(caso exista)
    if(document.getElementById('morty')){
        document.getElementById('morty').remove();

        //gameover
        if(vidas > 3) {
            
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v' + vidas).src="img/coracao_vazio.png";
            vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) -90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    //criar o elemento html
    var morty = document.createElement('img');
    morty.src = 'img/morty.png';
    morty.className = tamanhoMorty() + ' ' + ladoMorty();
    morty.style.left = posicaoX + 'px';
    morty.style.top = posicaoY + 'px';
    morty.style.position = 'absolute';
    morty.id = 'morty';
    morty.onclick = function () {
        this.remove()
    }

    document.body.appendChild(morty);


}

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
