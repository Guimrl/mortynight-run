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
} else if(nivel === 'impossible') {
    //300
    criaMortyTempo = 300;
}

console.log('o nivel escolhido é: ',nivel)
console.log('intervalo entre mortys',criaMortyTempo)