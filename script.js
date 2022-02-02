/**
Projeto 02 - Jokenpô

Permitir que eu decida quantas rodadas iremos fazer;
Ler a minha escolha (Pedra, papel ou tesoura);
Decidir de forma aleatória a decisão do computador;
Mostrar quantas rodadas cada jogador ganhou;
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada
um (computador e jogador);
Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de
quantidade de rodadas, se não finalize o programa.

 */

// Chamada do prompt
const prompt = require('prompt-sync')();

// Variavel que controla novo jogo
let newGame = true;

// Função para verificar a resposta
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


// Corpo principal do programa
do {
  let rodadas = +prompt('Informe a quantidade de rodas: ');

  for (let i = 0; i < rodadas; i++) {
    console.log({i});
  }

  resp = respostas('Deseja jogar de novo? (1 - SIM / 2 - NÃO): ');
  if (resp == 1) {
    console.clear();
    newGame = true;
  } else {
    newGame = false;
  }
} while (newGame);
