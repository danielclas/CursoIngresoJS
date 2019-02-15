function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var mensaje;

	numero=Math.floor((Math.random() * 10) + 1);

	if(numero>8 && numero<11)
	{
			mensaje="Excelente";
	}
	else
	{	if(numero>4)
		{
					mensaje="Aprobó";
		}
		else
		{
				mensaje="Vamos, la próxima se puede";
		}


		}

	alert("Su nota es "+numero+", "+mensaje);


	

}//FIN DE LA FUNCIÓN