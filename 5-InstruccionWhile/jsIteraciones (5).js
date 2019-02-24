function mostrar()
{

	var sexo; 

	sexo=prompt("ingrese f ó m .");

	while(sexo!="m" && sexo!="f")
	{
		sexo=prompt("Ingrese su sexo");
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN