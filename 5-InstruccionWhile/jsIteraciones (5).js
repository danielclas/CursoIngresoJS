function mostrar()
{

	var sexo; 

	sexo = prompt("ingrese f ó m .");

	while(sexo!="m" && sexo!="f")
	{
		sexo=prompt("Sexo incorrecto");
	}



	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN