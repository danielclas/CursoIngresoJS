/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primero;
	var segundo;
	var suma

	primero=numeroUno.value;
	segundo=numeroDos.value;

	primero=parseInt(primero);
	segundo=parseInt(segundo);

	suma=primero+segundo;

	alert("El resultado es "+suma);
	
}

function restar()
{
	var primero;
	var segundo;
	var resta;

	primero=numeroUno.value;
	segundo=numeroDos.value;

	primero=parseInt(primero);
	segundo=parseInt(segundo);

	resta=primero-segundo;

	alert("El resultado es "+resta);

	
}

function multiplicar()
{ 
	var primero;
	var segundo;
	var multiplicacion;

	primero=numeroUno.value;
	segundo=numeroDos.value;

	primero=parseInt(primero);
	segundo=parseInt(segundo);

	multiplicacion=primero*segundo;

	alert("El resultado es "+multiplicacion);
	
}

function dividir()
{
	var primero
	var segundo
	var division

	primero=numeroUno.value;
	segundo=numeroDos.value;

	primero=parseInt(primero);
	segundo=parseInt(segundo);

	division=primero/segundo;

	alert("El resultado es "+division);



	
}

