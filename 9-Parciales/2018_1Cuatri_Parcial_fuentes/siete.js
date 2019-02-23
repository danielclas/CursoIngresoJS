function mostrar()
{
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
}
