function mostrar()
{

	var planeta;
	var mensaje;

	planeta=prompt("Ingrese el nombre de un planeta en minusculas");

	switch(planeta)
	{
		case "tierra":
			mensaje="Aca vivimos";
				break;
		case "mercurio":
		case "venus":
			mensaje="Aca hace mas calor";
				break;
		case "marte":
		case "saturno":
		case "jupiter":
		case "urano":
		case "neptuno":
		case "pluton":
			mensaje="Aca hace mas frio";
				break;
		default:
			mensaje="Ingrese un planeta valido";
				break;
	}

	alert(mensaje);


}
