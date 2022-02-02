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

const prompt = require('prompt-sync')();

let newGame = true;

function respostas(pergunta) {
  while (true) {
    let resp = +prompt(pergunta);

    if (resp == 1) {
      return 1;
    } else if (resp == 2) {
      return 2;
    } else {
      console.clear();
      console.log('Opção inválida!');
    }
  }
}

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