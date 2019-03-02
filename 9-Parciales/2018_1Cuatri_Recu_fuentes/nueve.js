function mostrar()
{
	
	var marca;
	var litros;
	var precio;
	var respuesta;
	var contadorPreciosPares;
	var menorPrecio;
	var menorPrecioMarca;
	var menorPrecioLitros;
	var contador;
	var contadorGaseosasMenos50;
	var acumuladorPrecio;
	var menosDe3PrecioMin;
	var menosde3PrecioMax;
	var menosde3PrecioMaxMarca;
	var menosDe3PrecioMinMarca;
	var menosde3Contador;

	//Creo variables e inicializo contadores

	respuesta="si";
	contador=0;
	contadorPreciosPares=0;
	contadorGaseosasMenos50=0;
	acumuladorPrecio=0;
	menosde3Contador=0;

	//Va a iterar solo hasta que el usuario no ingrese "si" como respuesta

	while(respuesta=="si")
	{
		marca=prompt("Ingrese la marca");

		litros=prompt("Ingrese la cantidad de litros");
		litros=parseInt(litros);

		while(litros!=1 && litros!=2 && litros!=3)
		{
			litros=prompt("Ingrese valor de litros valido");
			litros=parseInt(litros);
		}

		//Pido, parseo y valido Marca y Litros

		precio=prompt("Ingrese el precio");
		precio=parseInt(precio);

		while(precio<30 || precio>100)
		{
			precio=prompt("Ingrese un precio valido");
			precio=parseInt(precio);
		}

		acumuladorPrecio=acumuladorPrecio+precio;

		//Pido y parseo precio. Si es correcto lo acumulo para despues sacar promedio

		if(precio%2==0)
		{
			contadorPreciosPares++;
		}

		//Si el precio dividido dos da resto 0, entonces es par.

		if(contador==0)
		{
			menorPrecio=precio;
			menorPrecioMarca=marca;
			menorPrecioLitros=litros;
		}
		//Si es la primera vez iterando, tomo precio menor y marca y litros
		else
		//Si no lo es, entonces comparo 
		{
			if(precio<menorPrecio)
			{
				menorPrecio=precio;
				menorPrecioMarca=marca;
				menorPrecioLitros=litros;
			}
		}

		//Si el precio es menor a 50, aumento este contador en 1
		if(precio<50)
		{
			contadorGaseosasMenos50++;
		}

		//Comparo precio MIN y MAX de gaseosas menores a 3 litros
		if(litros<3)
		{
			if(menosde3Contador==0)
			{  
				menosDe3PrecioMin=precio;
				menosde3PrecioMax=precio;
				menosde3PrecioMaxMarca=marca;
				menosDe3PrecioMinMarca=marca;
				menosde3Contador++;
				//Este contador es para que solo ingrese la primera vez que una gaseosa es menor a tres l
			}

			if(precio<menosDe3PrecioMin)
			{
				menosDe3PrecioMin=precio;
				menosDe3PrecioMinMarca=marca;
			}
			else
			{   
				if(precio>menosde3PrecioMax)
				{
					menosde3PrecioMax=precio;
					menosde3PrecioMaxMarca=marca;
				}
			}
		}


		contador++;
		respuesta=prompt("Ingrese si para ingresar otro dato");
		//Aumento el contador de las iteraciones en 1 y pregunto a usuario la respuesta.
	}

	promedio=acumuladorPrecio/contador;

	document.write("1) Cant. Precio Pares: "+contadorPreciosPares+"<br>"+
		"2) Marca del mas barato: "+menorPrecioMarca+" litros: "+menorPrecioLitros+"<br>"+
		"3) Cant. de gaseosas que valen menos de 50: "+contadorGaseosasMenos50+"<br>"+
		"4) Promedio del precio de todas las gasesosas: "+promedio+"<br>"+
		"5) Menores a 3L, precio maximo: "+menosde3PrecioMax+", marca: "+menosde3PrecioMaxMarca+"<br>"+
		"precio minimo: "+menosDe3PrecioMin+" marca: "+menosDe3PrecioMinMarca);

}

/* EJERCICIO EN CLASE

var marca;
	var tamaño;
	var precio;
	var mayorPrecio;
	var mayorPrecioMarca;
	var mayorPrecioTamaño;
	var menorPrecio;
	var menorPrecioMarca;
	var menorPrecioTamaño;
	var contador;
	var respuesta;
	var acumulador;
	var promedio;
	var contadorMas2000;
	var celular1000;
	var contador1000;
	var precioUltimoLG;

	respuesta="si"
	contador=0;
	acumulador=0;
	contadorMas2000=0;
	contador1000=0;


	while(respuesta=="si")
	{
		marca=prompt("Ingrese marca");

		tamaño=prompt("Ingrese el tamaño");
		tamaño=parseInt(tamaño);

		while(tamaño<0 || tamaño>10)
		{
			tamaño=prompt("Ingrese un tamaño valido");
			tamaño=parseInt(tamaño);
		}

		precio=prompt("Ingrese el precio");
		precio=parseInt(precio);

		while(precio<0 || precio>100000)
		{
			precio=("Ingrese un precio valido");
			precio=parseInt(precio);
		}

		acumulador=acumulador+precio;

		if(precio>2000)
		{
			contadorMas2000=contadorMas2000+1;
		}

		if(contador==0)
		{
			mayorPrecio=precio;
			mayorPrecioMarca=marca;
			mayorPrecioTamaño=tamaño;

			menorPrecio=precio;
			menorPrecioMarca=marca;
			menorPrecioTamaño=tamaño;
		}
		else
		{
			if(precio>mayorPrecio)
			{
				mayorPrecio=precio;
				mayorPrecioMarca=marca;
				mayorPrecioTamaño=tamaño;
			}
			if(precio<menorPrecio)
			{
				menorPrecio=precio;
				menorPrecioMarca=marca;
				menorPrecioTamaño=tamaño;
			}
		}

		if(contador1000==0 && precio==1000)
		{
			celular1000=marca;
			contador1000=celular1000+1;
		}

		if(marca=="lg")
		{
			precioUltimoLG=precio;
		}

		contador=contador+1;
		respuesta=prompt("Ingresar otro dato?");

	}


	promedio=acumulador/contador;

	document.write("1) El mayor precio es "+mayorPrecio+"<br>"+
		"2) Promedio: "+promedio+"<br>"+
		"3) Cantidad de celus que valen +2000: "+contadorMas2000+"<br>"+
		"4) Marca, precio y tamaño del mas caro "+mayorPrecio+", marca: "+mayorPrecioMarca+", tamaño: "+mayorPrecioTamaño+"<br>"+
		"5) Marca, precio y tamaño del mas barato "+menorPrecio+", marca:"+menorPrecioMarca+", tamaño: "+menorPrecioTamaño+"<br>"+
		"6) Marca del primer celular que vale $1000: "+celular1000+"<br>"+
		"7) Precio del ultimo celular LG ingresado: "+precioUltimoLG);



*/