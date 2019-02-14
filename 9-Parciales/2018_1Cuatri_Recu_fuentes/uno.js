
function mostrar()
{
	var mascota1;

	mascota1=prompt("Mascota 1=");

	var mascota2;

	mascota2=prompt("Mascota 2=");

	var peso1;

	peso1=prompt("Peso de mascota 1");

	var peso2;

	peso2=prompt("Peso de mascota 2");

	peso1=parseInt(peso1);
	peso2=parseInt(peso2);

	var suma;

	suma=peso1+peso2;

	alert("Tenes dos mascotas: "+mascota1+" y "+mascota2+", que suman "+peso1+" y "+peso2+" kilos, y la suma de los pesos es: "+suma);

}
