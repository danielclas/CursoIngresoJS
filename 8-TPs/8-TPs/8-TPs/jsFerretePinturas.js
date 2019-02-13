/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var enfahrenheit;

	enfahrenheit=Temperatura.value;

	enfahrenheit=parseInt(enfahrenheit);

	var acentigrados;

	acentigrados=(enfahrenheit-32)/1.8;

	alert(enfahrenheit+" grados fahrenheit son "+acentigrados+" grados centigrados");

	
}

function CentigradosFahrenheit () 
{
	var encentigrados;

	encentigrados=Temperatura.value;

	encentigrados=parseInt(encentigrados);

	var afahrenheit;

	afahrenheit=encentigrados*1.8+32;

	alert(encentigrados+" grados centigrados son "+afahrenheit+" grados fahrenheit");




	
}
