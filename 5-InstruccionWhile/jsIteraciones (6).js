function mostrar()
{
	var acumulador;
	var contador;
	var numero;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		numero=prompt("Ingrese un numero"+contador+"# :");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		

	}
	


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN