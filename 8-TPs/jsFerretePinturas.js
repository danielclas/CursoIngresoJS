/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var grados;
	var acentigrados;

	grados=document.getElementById('Temperatura').value;
	grados=parseInt(grados);

	acentigrados=(grados-32)/1.8

	alert("La temperatura es "+acentigrados);
	
}

function CentigradosFahrenheit () 
{
	var grados;
	var afahrenheit;

	grados=document.getElementById('Temperatura').value;
	grados=parseInt(grados);

	afahrenheit=(grados*1.8)+32;

	alert("La temperatura es "+afahrenheit);
	
}
