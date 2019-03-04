function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var contador;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var acumuladorPositivos;
	var contadorPositivos;
	var promedioPositivos;
	var acumuladorNegativos;
	var numMax;
	var numMin;
	var numMinLetra;
	var numMaxLetra;

	respuesta="si";
	contadorPares=0;
	contadorImpares=0;
	contadorCeros=0;
	contadorPositivos=0;
	acumuladorPositivos=0;
	acumuladorNegativos=0;
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
				acumuladorNegativos=acumuladorNegativos+numero;
			}
		}

		if(contador==0)
		{
			numMin=numero;
			numMinLetra=letra;
			numMax=numero;
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
		respuesta=prompt("Ingresar otro dato?");
	}

	promedioPositivos=acumuladorPositivos/contadorPositivos;

	document.write("A) Cant. numeros pares: "+contadorPares+"<br>"+
		"B) Cant. numeros impares: "+contadorImpares+"<br>"+
		"C) Cant. de ceros: "+contadorCeros+"<br>"+
		"D) Promedio de positivos: "+promedioPositivos+"<br>"+
		"E) Suma de negativos: "+acumuladorNegativos+"<br>"+
		"F) Num y letra de max: "+numMax+numMaxLetra+"<br>"+
		"Num y letra de min: "+numMin+numMinLetra);


}

// Parcial practicado en clase

/*

	var velocidadKM;
	var combustible;
	var contador;
	var acumuladorVelocidad;
	var promedio;
	var velocidadMinima;
	var velocidadMinimaCombustible;
	var contadorCombLiquido
	var velocidadMaximaSolido;

	//Creo variables e inicio contadores

	contador=0;
	acumuladorVelocidad=0;
	contadorCombLiquido=0;

	//La consigna pide iterar solo 5 veces
	while(contador<5)
	{
		velocidadKM=prompt("Ingrese la velocidad");
		velocidadKM=parseInt(velocidadKM);

		while(velocidadKM<0 || velocidadKM>250)
		{
			velocidadKM=prompt("Ingrese una velocidad valida");
			velocidadKM=parseInt(velocidadKM);
		}

		acumuladorVelocidad=acumuladorVelocidad+velocidadKM;

		//Pido, parseo, y valido KM, y cuando es correcto acumulo

		combustible=prompt("Ingrese tipo de combustible");

		while(combustible!="s" && combustible!="l")
		{
			combustible=prompt("Ingrese un combustible valido");
		}

		//Pido combustible y valido que sea "s" o "l"

		//Averiguo velocidad minima y velocidad maxima cuando el combustible es "s"
		if(contador==0)
		{
			velocidadMinima=velocidadKM;
			velocidadMinimaCombustible=combustible;

			if(combustible=="s")
			{
				velocidadMaximaSolido=velocidadKM;
			}
		}
		else
		{
			if(velocidadKM<velocidadMinima)
			{
				velocidadMinima=velocidadKM;
				velocidadMinimaCombustible=combustible;
			}
			if(velocidadKM>velocidadMaximaSolido && combustible=="s")
			{
				velocidadMaximaSolido=velocidadKM;
			}
		}

		if(combustible=="l" && velocidadKM>100)
		{
			contadorCombLiquido=contadorCombLiquido+1;
		}

		//La consigna pide averiguar cuantas veces la velovidad es mayor a 100 y el combustible es liquido


		contador=contador+1;
	}

	promedio=acumuladorVelocidad/5;

	//Saco el promedio

	alert("El promedio es: "+promedio+"   2) Velocidad mas baja: "+velocidadMinima+", combustible:   "+velocidadMinimaCombustible+
		"    3) Combustibles liquidos velocidad mayor a 100: "+contadorCombLiquido+
		"    4) Velocidad mas alta de combustible solido: "+velocidadMaximaSolido);



*/