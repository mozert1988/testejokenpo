console.log("Jokenpô!");

//criei primeiro a opção de jogadores e um let para escolha da sua jogada

let jogador = 1;
let computador = 2;
let escolha = "?";

//Coloquei uma mensagem inicial
//Aqui decido quantas jogadas vamos fazer, preciso criar um contador de resultado
console.log("Vamos começar, quantas rodadas você quer disputar? Ah uma dica, se você escolher um numero impar não teremos empate!");


//opçao de jogadas e decisão aleatoria do computador
let listaDeOpcao = ["papel", "pedra", "tesoura"];
let lista = listaDeOpcao.length;
let random = Math.floor(Math.random()*lista)
let choice = listaDeOpcao[random];

let jogador = prompt("\nEscolha entre: Pedra, papel e tesoura ?")

//comparação do resultado de papel

if(jogador === "papel" && escolha === "papel"){
console.log("Você escolheu papel e eu escolhi ${listaDeOpcao[0]} - Empate");
} else if(jogador === "papel" && escolha === "pedra"){
  console.log("Você escolheu papel e eu escolhi ${listaDeOpcao[1]}-Perdi ");
  jogador = ++ jogador;
} else if (jogador === "papel" && escolha === "tesoura"){
  console.log("Você escolheu papel e eu escolhi ${listaDeOpcao[2]} - Ganhei");

// estou pensando em uma logica onde pedra sempre ganha de tesoura, perde pra papel e que tesoura ganhe de papel, sei que já vi algo parecido! 

//mensagem final

if(jogador === computador){
  console.log("Empatamos, vamos fazer uma nova disputa? Se lembre da dica que te dei, se quiser um vencedor escolha algum numero impar!")
}else if(jogador < computador){
  console.log("Você perdeu, boa sorte na proxima! Quer jogar mais uma vez? ")
}else {
  console.log("Parabens, você ganhou! Quer jogar de novo?")
}





















































