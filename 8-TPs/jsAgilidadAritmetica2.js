/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
function comenzar()
{
	var numero1;
	var numero2;
	var operaciones;
	var operador;

	numero1=Math.floor((Math.random()*10)+1);
	numero2=Math.floor((Math.random()*10)+1);
	operaciones=Math.floor((Math.random()*4)+1);

	switch(operaciones)
	{
		case 1:
			operador="*";
				break;
		case 2:
			operador="+";
				break;
		case 3:
			operador="/";
				break;
		case 4:
			operador="-";
				break;
	}
	switch(operador)
	{
		case "*":
			respuestaCorrecta=numero1*numero2;
				break;
		case "+":
			respuestaCorrecta=numero1+numero2;
				break;
		case "/":
			respuestaCorrecta=numero1/numero2;
				break;
		case "-":
			respuestaCorrecta=numero1-numero2;
				break;
	}

	

	console.log(respuestaCorrecta);

	document.getElementById('PrimerNumero').value=numero1;
	document.getElementById('SegundoNumero').value=numero2;
	document.getElementById('Operador').value=operador;


	
}//FIN DE LA FUNCIÓN
function Responder()
{
	var mensaje;

	respuesta=document.getElementById('Respuesta').value;
	respuesta=parseInt(respuesta);

	if(respuesta==respuestaCorrecta)
	{
		mensaje="Resultado correcto";
	}
	else
	{
		mensaje="Resultado incorrecto";
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN
