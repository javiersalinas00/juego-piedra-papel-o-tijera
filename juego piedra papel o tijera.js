var myArray = ['Piedra', 'Papel', 'Tijera'];
var computador = myArray[~~(Math.random() * myArray.length)];
//console.log(computador);Add commentMore actions
var opcionJugador = prompt('Elije: Piedra papel o Tijera!');
if (computador === opcionJugador) {
    console.log("Empate!");
}if ( computador == 'Piedra' && opcionJugador == 'Tijera' ) {
    console.log("Ganó Piedra");
}if ( computador == 'Piedra' && opcionJugador == 'Papel' ) {
    console.log("Ganó Piedra");
}if ( computador == 'Papel' && opcionJugador == 'Piedra' ) {
    console.log("Ganó Piedra");
}if ( computador == 'Papel' && opcionJugador == 'Tijera' ) {
    console.log("Gano Tijera");
}if ( computador == 'Papel' && opcionJugador == 'Piedra' ) {
    console.log("Ganó Piedra");
}if ( computador == 'Tijera' && opcionJugador == 'Papel' ) {
    console.log("Ganó Tijera");
}if ( computador == ' Tijera' && opcionJugador == 'Piedra' ) {
    console.log("Ganó Piedra");
}if ( computador == opcionJugador ) {
    console.log("Empate!");
}
else {
    console.log("Prueba nuevamente")
};
