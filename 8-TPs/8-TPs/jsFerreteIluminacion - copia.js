/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var precio;
	var lamparitas;
	var marca;
	var descuento;
	var condescuento;
	var preciofinal;
	var impuesto;
	var conimpuesto;

	precio=35;

	lamparitas=document.getElementById('Cantidad').value;
	lamparitas=parseInt(lamparitas);

	marca=document.getElementById('Marca').value;

	descuento=0;

	switch(cantidad)
	{
		case 5:
			if(marca=="ArgentinaLuz")
			{
				descuento=0.40;
			}
			else
			{
				descuento=0.30;
			}
				break;
		case 4:
				if(marca=="ArgentinaLuz" || marca=="“FelipeLamparas”")
				{
					descuento=0.25;
				}
				else
				{
					descuento=0.20;
				}
				break;
		case 3:
				if(marca=="ArgentinaLuz")
				{
					descuento=0.15;
				}
				else
				{
					if(marca=="“FelipeLamparas”")
					{
						descuento=0.10
					}	
					else
					{
						descuento=0.05;
					}
					break;
		default:
				if(lamparitas>=6)
				{
					descuento=0.50;
				}

	}

	/*
	if(lamparitas>=6)
	{
		descuento=0.50;
	}
	else
	{
		if(lamparitas==5)
		{
			if(marca=="ArgentinaLuz")
			{
				descuento=0.40;
			}
			else
			{
				descuento=0.30;
			}

		}
		else
		{
			if(cantidad==4)
			{
				if(marca=="ArgentinaLuz" || marca=="“FelipeLamparas”")
				{
					descuento=0.25;
				}
				else
				{
					descuento=0.20;
				}

			}
			else
			{
				if(cantidad==3)
				{
					if(marca=="ArgentinaLuz")
					{
						descuento=0.15;
					}
					else
					{
						if(marca=="“FelipeLamparas”")
						{
							descuento=0.10
						}	
						else
						{
							descuento=0.05;
						}
					}
				}
		   	}
		 }
	}
	*/


	condescuento=precio-(precio*descuento);
	preciofinal=condescuento*cantidad;

	impuesto=preciofinal*0.10;
	conimpuesto=preciofinal+impuesto;

	if(preciofinal>120)
	{
		alert("Usted pago $"+conimpuesto+", siendo $"+impuesto+" el impuesto que se pago");
    }
    else
    {
    	document.getElementById('precioDescuento').value=preciofinal;

    }

 	
}