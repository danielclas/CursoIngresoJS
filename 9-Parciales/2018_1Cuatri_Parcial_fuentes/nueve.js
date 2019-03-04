function mostrar()
{
	
	var nota;
	var edad;
	var sexo;
	var contador;
	var acumuladorNotas;
	var promedio;
	var notaMin;
	var notaMinSexo;
	var contadorMas18;
	var edadMin;
	var edadMinNota;
	var edadMinSexo;
	var primerMujerEdad;
	var primerMujerNota;
	var mensaje;

	contador=0;
	acumuladorNotas=0;
	contadorMas18=0;
	bandera=true;

	while(contador<5)
	{
		nota=prompt("Ingrese la nota");
		nota=parseInt(nota);

		while(nota<1 || nota>10)
		{
			nota=prompt("Ingrese una nota valida");
			nota=parseInt(nota);
		}

		acumuladorNotas=acumuladorNotas+nota;

		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);

		while(edad<0)
		{
			edad=prompt("Ingrese una edad valida");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese el sexo");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Ingrese un sexo valido");
		}

		if(contador==0)
		{
			notaMin=nota;
			notaMinSexo=sexo;

			edadMin=edad;
			edadMinSexo=sexo;
			edadMinNota=nota;
		}
		else
		{
			if(nota<notaMin)
			{
				notaMin=nota;
				notaMinSexo=sexo;
			}
			if(edad<edadMin)
			{
				edadMin=edad;
				edadMinSexo=sexo;
				edadMinNota=nota;
			}
		}

		if(edad>18 && sexo=="m" && nota>=6)
		{
			contadorMas18++;
		}

		if(sexo=="f" && bandera==true)
		{
			primerMujerNota=nota;
			primerMujerEdad=edad;
			mensaje="Primer mujer, edad: "+primerMujerEdad+", nota: "+primerMujerNota;
			bandera=false;
		}

		contador++;

	}

	promedio=acumuladorNotas/contador;

	if(bandera==true)
	{
		mensaje="No se ingresaron mujeres";
	}

	alert("A) Promedio total de las nota: "+promedio+" || "+
		"B) Nota mas baja y sexo: "+notaMin+notaMinSexo+" || "+
		"C) Varones +18 nota mayor o igual a 6: "+contadorMas18+" || "+
		"D) Sexo y nota del mas joven: "+edadMinNota+edadMinSexo+" || "+
		"E) "+mensaje);






}


/*
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





*/