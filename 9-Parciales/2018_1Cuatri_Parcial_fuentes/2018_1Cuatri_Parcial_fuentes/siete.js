function mostrar()
{
	var nota;
	var contador;
	var sexo;
	var acumulador;
	var promedio;
	var contadorvarones;
	var minima;
	var minimasexo;

	contador=0;
	acumulador=0;
	contadorvarones=0;

	while(contador<5)
	{
		nota=prompt("Por favor ingrese una nota ");
		nota=parseInt(nota);

		while(nota<0 || nota>10)
		{
			nota=prompt("Ingrese una nota valida");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese el sexo");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Ingrese un sexo valido");
		}
		
		acumulador=acumulador+nota;
		
		if(sexo=="m" && nota>=6)
		{
			contadorvarones=contadorvarones+1;
		}

		if(contador==0)
		{
			minima=nota;
			minimasexo=sexo;
		}
		else
		{
			if(nota<minima)
			{
				minima=nota;
				minimasexo=sexo;
			}
		}


		contador=contador+1;
	} 

	promedio=acumulador/5;

	alert("El promedio es "+promedio+". La nota mas baja es "+minima+", sexo "+minimasexo+". Varones con nota iguales o mayores a 6: "+contadorvarones);


}
