function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si")
	{	
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;
		respuesta=prompt("Desea ingresar otro numero?");
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN