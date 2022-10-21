var jogadorescolha = 0;
var compputadorescolha = 0;
var ganhador = -1;
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


document.getElementById("jogador-escolha-" + jogadorescolha).classlist.add('selecionado');

document.getElementById("computador-escolha-" + computadorescolha).classlist.add('selecionado');
}
