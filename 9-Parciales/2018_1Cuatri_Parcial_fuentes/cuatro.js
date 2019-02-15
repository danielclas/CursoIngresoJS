function mostrar()
{
	var numero1;
	var numero2;
	var resta;
	var suma;

	numero1=prompt("Ingrese un numero");
	numero2=prompt("Ingrese otro numero");
	
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	resta=numero1-numero2;			
	suma=numero1+numero2;

	if(numero1==numero2)
		{
			alert("Usted ingresó "+numero1+" y "+numero2)
		}
	else
	{
		if(numero1>numero2)
		{
			alert("La resta es "+resta)
		}
		else
		{
			if(suma>10)
			{
			alert("La suma es "+suma+" y supero a 10")
			}
			else
			{
				alert("La suma es "+suma)
			}
			
		}


	}

}
