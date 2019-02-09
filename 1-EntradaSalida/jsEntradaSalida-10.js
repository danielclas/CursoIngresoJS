/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo; //defini variables
	var final;

	sueldo = importe.value; //asigne valor de ID a variable

	sueldo=parseInt(sueldo); //lo transformo a entero
	final=(sueldo-sueldo*25/100); //

	resultado.value=final; //




}
