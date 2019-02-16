function mostrar()
{
//tomo la edad  
	var años;
	var mensaje;

	años=edad.value;
	años=parseInt(años);

	if(años>17)
	{
		mensaje="Es mayor de edad";
	}
	else
	{	
		mensaje="Es menor de edad";
		
	}

		alert(mensaje);

}//FIN DE LA FUNCIÓN