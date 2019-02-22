function mostrar()
{

	var numero;

	numero = prompt("ingrese un número entre 0 y 10.");

	while(numero<0 || numero>10)
	{
		numero=prompt("Ingrese otro numero");
	}

	alert(numero);


}//FIN DE LA FUNCIÓN