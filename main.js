var rodadas;
var pontosJogador;
var pontosBot;

rodadas = 0;
pontosJogador = 0;
pontosBot = 0;

function Sorteio(params) 
{
    var palpiteJogador;
    var apostaJogador;
    var palpiteBot;
    var apostaBot;
    var somaApostas;
    


    palpiteJogador = document.getElementById("palpite").value;
    apostaJogador = document.getElementById("aposta").value;
    apostaJogador = parseInt(apostaJogador);

    apostaBot = Math.random() * 11;
    apostaBot = parseInt(apostaBot);
    console.log(apostaBot);

    if (palpiteJogador != "par" && palpiteJogador != "impar") {
        alert("Palpite inválido.")
    }
    else if (palpiteJogador === "par") {
        palpiteBot = "impar";
    }
    else if (palpiteJogador === "impar") {
        palpiteBot = "par";
    }

    if (apostaJogador > 10) {
        alert("Número inválido, insira corretamente.")
    }
    else
    {
        somaApostas =  apostaJogador + apostaBot;
    }

    switch (palpiteJogador) {
        case "par":
            if (somaApostas % 2 === 0) {
                console.log(somaApostas % 2)
                alert("O Jogador ganhou a rodada.")
                document.getElementById("pontosJogador").innerHTML = `Jogador: ${pontosJogador += 1}`;
                document.getElementById("rodadas").innerHTML = `Rodadas: ${rodadas += 1}`;
            }
            else if (somaApostas % 2 === 1) {
                console.log(somaApostas % 2)
                alert("O Bot ganhou a rodada.")
                document.getElementById("pontosBot").innerHTML = `Bot: ${pontosBot += 1}`;
                document.getElementById("rodadas").innerHTML = `Rodadas: ${rodadas += 1}`;
            }
            break;
        
        case "impar":
            if (somaApostas % 2 === 1) {
                console.log(somaApostas % 2)
                alert("O Jogador ganhou a rodada.")
                document.getElementById("pontosJogador").innerHTML = `Jogador: ${pontosJogador += 1}`;
                document.getElementById("rodadas").innerHTML = `Rodadas: ${rodadas += 1}`;
            }
            else if (somaApostas % 2 === 0) {
                console.log(somaApostas % 2)
                alert("O Bot ganhou a rodada.")
                document.getElementById("pontosBot").innerHTML = `Bot: ${pontosBot += 1}`;
                document.getElementById("rodadas").innerHTML = `Rodadas: ${rodadas += 1}`;
            }
    
    }

    if (rodadas === 3 && pontosJogador > pontosBot) {
        document.write(`Fim de jogo!<br>O vencedor foi o jogador!<br><button onclick="Reiniciar()">Reiniciar</button>`)
    }
    else if(rodadas === 3 && pontosBot > pontosJogador){
        document.write(`Fim de jogo!<br>O vencedor foi o Bot!<br><button onclick="Reiniciar()">Reiniciar</button>`)
    }

}

function Reiniciar(params) {
    window.location = "http://127.0.0.1:5500/Simple%20Bots/index.html"
}