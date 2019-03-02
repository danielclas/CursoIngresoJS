function mostrar()
{
	var marca;
	var peso;
	var temp;
	var respuesta;
	var contadorPares;
	var pesoMax;
	var pesoMaxMarca;
	var pesoMin;
	var contador;
	var contadorBajoCero;
	var acumuladorPeso;
	var promedioPeso;

	respuesta="si";
	contador=0;
	contadorPares=0;
	contadorBajoCero=0;
	acumuladorPeso=0;

	while(respuesta=="si")
	{
		marca=prompt("Ingrese la marca");

		peso=prompt("Ingrese el peso");
		peso=parseInt(peso);

		while(peso<1 || peso>100)
		{    
			peso=prompt("Ingrese el peso");
			peso=parseInt(peso);
		}

		acumuladorPeso=acumuladorPeso+peso;

		temp=prompt("Ingrese la temperatura");
		temp=parseInt(temp);

		while(temp<-30 || temp>30)
		{
			temp=prompt("Ingrese la temperatura");
			temp=parseInt(temp);
		}

		if(temp%2==0)
		{
			contadorPares++;
		}

		if(contador==0)
		{
			pesoMin=peso;
			pesoMax=peso;
			pesoMaxMarca=marca;
		}
		else
		{
			if(peso<pesoMin)
			{
				pesoMin=peso;
			}
			else(peso>pesoMax)
			{
				pesoMax=peso;
				pesoMaxMarca=marca;				
			}
		}

		if(temp<0)
		{
			contadorBajoCero++;
		}

		contador++;
		respuesta=prompt("Ingrese si para ingresar otro dato");

	}

	promedioPeso=acumuladorPeso/contador;

	document.write("Cantidad de temp pares: "+contadorPares+"<br>"+
		"Marca del producto mas pesado: "+pesoMaxMarca+"<br>"+
		"Productos que se conservan a menos de 0 grados: "+contadorBajoCero+"<br>"+
		"Promedio del peso de todos los productos: "+promedioPeso+"<br>"+
		"Peso min y max: "+pesoMin+", "+pesoMax);












}
