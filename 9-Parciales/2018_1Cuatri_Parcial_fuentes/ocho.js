function mostrar()
{

	var peso;
	var temp;
	var nombre;
	var respuesta;
	var contador;
	var contadorPares;
	var contadorBajoCero;
	var bajoCeroPesoMax;
	var bajoCeroPesoMin;
	var pesoMax;
	var pesoMaxNombre;
	var pesoMaxTemp;
	var acumuladorPeso;
	var promedioPeso;

	//Creo las variables e inicializo contadores

	respuesta="si";
	contador=0;
	contadorPares=0;
	contadorBajoCero=0;
	acumuladorPeso=0;

	//Ingreso solo cuando la respuesta del usuario es "si"

	while(respuesta=="si")
	{
		nombre=prompt("Ingrese el nombre del animal");

		peso=prompt("Ingrese el peso");
		peso=parseInt(peso);

		while(peso<1 || peso>1000)
		{
			peso=prompt("Ingrese un peso valido")
			peso=parseInt(peso);
		}

		//Pido, valido y parseo nombre y peso. Si es valido acumulo para luego sacar promedio

		acumuladorPeso=acumuladorPeso+peso;

		temp=prompt("Ingrese la temperatura");
		temp=parseInt(temp);

		while(temp<-30 || temp>30)
		{
			temp=prompt("Ingrese la temperatura");
			temp=parseInt(temp);
		}

		//Pido y valido temp, y si es valida, cuento cuantas son bajo cero, y calculo min y max peso.

		if(temp<0)
		{
			contadorBajoCero++;

			if(contadorBajoCero==1)
			{
				bajoCeroPesoMax=peso;
				bajoCeroPesoMin=peso;
			}
			else
			{
				if(peso<bajoCeroPesoMin)
				{
					bajoCeroPesoMin=peso;
				}
				else
				{
					if(peso>bajoCeroPesoMax)
					{
						bajoCeroPesoMax=peso;
					}
				}
			}
		}

		//Cuento temperaturas pares

		if(temp%2==0)
		{
			contadorPares++
		}

		//Calculo peso max para obtener nombre y temperatura

		if(contador==0)
		{
			pesoMax=peso;
			pesoMaxTemp=temp;
			pesoMaxNombre=nombre;
		}
		else
		{
			if(peso>pesoMax)
			{
				pesoMax=peso;
				pesoMaxNombre=nombre;
				pesoMaxTemp=temp;
			}
		}

		contador++;
		respuesta=prompt("Ingresar otro animal?");

		//Acumulo un contador, y pregunto al usuario si quiere ingresar otro dato

	}

	promedio=acumuladorPeso/contador;

	document.write("A) Temperaturas pares: "+contadorPares+"<br>"+
		"B) Nombre y temperatura del mas pesado: "+pesoMaxNombre+", "+pesoMaxTemp+"<br>"+
		"C) Cant de animales que viven bajo cero: "+contadorBajoCero+"<br>"+
		"D) Promedio del peso de todos los animales: "+promedio+"<br>"+
		"F) Bajo cero peso Max y Min: "+bajoCeroPesoMax+", "+bajoCeroPesoMin);

}

/*

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


*/