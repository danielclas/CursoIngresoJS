/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var salario;//creo las variables, incluido el aumento por separado para luego sumarlo
	var aumento;
	var conaumento;

	salario=sueldo.value;	//tomo dato de salario por id

	salario=parseInt(salario); //paso dato de id a entero

	aumento=salario*10/100; //realizo la operacion para conocer el aumento
	conaumento=salario+aumento;//sumo el salario actual mas el aumento

	resultado.value=conaumento;//muestro el salario con aumento incluido
	


	
}
