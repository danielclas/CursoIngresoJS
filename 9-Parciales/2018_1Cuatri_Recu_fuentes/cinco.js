function mostrar()
{
	var dia;
	var mensaje;

	dia=prompt("Ingrese un dia de la semana");

	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje="A trabajar";
				break;
		case "sabado":
		case "domingo":
			mensaje="Buen finde";
				break;
		default:
			mensaje="El dia ingresado no es valido";
				break;
	}

	alert(mensaje);
}
