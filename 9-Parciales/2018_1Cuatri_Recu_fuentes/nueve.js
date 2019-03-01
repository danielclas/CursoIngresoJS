function mostrar()
{
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

}
