/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temp;

	temp=Temperatura.value;

	temp=parseInt(temp);

	var acentigrados;

	acentigrados=(temp-32)/1.8;

	alert(temp+" grados fahrenheit son "+acentigrados+" grados celsius");
}

function CentigradosFahrenheit () 
{
	var temp;

	temp=Temperatura.value;

	temp=parseInt(temp);

	var afahrenheit;

	afahrenheit=(temp*1.8)+32;

	alert(temp+" grados centigrados son "+afahrenheit+" grados fahrenheit");
	
}
