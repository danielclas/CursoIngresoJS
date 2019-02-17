function mostrar()
{
	var planeta;
	var mensaje;

	planeta=prompt("Ingrese un planeta");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			mensaje="Acá hace más calor";
				break;
		case "tierra":
			mensaje="Acá vivimos";
				break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
			mensaje="Acá hace más frío";
				break;
		default:
			mensaje="Este planeta no existe";
				break;

	}

	alert(mensaje);

}
