/**
Projeto 02 - Jokenpô
*/

// Chamada do prompt
const prompt = require('prompt-sync')();

// Variaveis principais
let newGame = true;
let vitoriaComputador = 0;
let vitoriaJogador = 0;
let jogada = ['PEDRA', 'PAPEL', 'TESOURA'];

//------------- MAIN----------------//
// Corpo principal do programa
do {
  let rodadas = +prompt('Informe a quantidade de rodas: ');
  vitoriaComputador = 0;
  vitoriaJogador = 0;
  let fim = 0;

  for (let i = 1; i <= rodadas; i++) {
    console.log(`Rodada ${i}\n`);
    let computador = '';
    let jogador = '';

    //Escolha do computador
    let escolha = Math.floor(3 * Math.random()); // Gera um numero aleatório de 0 a 2
    computador = jogada[escolha]; //Seleciona jogada na lista usando numero gerado

    //Escolha do jogador
    jogador = escolhaJogador(); // Valida escolha

    //Verifica quem ganhou a rodada
    console.log(campeaoRodada(computador, jogador));
    console.log(
      `Placar: ${vitoriaComputador} Computador | ${vitoriaJogador} Jogador\n`
    );

    // Exibe o grade vencedor
    fim++;
    if (fim == rodadas) {
      console.log('FIM');
    }
  }

  //Pergunta se jogador quer reiniciar o jogo
  console.log();
  resp = respostas('Deseja jogar de novo? (1 - SIM / 2 - NÃO): ');
  if (resp == 1) {
    console.clear();
    newGame = true;
  } else {
    newGame = false;
  }
} while (newGame);

//------------- FUNÇÕES----------------//

// Função para verificar a resposta de novo jogo
function respostas(pergunta) {
  while (true) {
    let resposta = +prompt(pergunta);

    if (resposta == 1) {
      return 1;
    } else if (resposta == 2) {
      return 2;
    } else {
      console.clear();
      console.log('Opção inválida!');
    }
  }
}

//Função verifica se usuario digitou as opções válidas
function escolhaJogador() {
  while (true) {
    let escolha = prompt(
      'Digite sua jogada (pedra papel ou tesoura): '
    ).toUpperCase();
    if (escolha === 'PEDRA' || escolha === 'PAPEL' || escolha === 'TESOURA') {
      return escolha;
    } else {
      console.clear();
      console.log('Jogada incorreta! Digite da forma correta!');
    }
  }
}

//Função que verifica quem ganhou a rodada
function campeaoRodada(computador, jogador) {
  console.clear();
  console.log(`Computador: ${computador}, Jogador: ${jogador}`);

  if (computador == 'PEDRA') {
    if (jogador == 'TESOURA') {
      vitoriaComputador++;
      return 'O Computador venceu essa!\n';
    } else if (jogador == 'PAPEL') {
      vitoriaJogador++;
      return 'Voce venceu essa!\n';
    } else {
      return 'Deu empate!\n';
    }
  } else if (computador == 'PAPEL') {
    if (jogador == 'PEDRA') {
      vitoriaComputador++;
      return 'O Computador venceu essa!\n';
    } else if (jogador == 'TESOURA') {
      vitoriaJogador++;
      return 'Voce venceu essa!\n';
    } else {
      return 'Deu empate!\n';
    }
  } else if (computador == 'TESOURA') {
    if (jogador == 'PAPEL') {
      vitoriaComputador++;
      return 'O Computador venceu essa!\n';
    } else if (jogador == 'PEDRA') {
      vitoriaJogador++;
      return 'Voce venceu essa!\n';
    } else {
      return 'Deu empate!\n';
    }
  }
}
