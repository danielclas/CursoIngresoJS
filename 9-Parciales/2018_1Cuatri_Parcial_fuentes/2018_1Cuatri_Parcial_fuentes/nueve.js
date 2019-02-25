function mostrar()
{

	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var resto;
	var contador;
	var contadorPares;
	var maximoPeso;
	var minimoPeso;
	var marcaMaximoPeso;
	var contadorMenosCero;
	var acumuladorPeso;
	var pesoPromedio;

	respuesta="si";
	contadorPares=0;
	contador=0;
	contadorMenosCero=0;
	acumuladorPeso=0;


	while(respuesta=="si")
	{
		marca=prompt("Ingrese la marca");
		peso=prompt("Ingrese el peso");
		peso=parseInt(peso);

		while(peso<1 || peso>100)
		{
			peso=prompt("Ingrese un peso valido");
			peso=parseInt(peso);
		}

		acumuladorPeso=acumuladorPeso+peso;

		temperatura=prompt("Ingrese la temperatura");

		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("Ingrese una temperatura valida");
			temperatura=parseInt(temperatura);
		}

		resto=temperatura%2;

		if(resto==0)
		{
			contadorPares=contadorPares+1;
		}

		if(temperatura<0)
		{
			contadorMenosCero=contadorMenosCero+1;
		}

		if(contador==0)
		{
			maximoPeso=peso;
			minimoPeso=peso;
			marcaMaximoPeso=marca;
		}
		else
		{
			if(peso>maximoPeso)
			{
				maximoPeso=peso;
				marcaMaximoPeso=marca;
			}
			if(peso<minimoPeso)
			{
				minimoPeso=peso;
			}
		}

		contador=contador+1;
		respuesta=prompt("Desea ingresar otro producto?");
	}

	pesoPromedio=acumuladorPeso/contador;

	document.write("A) Temperaturas pares:"+contadorPares+"<br>"+
		"B) Marca del producto mas pesado: "+marcaMaximoPeso+"<br>"+
		"C) Cantidad de productos que se conservan a menos de cero grados: "+contadorMenosCero+"<br>"+
		"D) Promedio del peso de los productos: "+pesoPromedio+"<br>"+
		"E) Peso maximo "+maximoPeso+" y minimo "+minimoPeso+"<br>");



}
