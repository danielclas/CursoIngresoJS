function mostrar()
{
	var pais;
	var superficie;
	var respuesta;
	var contador;
	var contadorSupImpar;
	var contadorSupMenora100;
	var contadorSupIguala100;
	var contadorSupMayora100;
	var paisSupMayora100;
	var acumuladorKM;
	var paisSupMenor;
	var superficiePaisSupMenor;
	var promedio;

	//Creo variables e inicializo contadores

	respuesta="si";
	contador=0;
	contadorSupImpar=0;
	contadorSupMenora100=0;
	contadorSupIguala100=0;
	contadorSupMayora100=0;
	acumuladorKM=0;

	//Ingreso solo cuando la respuesta es "si"

	while(respuesta=="si")
	{
		pais=prompt("Ingrese el nombre del pais");
		superficie=prompt("Ingrese la superficie");
		superficie=parseInt(superficie);

		//Pido, valido y parseo pais y superficie

		while(superficie<0 || superficie>10000)
		{
			superficie=prompt("Ingrese una superficie valida, menor a 10000km");
			superficie=parseInt(superficie);
		}


		acumuladorKM=acumuladorKM+superficie;
		//Si superficie es valida, acumulo


		if(superficie%2!=0)
		{
			contadorSupImpar=contadorSupImpar+1;
		}

		//Si la superficie dividido dos NO da resto 0, entonces es impar

		if(superficie<100)
		{
			contadorSupMenora100=contadorSupMenora100+1;
		}
		//Cuento las veces que una superficie es menor que 100 y otra cuando es igual
		else
		{
			if(superficie==100)
			{
				contadorSupIguala100=contadorSupIguala100+1;
			}
			if(superficie>100 && contadorSupMayora100==0)
			{
				contadorSupMayora100=contadorSupMayora100+1;
				paisSupMayora100=pais;
			}
			//El ejercicio solo pide el nombre del primer pais superficie mayor a 100
		}


		//Comparo superficie para hallar la supercicie menor y el nombre del pais
		if(contador==0)
		{
			paisSupMenor=pais;
			superficiePaisSupMenor=superficie;
		}
		else
		{
			if(superficie<superficiePaisSupMenor)
			{
				superficiePaisSupMenor=superficie;
				paisSupMenor=pais;
			}
		}

		contador=contador+1;
		respuesta=prompt("Escriba si para ingresar otro dato");
		//Acumulo 1 en el contador y pregunto al usuario si quiere ingresar otro dato
	}

	promedio=acumuladorKM/contador;

	document.write("Paises con sup impar: "+contadorSupImpar+"<br>"+
		"2) Paises con superficie menor a 100: "+contadorSupMenora100+"<br>"+
		"3) Paises superficie igual a 100: "+contadorSupIguala100+"<br>"+
		"4) Primer pais con sup mayor a 100: "+paisSupMayora100+"<br>"+
		"5) Promedio de km: "+promedio+"<br>"+
		"6) Pais con menor territori: "+paisSupMenor);

	



}
