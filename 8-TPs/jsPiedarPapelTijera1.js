/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina=Math.floor((Math.random()*3)+1);
	console.log(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	var mensaje;

	switch(eleccionMaquina)
	{
		case 1:
			mensaje="Empate";
				break;
		case 2:
			mensaje="Perdiste";
				break;
		case 3:
			mensaje="Ganaste";
				break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
function papel()
{
	var mensaje;

	switch(eleccionMaquina)
	{
		case 1:
			mensaje="Ganaste";
				break;
		case 2:
			mensaje="Empate";
				break;
		case 3:
			mensaje="Perdiste"
				break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
function tijera()
{
	var mensaje;

	switch(eleccionMaquina)
	{
		case 1:
			mensaje="Perdiste"
				break;
		case 2:
			mensaje="Ganaste";
				break;
		case 3:
			mensaje="Empate"
			 break;
	}
		
	alert(mensaje);

}//FIN DE LA FUNCIÓN