function mostrar()
{
	var valor1;
	var valor2;
	var valor3;
	var valor4;
	var valorfinal;
	var suma;
	//var descuento;
	//var aumento;
	//var condescuento;
	//var conaumento;
	var mensaje;
	var masalto;
	var porcentaje;

	valor1=prompt("Ingrese el primer numero");
	valor2=prompt("Ingrese el segundo numero");
	valor3=prompt("Ingrese el tercer numero");
	valor4=prompt("Ingrese el cuarto numero");

	valor1=parseInt(valor1);
	valor2=parseInt(valor2);
	valor3=parseInt(valor3);
	valor4=parseInt(valor4);

	suma=valor1+valor2+valor3+valor4;

	if(valor1>valor2 && valor1>valor3 && valor1>valor4)
	{
		masalto=valor1;
	}
	else
	{
		if(valor2>valor3 && valor2>valor4)
		{
			masalto=valor2;
		}
		else
		{
			if(valor3>valor4)
			{
				masalto=valor3;
			}
			else
			{
				masalto=valor4;
			}
		}
	}


	if(suma>100)
	{
		porcentaje=0.90;
		//descuento=suma*10/100;
		//condescuento=suma-descuento;
		//mensaje="Precio final: "+condescuento;
	}
	else
	{
		if(suma>50 && suma<101)
		{
			porcentaje=0.95;
			//descuento=suma*5/100;
			//condescuento=suma-descuento;
			//mensaje="Precio final: "+condescuento;
		}
		else
		{
			porcentaje=1.15;
			//aumento=suma*15/100;
			//conaumento=suma+aumento;
			//mensaje="Precio final: "+conaumento;
		}
	}

	//condescuento=suma-(suma*descuento);
	//conaumento=suma+(suma*aumento);

	valorfinal=suma*porcentaje;

	//condescuento=suma-descuento;
	//conaumento=suma+aumento;

	alert("El importe mas alto es "+masalto+". Valor final: "+valorfinal);

	





}

/*
	var amigos;
	var cuenta;
	var propina;
	var iva;
	var coniva;
	var total;
	var cadauno;

	amigos=prompt("Cantidad de amigos:");
	cuenta=prompt("La cuenta es de:");

	amigos=parseInt(amigos);
	cuenta=parseInt(cuenta);

	propina=cuenta*10/100;

	iva=cuenta*21/100;

	coniva=cuenta+iva;

	total=coniva+propina;

	cadauno=total/amigos;

	alert("El total incluyendo propina e iva es: $"+total+". Divido "+amigos+" amigos, cada uno debera pagar $"+cadauno);

	*/