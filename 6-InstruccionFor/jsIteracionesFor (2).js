function mostrar()
{

	var numeroIngresado;
	var numeroAnterior;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{

		if(numeroIngresado%numeroAnterior==0)
		{
			break;
		}

		console.log(numeroAnterior);
	}

	if(numeroAnterior==1)
	{
		console.log("es primo");
	}
	else
	{
		console.log("no es primo");
	}


}