function mostrar()
{

	var contador;
	var respuesta;
	var numero;
	var respuesta;
	var positivos;
	var negativos;
	var contadorpositivos;
	var contadornegativos;
	var contadorceros;
	var promediopositivos;
	var promedionegativos;
	var diferencia;
	var contadorpares;
	var resto;

	respuesta="si";
	positivos=0;
	negativos=0;
	contadorpositivos=0;
	contadornegativos=0;
	contadorceros=0;
	contadorpares=0;

	while(respuesta=="si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(numero>0)
		{
			positivos=positivos+numero;
			contadorpositivos=contadorpositivos+1;
		}
		else
		{
			if(numero<0)
			{
				negativos=negativos+numero;
				contadornegativos=contadornegativos+1;
			}
			else
			{
				contadorceros=contadorceros+1;
			}
		}

		resto=numero%2;

		if(resto==0)
		{
			contadorpares=contadorpares+1;
		}
	

		respuesta=prompt("Escriba si para ingresar otro numero");
	}

	promediopositivos=positivos/contadorpositivos;
	promedionegativos=negativos/contadornegativos;
	diferencia=positivos+negativos;

	document.write(
		"Suma de positivos: "+positivos+"<br>"+
		"Suma de negativos: "+negativos+"<br>"+
		"Cantidad de positivos: "+contadorpositivos+"<br>"+
		"Contador negativos: "+contadornegativos+"<br>"+
		"Cantidad de ceros:"+contadorceros+"<br>"+
		"Cantidad de pares: "+contadorpares+"<br>"+
		"Promedio positivos: "+promediopositivos+"<br>"+
		"Promedio negativos:"+promedionegativos+"<br>"+
		"Diferencia: "+diferencia+"<br>");


}//FIN DE LA FUNCIÓN