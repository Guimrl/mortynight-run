function iniciarJogo() {
    var nivel = document.getElementById('nivel').value;

    if(nivel === '') {
        alert('Selecione um nível para iniciar o jogo')
        return false;
    }

    window.location.href = "app.html?" + nivel;
}

    //CRIAR SELECTLEVEL
    var selecionarNivel = document.getElementById('criarSelectLevel');
    console.log(selecionarNivel)
    selecionarNivel.innerHTML += 
            `
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-center">
                        <div class="mt-2 mb-2">
                            <select class="form-control" id="nivel">
                                <option value="">-- Select Level --</option>
                                <option value="morty">Morty</option>
                                <option value="normal">Summer</option>
                                <option value="hard">Beth</option>
                                <option value="extremo">Squanchy</option> 
                                <option value="impossible">Pickle Rick</option>  
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            `;

    //CRIAR BOTAO JOGAR
    var criarBotaoJogar = document.getElementById('criarBotaoJogar');
    criarBotaoJogar.innerHTML += 
            `
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-center">
                        <button onclick="iniciarJogo()" type="button" class="btn btn-success btn-lg">Start</button>
                    </div>
                </div>
            </div>
        `;


