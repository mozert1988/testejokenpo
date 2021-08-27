

console.log("Jokenpô!");

//criei primeiro a opção de jogadores e um let para escolha da sua jogada

let jogador;
let computador;
let escolha; 
let ganhou = 0;
let perdeu = 0;
let empatou = 0;
let jogarNovamente = 1;

//Coloquei uma mensagem inicial
//Aqui decido quantas jogadas vamos fazer, preciso criar um contador de resultado
//O while é para reiniciar o jogo caso o jogador queira 


while (jogarNovamente == 1 ){
escolha = prompt("Vamos começar, quantas rodadas você quer disputar? ");

//opçao de jogadas e decisão aleatoria do computador
let listaDeOpcao = ["papel", "pedra", "tesoura"];

for (var i = 1; i <= escolha; i++){
  console.log('Rodada ' + i);
  jogador = prompt("Escolha entre:\n pedra, papel e tesoura ?");
  computador = listaDeOpcao[Math.floor(Math.random()*(2 - 0))+ 0];
  
  if(jogador == "papel" && computador == "papel"){
    console.log("Você escolheu " + jogador + " e eu escolhi " + computador + " - Empate");
    empatou++;

  } else if(jogador == "papel" && computador == "pedra"){
    console.log("Você escolheu " + jogador + " e eu escolhi " + computador + " - Perdi ");
    ganhou++;
  } else if (jogador == "papel" && computador == "tesoura"){
    console.log("Você escolheu " + jogador + " e eu escolhi " + computador + " - Ganhei");
    perdeu++;
  }else if(jogador == "pedra" && computador == "pedra"){
    console.log("Você escolheu " + jogador + " e eu escolhi " + computador + " - Empate");
    empatou++;

  } else if(jogador == "pedra" && computador == "tesoura"){
    console.log("Você escolheu " + jogador + " e eu escolhi " + computador + " - Perdi ");
    ganhou++;
  } else if (jogador == "pedra" && computador == "papel"){
    console.log("Você escolheu " + jogador + " e eu escolhi " + computador + " - Ganhei");
    perdeu++;
  }else if(jogador == "tesoura" && computador == "tesoura"){
    console.log("Você escolheu " + jogador + " e eu escolhi " + computador + " - Empate");
    empatou++;

  } else if(jogador == "tesoura" && computador == "papel"){
    console.log("Você escolheu " + jogador + " e eu escolhi " + computador + " - Perdi ");
    ganhou++;
  } else if (jogador == "tesoura" && computador == "pedra"){
    console.log("Você escolheu " + jogador + " e eu escolhi " + computador + " - Ganhei");
    perdeu++;
  }
}


//mensagem final
console.log("\n -----------------------------------------------------");

// contagem de vitoria de cada jogador 
console.log("Você ganhou: " + ganhou + " eu ganhei: " + (escolha - ganhou - empatou) + " e empatamos: " + empatou);

if(ganhou === perdeu){
  console.log("Empatamos, vamos fazer uma nova disputa? ")
}else if(ganhou < perdeu){
  console.log("Você perdeu, boa sorte na proxima! Quer jogar mais uma vez? ")
}else {
  console.log("Parabens, você ganhou! Quer jogar de novo?")
}
//Final  do codigo onde o jogador decide se continua ou joga novamente!
jogarNovamente = prompt ("Deseja jogar novamente? Utilize 1 para sim e 2 para não. ");
 while (jogarNovamente != 2 && jogarNovamente != 1) {
jogarnovamente = prompt ("Digite 1 para jogar novamente ou 2 para encerrar o jogo. ")
}
if (jogarNovamente == 2) {
  console.log ("Fim de jogo!")}
}


















































