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
	var lamparitas;
	var precio;
	var descuento;
	var marca;
	var precioDescuento;
	var importeFinal;
	var ingBruto;



	precio=35;
	lamparitas=document.getElementById('Cantidad').value;
	lamparitas=parseInt(lamparitas);
	marca=document.getElementById('Marca').value;

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
			if(lamparitas==4)
			{
				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
				{
					descuento=0.25
				}
				else
				{
					descuento=0.20;
				}
			}
			else
			{
				if(lamparitas==3)
				{
					switch(marca)
					{
						case "ArgentinaLuz":
							descuento=0.15;
								break;
						case "FelipeLamparas":
							descuento=0.10;
								break;
						default:
							descuento=0.5;
					}
				}
				
			}	
		}
	}	

	precioDescuento=precio-(precio*descuento);
	importeFinal=lamparitas*precioDescuento;

		if(importeFinal>120)
		{
			ingBruto=importeFinal*0.10;
			importeFinal=importeFinal+ingBruto;
			alert("Usted pago: "+importeFinal+" siendo "+ingBruto+" el impuesto que se pago");
		}

	document.getElementById('precioDescuento').value=importeFinal;

}











 	
//}











/*

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


	if(lamparitas>=6)
	{
		descuento=precio*50/100;
	}
	else
	{
		if(marca=="ArgentinaLuz" && lamparitas==5)
		{
			descuento=precio*40/100;
		}
		else
		{	
			if(marca!="ArgentinaLuz" && lamparitas==5)
			{
				descuento=precio*30/100;
			}
			else
			{
				if((marca=="ArgentinaLuz" || marca=="FelipeLamparas" )&& lamparitas==4)
				{
					descuento=precio*25/100;
				}
				else
				{
					if((marca!="ArgentinaLuz" || marca!="FelipeLamparas" )&& lamparitas==4)
					{
						descuento=precio*20/100;
					}
					else
					{
						if(marca=="ArgentinaLuz" && lamparitas==3)
						{
							descuento=precio*15/100;
						}
						else
						{
							if(marca=="FelipeLamparas" && lamparitas==3)
							{
								descuento=precio*10/100;
							}
							else
							{
								descuento=precio*5/100;
							}
						}
					}
				}

			}

		}
	}

	condescuento=precio-descuento;
	preciofinal=condescuento*lamparitas;

	impuesto=preciofinal*10/100;
	conimpuesto=preciofinal+impuesto;

	if(preciofinal>120)
	{
		alert("Usted pago $"+conimpuesto+", siendo $"+impuesto+" el impuesto que se pago");
    }
    else
    {
    	document.getElementById('precioDescuento').value=preciofinal;

    }

*/