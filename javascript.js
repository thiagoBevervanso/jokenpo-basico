var jogadorescolha = 0;
var computadorescolha = 0;
var ganhador = -1;
var jogadorPontos = 0;
var computadorPontos = 0;

function jogar(escolha){

//1-pedra
//2- papel
//3 tesoura
jogadorescolha = escolha

computadorescolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;


if(jogadorescolha == 1 && computadorescolha == 1) {
ganhador = 0;



}else if (jogadorescolha == 1 && computadorescolha == 2) {
ganhador = 2;   


}else if (jogadorescolha == 1 && computadorescolha == 3){
    ganhador = 1; 

}else if (jogadorescolha == 2 && computadorescolha == 1){
ganhador = 1; 

}else if (jogadorescolha == 2 && computadorescolha == 2){
ganhador = 0;


}else if (jogadorescolha == 2 && computadorescolha == 3){
ganhador = 2;


}else if (jogadorescolha == 3 && computadorescolha == 1){
ganhador = 1;


}else if (jogadorescolha == 3 && computadorescolha == 2){
ganhador = 2;


}else if(jogadorescolha == 3 && computadorescolha == 3){
ganhador = 0;

}




document.getElementById("jogador-escolha-" + jogadorescolha).classList.add('selecionado');


document.getElementById("computador-escolha-" + computadorescolha).classList.add('selecionado');





if(ganhador == 0){
        document.getElementById('mensagem').innerHTML = 'empate';

    }else if (ganhador == 1){

        document.getElementById('mensagem').innerHTML = 'JOGADOR GAANHOU';
        jogadorPontos++;
    }else if(ganhador == 2){

        document.getElementById('mensagem').innerHTML = 'computador ganhou';
        computadorPontos++;
    }

document.getElementById('jogador-pontos').innerHTML = jogadorPontos;

document.getElementById('computador-pontos').innerHTML = computadorPontos;
}
