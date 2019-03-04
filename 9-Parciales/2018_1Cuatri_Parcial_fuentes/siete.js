function mostrar()
{
	var nombre;
	var paginas;
	var ventas;
	var temas;
	var respuesta;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var acumuladorVentas;
	var promedioVentas;
	var contador;
	var paginasProgramacion;

	respuesta="si";
	contadorImpares=0;
	contadorPares=0;
	contadorCeros=0;
	acumuladorVentas=0;
	contador=0;
	paginasProgramacion=0;

	while(respuesta=="si")
	{
		nombre=prompt("Ingrese el nombre del libro");
		paginas=prompt("Ingrese la cantidad de paginas");
		paginas=parseInt(paginas);

		while(paginas<0)
		{
			paginas=prompt("Ingrese cantidad correcta de paginas");
			paginas=parseInt(paginas);
		}

		if(paginas%2==0)
		{
			contadorPares++;
		}
		else
		{
			contadorImpares++;
		}

		ventas=prompt("Ingrese cantidad de ventas");
		ventas=parseInt(ventas);

		while(ventas<0)
		{
			ventas=prompt("Ingrese cantidad correcta de ventas");
			ventas=parseInt(ventas);
		}

		acumuladorVentas=acumuladorVentas+ventas;

		if(ventas==0)
		{
			contadorCeros++;
		}

		tema=prompt("Ingrese el tema");

		while(tema!="robotica" && tema!="programacion" && tema!="patrones" && tema!="base de datos")
		{
			tema=prompt("Ingrese un tema valido");
		}

		if(tema=="programacion")
		{
			paginasProgramacion=paginasProgramacion+paginas;
		}

		contador++;
		respuesta=prompt("Ingresar otro dato?");
	}

	promedioVentas=acumuladorVentas/contador;

	document.write("A) Libros con paginas pares: "+contadorPares+"<br>"+
		"B) Libros con paginas impares: "+contadorImpares+"<br>"+
		"C) Cantidad de cero ventas: "+contadorCeros+"<br>"+
		"D) Promedio de ventas: "+promedioVentas+"<br>"+
		"E) Suma de paginas de libros de programacion: "+paginasProgramacion);





}


/*

var contador;
	var sexo;
	var nota;
	var acumulador;
	var promedio;
	var contadorvarones;
	
	contador=0;
	acumulador=0;
	contadorvarones=0;

	while(contador<5)
	{
		sexo=prompt("Ingrese el sexo");
		nota=prompt("Ingrese la nota");
		nota=parseInt(nota);

		contador=contador+1;
		acumulador=acumulador+nota;

		
		if(sexo=="m" && nota>5)
		{
			contadorvarones=contadorvarones+1;
		}


		if(contador==5)
		{
			break;
		}

	}

	
	promedio=acumulador/5;
	alert("Nota mas baja: "+minima+"El promedio es "+promedio+"Varones nota mayor o igual a 6: "+contadorvarones);


*/