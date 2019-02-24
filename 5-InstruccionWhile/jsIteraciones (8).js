function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;
	var numero;

	contador=0;
	positivo=0;
	negativo=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(numero>0)
		{
			positivo=positivo+numero;
		}
		else
		{
			negativo=negativo*numero;
		}

		negativo=negativo;//esta linea es para que no muestre "NaN" en caso de no ingresar valores negativos
		respuesta=prompt("Desea ingresar otro numero?");
	}



	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN