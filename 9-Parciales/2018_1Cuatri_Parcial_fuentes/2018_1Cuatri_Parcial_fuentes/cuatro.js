function mostrar()
{
	var numero1;
	var numero2;
	var mensaje;
	var suma;
	var resta;

	numero1=prompt("Ingrese el primer numero");
	numero2=prompt("Ingrese el segundo numero");

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	suma=numero1+numero2;
	resta=numero1-numero2;

	if(numero1==numero2)
	{
		mensaje="Usted ingreso "+numero1+" y "+numero2;
	}
	else
	{
		if(numero1>numero2)
		{
			mensaje="La resta es "+resta;
		}
		else
		{
			if(suma>10)
			{
				mensaje="La suma es "+suma+" y supero al 10";
			}
			else
			{
				mensaje="La suma es "+suma;
			}
		}

	}

	alert(mensaje);






}
