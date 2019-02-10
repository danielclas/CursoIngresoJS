/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingresado; //creo las variables
	var descuento;
	var condescuento

	ingresado=importe.value; //tomo dato por id 

	ingresado=parseInt(ingresado); //transformo dato a entero

	descuento=ingresado*25/100; //calculo descuento sobre dato ingresado

	condescuento=ingresado-descuento; //realizo la resta del dato ingresado menos el descuento calculado

	resultado.value=condescuento;//muestro resultado por id









}
