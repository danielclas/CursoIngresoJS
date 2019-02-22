function mostrar()
{
	var preciohab;
	var paquete;
	var tipodepago;
	var porcentaje;
	var preciofinal;

	preciohab=prompt("Ingrese precio de habitacion");
	paquete=prompt("Ingrese un paquete");
	tipodepago=prompt("Ingrese tipo de pago");

	preciohab=parseInt(preciohab);

	switch(tipodepago)
	{
		case "visa":
		case "mercadoPago":
			porcentaje=0.90;
				break;
		case "paypal":
		
			switch(paquete)
			{
				case "todoIncluido":
					porcentaje=0.75;
						break;
				default:
					porcentaje=0.85;
						break;
			}
				break;
			
		
		case "efectivo":
			
			switch (paquete)
			{
				case "soloDesayunos":
					porcentaje=0.70;
						break;
				case "todoIncluido":
					porcentaje=0.65;
						break;
				default:
					porcentaje=0.80
						break;
			}
				break;
			}
		
		default:
			porcentaje=0.95;
				break;
				
	}
	
	preciofinal=preciohab*porcentaje;

	alert("El precio es "+preciofinal);



}

/*

var dia;
	var mensaje;

	dia=prompt("Ingrese un dia de la semana");

	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje="A trabajar";
				break;
		case "sabado":
		case "domingo":
			mensaje="Buen finde";
				break;
		default:
			mensaje="El dia ingresado no es valido";
				break;
	}

	alert(mensaje);

	*/