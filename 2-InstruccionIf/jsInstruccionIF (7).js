function mostrar()
{
//tomo la edad  
	var años;
	var estado;

	años=edad.value;
	años=parseInt(años);

	estado=estadoCivil.value;
	

	if(años<18 && estado=="Soltero")
	{
		alert("Es muy pequeño para no ser soltero");
	}
	


}//FIN DE LA FUNCIÓN