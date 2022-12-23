const start_btn = document.getElementById('start-btn');
const telas = document.querySelectorAll('.tela');
const personagem_escolhido_btn = document.querySelectorAll('.personagem-escolhido-btn');
const game_container = document.getElementById('game-container');
const tempoEl = document.getElementById('tempo');
let segundos = 0;
let personagem_escolhido = {}

start_btn.addEventListener('click', () => telas[0].classList.add('up'));

personagem_escolhido_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        personagem_escolhido = { src, alt };
        telas[1].classList.add('up');
        setTimeout(criaPersonagem, 1000);
        iniciarJogo();
    })
})

function iniciarJogo() {
    setInterval(aumentarTempo, 1000);
}

function aumentarTempo() {
    let m = Math.floor(segundos / 60);
    let s = segundos % 60;
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    tempoEl.innerHTML = `${m}:${s}`
    segundos++;
}

function posicaoRandomica() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y }
}

function criaPersonagem() {
    const personagem = document.createElement('div');
    personagem.classList.add('personagem');
    const { x, y } = posicaoRandomica();
    personagem.style.top = `${y}px`
    personagem.style.left = `${x}px`
    personagem.innerHTML = `<img src="${personagem_escolhido.src}"
    />`

    personagem.addEventListener('click', clickPersonagem)

    game_container.appendChild(personagem);
}

function adicionaPersonagem() {
    setTimeout(criaPersonagem, 1000);
}



// let altura = 0;
// let largura = 0;
// let vidas = 1;
// let tempo = 45;

// let criaMortyTempo = 2000;

// var nivel = window.location.search;
// nivel = nivel.replace('?', '');

// if(nivel === 'morty') {
//     //2000
//     criaMortyTempo = 2000;
// } else if(nivel === 'normal') {
//     //1500
//     criaMortyTempo = 1500;
// } else if(nivel === 'hard') {
//     //1000
//     criaMortyTempo = 1000;
// } else if(nivel === 'extreme') {
//     //750
//     criaMortyTempo = 750;
// } else if(nivel === 'impossible') {
//     //500
//     criaMortyTempo = 500;
// }

// function tamanhoTela() {
//     altura = window.innerHeight;
//     largura = window.innerWidth;

//     console.log(largura, altura);
// }
// tamanhoTela();

// //cronometro
// let cronometro = setInterval(function() {

//     tempo -= 1;
//     if(tempo < 0) {
//         //vitoria
//         clearInterval(cronometro);
//         clearInterval(criaMorty);
//         window.location.href = 'vitoria.html';
//     } else {
//         document.getElementById('cronometro').innerHTML = tempo;
//         // console.log(cronometro)
//     }
// },1000)

// function posicaoRandomica() {

//     //remover o morty anterior(caso exista)
//     let criaMorty = document.getElementById('morty');
//     if(criaMorty) {
//         criaMorty.remove();

//         //gameover
//         if(vidas > 3) {
//             window.location.href = 'fim_de_jogo.html';
//             alert('oi')
//         } else {
//             //controle de vidas
//             document.getElementById('v' + vidas).src='img/coracao_vazio.png';
//             vidas++;
//         }
//     }

    

//     //sorteia uma posicao randomica na tela
//     let posicaoX = Math.floor(Math.random() * largura) - 90;
//     let posicaoY = Math.floor(Math.random() * altura) - 90;

//     posicaoX = posicaoX < 0 ? 0 : posicaoX;
//     posicaoY = posicaoY < 0 ? 0 : posicaoY;
    
//     console.log(posicaoX, posicaoY);
    
//     //criar morty elemento html
//     let morty = document.createElement('img');
//     morty.src = 'img/morty.png';
//     morty.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
//     morty.style.left = posicaoX + 'px';
//     morty.style.top = posicaoY + 'px';
//     morty.style.position = 'absolute';

//     morty.id = 'morty';

//     //controle dos clicks dos mortys
//     morty.onclick = function() {
//         this.remove();
//     }

//     document.body.appendChild(morty);

// }

// //gera tamanhos aleatorios de mortys
// function tamanhoAleatorio() {
//     let classe = Math.floor(Math.random() * 3);
    
//     switch(classe) {
//         case 0:
//             return 'morty1';
//         case 1:
//             return 'morty2';
//         case 2:
//             return 'morty3';
//     }
// }

// //gera tamanhos de mortys aleatorios
// function ladoAleatorio() {
//     let classe = Math.floor(Math.random() * 2);
    
//     switch(classe) {
//         case 0:
//             return 'ladoA';
//         case 1:
//             return 'ladoB';
//     }
// }
