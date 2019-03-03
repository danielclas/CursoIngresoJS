/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto=Math.floor((Math.random()*100)+1);

	contadorIntentos=0;

	console.log(numeroSecreto);

}

function verificar()
{
	
	var numeroIngresado;
	var mensaje;

	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);

	contadorIntentos++;
	document.getElementById('intentos').value=contadorIntentos;

	if(numeroIngresado==numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1:
				mensaje="Usted es un psiquico";
					break;
			case 2:
				mensaje="Excelente percepcion";
					break;
			case 3:
				mensaje="Esto es suerte";
					break;
			case 4: 
				mensaje="EXcelente tecnica";
					break;
			case 5:
				mensaje="Usted esta en la media";
					break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				mensaje="Falta tecnica!";
					break;
			default:
				mensaje="Afortunado en el amor..";
		}
	}
	else
	{
		if(numeroIngresado<numeroSecreto)
		{
			mensaje="Falta";
		}
		else
		{
			mensaje="Te pasaste";
		}

	
	}

	alert(mensaje);
}

















/*


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor((Math.random()*100)+1);
	contadorIntentos=0;

	console.log(numeroSecreto);
}

function verificar()
{
	var numeroIngresado;
	var mensaje;

	contadorIntentos=contadorIntentos+1;

	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);

	if(numeroIngresado==numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1:
				mensaje="Usted es un psiquico";
					break;
			case 2:
				mensaje="Excelente percepcion";
					break;
			case 3:
				mensaje="Esto es suerte";
			case 4:
				mensaje="Excelente tecnica";
			case 5:
				mensaje="Usted esta en la media";
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				mensaje="Falta tecnica"
					break;
			default:
				mensaje="Afortunado en el amor.."
					break;	
		
		}
	}
	else
	{
		if(numeroIngresado<numeroSecreto)
		{
			mensaje="Falta";
		}
		else
		{
			mensaje="Te pasaste";
		}

	
	}

	alert(mensaje);
	

}


*/