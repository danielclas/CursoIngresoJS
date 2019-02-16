function mostrar()
{
//tomo la edad  
	var años;
	var mensaje;

	años=edad.value;
	años=parseInt(años);

	if(años>=18)
	{
		mensaje="Mayor de edad";
	}
	else
	{
		if(años<13)
		{
			mensaje="Niño";
		}
		else
		{
			mensaje="Adolescente";
		}
	}	

	alert(mensaje);
}//FIN DE LA FUNCIÓN