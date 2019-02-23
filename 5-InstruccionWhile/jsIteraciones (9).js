function mostrar()
{

	var contador=0;
	// declarar variables

	var maximo;
	var minimo;

	//maximo=-999;
	//minimo=999;
	
	var respuesta='si';
	var bandera;

	bandera="Es la primera";

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("Ingrese un numero"+contador+"# :");
		numero=parseInt(numero);

		if(bandera=="Es la primera")
		{
			maximo=numero;
			minimo=numero;
			bandera="lalala";
		}		
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}			
		}
		
		
		respuesta=prompt("'si' para continuar");

	}

	document.getElementById('minimo').value=minimo;

	document.getElementById('maximo').value=maximo;



}//FIN DE LA FUNCIÓN