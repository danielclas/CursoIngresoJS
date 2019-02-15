function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var mensaje;

	numero=Math.floor((Math.random() * 10) + 1);

	if(numero>8)
	{
			mensaje="Excelente, su nota es "+numero;
	}
	else
	{	if(numero>4)
		{
				mensaje="Aprobó, su nota es "+numero;
		}
		else
		{
				mensaje="Vamos, la próxima se puede. Tu nota es "+numero;
		}


	}

	alert(mensaje);
	console.log(numero);


	

}//FIN DE LA FUNCIÓN