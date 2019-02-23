function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var Suma;
	var Producto;
	
	var respuesta='si';

	while(1)
	{
		contador=contador+1;
		numero=prompt("Ingrese un numero"+contador+"# :");
		numero=parseInt(numero);
		//acumulador=acumulador+numero;
	
		if(numero>0)
		{
			positivo=numero+positivo;
		}
		else
		{
			negativo=negativo*numero;
		}

		respuesta=prompt("'si' para continuar");

		if(respuesta!="si")
		{
			break;
		}


	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN