function mostrar()
{

	var letra;
	var numero;
	var contador;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var acumuladorPositivos;
	var contadorPositivos;
	var promedioPositivos;
	var sumaNegativos;
	var numMax;
	var numMin;
	var numMaxLetra;
	var numMinLetra;
	var respuesta;

	respuesta="si";

	contadorPares=0;
	contadorImpares=0;
	contadorCeros=0;
	contadorPositivos=0;
	acumuladorPositivos=0;
	sumaNegativos=0;
	contador=0;

	while(respuesta=="si")
	{
		letra=prompt("Ingrese una letra");

		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		while(numero<-100 || numero>100)
		{
			numero=prompt("Ingrese un numero valido");
			numero=parseInt(numero);
		}

		if(numero%2==0)
		{
			contadorPares++;
		}
		else
		{
			contadorImpares++;
		}

		if(numero==0)
		{
			contadorCeros++;
		}
		else
		{ 
			if(numero>0)
			{
				acumuladorPositivos=acumuladorPositivos+numero;
				contadorPositivos++;
			}
			else
			{
				if(numero<0)
				{
					sumaNegativos=sumaNegativos+numero;
				}	
			}
		}

		if(contador==0)
		{
			numMin=numero;
			numMax=numero;
			numMinLetra=letra;
			numMaxLetra=letra;
		}
		else
		{
			if(numero<numMin)
			{
				numMin=numero;
				numMinLetra=letra;
			}
			else
			{
				if(numero>numMax)
				{
					numMax=numero;
					numMaxLetra=letra;
				}
			}
		}

	contador++;
	respuesta=prompt("Desea ingresar otro dato?");

	}

	promedioPositivos=acumuladorPositivos/contadorPositivos;


	document.write("Cantidad de pares: "+contadorPares+"<br>"+
		"Cantidad de impares: "+contadorImpares+"<br>"+
		"Cantidad de ceros: "+contadorCeros+"<br>"+
		"Promedo de positivos: "+promedioPositivos+"<br>"+
		"Suma de negativos: "+sumaNegativos+"<br>"+
		"Numero y letra del minimo: "+numMin+numMinLetra+"<br>"+
		"Numero y letra del maximo: "+numMax+numMaxLetra+"<br>");

}
