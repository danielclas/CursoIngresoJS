/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primero; //defino las variables
	var segundo;
	var suma

	primero=numeroUno.value; //asigno valor a traves de id
	segundo=numeroDos.value;

	primero=parseInt(primero); //transformo datos ingresados a enteros
	segundo=parseInt(segundo); //siempre ingresar nombre de variable despues de parseInt

	suma=(primero+segundo); //indico que la variables suma = primero+segundo


	alert("El resultado es "+suma); //muestro resultado por alert






}

