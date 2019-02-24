function mostrar()
{

	var contador;
	var respuesta;
	var numero;
	var maximo;
	var minimo;

	respuesta="si";
	maximo=0;
	minimo=0;
	contador=0;

	while(respuesta=="si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(contador==0)
		{
			minimo=numero;
			maximo=numero;
		}
		else
		{
			if(numero<minimo)
			{
				minimo=numero;
			}
			if(numero>maximo)
			{
				maximo=numero;
			}
		}

		respuesta=prompt("Desea ingresar otro numero?");
		contador=contador+1;
	
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN