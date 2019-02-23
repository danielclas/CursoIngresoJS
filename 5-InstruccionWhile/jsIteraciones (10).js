function mostrar()
{

	var contador; 
	var acumulador;
	var numero;	
	var respuesta;
	var suma;
	var resta;
	var sumapositivos;
	var sumanegativos;
	var contadornegativos;
	var contadorpositivos;
	var contadorceros;
	var contadorpares;
	var promediopositivos;
	var promedionegativos;
	var diferencia;

	contador=0;
	acumulador=0;
	contadornegativos=0;
	contadorpositivos=0;
	contadorceros=0;
	respuesta="si";
	contadorpares=0;

	sumanegativos=0;
	sumapositivos=0;

	while(respuesta=="si")
	{
	
		contador=contador+1;
		numero=prompt("Ingrese un numero"+contador+"# :");
		numero=parseInt(numero);
		//acumulador=acumulador+numero;
		
		respuesta=prompt("'si' para continuar");

		if(numero>0)
		{
			contadorpositivos=contadorpositivos+1;
			sumapositivos=sumapositivos+numero;

		}
		else
		{
			if(numero<0)
			{
				contadornegativos=contadornegativos+1;
				sumanegativos=sumanegativos+numero;
			}
			else
			{	
				contadorceros=contadorceros+1;
			}
		}

		if(numero%2==0 && numero!=0)
		{

			contadorpares=contadorpares+1;
		}

	}

	promediopositivos=sumapositivos/contadorpositivos;
	promedionegativos=sumanegativos/contadornegativos;
	diferencia=sumapositivos+sumanegativos;


	document.write(contadorpositivos+" numeros positivos y "
		+contadornegativos+" numeros negativos. Suma negativos: "
		+sumanegativos+" Suma positivos: "+sumapositivos+
		"Cantidad de pares: "+contadorpares+
		" Promedio negativos: "+promedionegativos+
		" Promedio positivos: "+promediopositivos+
		"La diferencia es: "+diferencia+
		"Cantidad de ceros: "+contadorceros);


}//FIN DE LA FUNCIÓN