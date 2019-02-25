function mostrar()
{

	var letra;
	var numero;
	var respuesta;
	var contadorpares;
	var resto;
	var contadorimpares;
	var contadorceros;
	var contadorpositivos;
	var acumuladorpositivos;
	var acumuladorNegativos;
	var promedioPositivos;
	var contador;
	var maximo;
	var letramaximo;
	var minimo;
	var letraminimo;

	respuesta="si";
	contadorpares=0;
	contadorimpares=0;
	contadorceros=0;
	contadorpositivos=0;
	acumuladorpositivos=0;
	acumuladorNegativos=0;
	contador=0;

	while(respuesta=="si")
	{
		letra=prompt("Ingrese una letra");
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		while(numero<-100 || numero>100 )
		{
			numero=prompt("Ingrese otro numero");
			numero=parseInt(numero);
		}

		resto=numero%2;

		if(resto==0)
		{
			contadorpares=contadorpares+1;
		}
		else
		{
			contadorimpares=contadorimpares+1;
		}

		if(numero>0)
		{
			acumuladorpositivos=acumuladorpositivos+numero;
			contadorpositivos=contadorpositivos+1;
		}
		else
		{
			if(numero<0)
			{
				acumuladorNegativos=acumuladorNegativos+numero;
			}
			else
			{	
				contadorceros=contadorceros+1;
			}
		}

		if(contador==0)
		{
			minimo=numero;
			letraminimo=letra;
			maximo=numero;
			letramaximo=letra;
		}
		else
		{
			if(numero<minimo)
			{
				minimo=numero;
				letraminimo=letra;
			}
			else
			{
				if(numero>maximo)
				{
					maximo=numero;
					letramaximo=letra;
				}
			}
		}

		contador=contador+1;

		respuesta=prompt("Desea ingresar otro dato?");
	}

	promedioPositivos=acumuladorpositivos/contadorpositivos;


	document.write("A) Numeros pares: "+contadorpares+"<br>"+
		"B) Numeros impares: "+contadorimpares+"<br>"+
		"C) Cantidad de ceros: "+contadorceros+"<br>"+
		"D) Promedio de positivos: "+promedioPositivos+"<br>"+
		"E) Suma de negativos: "+acumuladorNegativos+"<br>"+
		"F) Nro. y letra maximo: "+maximo+letramaximo+" y minimo: "+minimo+letraminimo);



}
