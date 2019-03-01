function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var acumulador;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);
	acumulador=0;

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{

		if(numeroIngresado%numeroAnterior==0)
		{
			
			acumulador=acumulador+numeroIngresado;
			break;
		}

		console.log(numeroAnterior);
	}

	if(acumulador==numeroIngresado)
	{
		console.log("es perfecto");
	}
	else
	{
		console.log("no es perfecto");
	}



}//FIN DE LA FUNCIÓN

/*

NUMERO PERFECTO


	var numeroIngresado;
	var numeroAnterior;
	var acumulador;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);
	acumulador=0;

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{

		if(numeroIngresado%numeroAnterior==0)
		{
			acumulador=acumulador+numeroIngresado;
			break;
		}

		console.log(numeroAnterior);
	}

	if(acumulador==numeroIngresado)
	{
		console.log("es perfecto");
	}
	else
	{
		console.log("no es perfecto");
	}


*/