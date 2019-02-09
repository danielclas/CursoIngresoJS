/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var salario; //creo las variables
	var aumento;

	salario=sueldo.value; //asigno el valor a las variables a traves del ID

	salario=parseInt(salario); //transformo el valor a entero

	aumento=salario*10/100+salario; //defino la variable como aumento + sueldo

	resultado.value=aumento; //muestro la variable aumento



	
}
