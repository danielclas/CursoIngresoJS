function mostrar()
{//SIN RESOLVER
//tomo la edad  
	var edad;

	edad=document.getElementbyId('edad').value;
	edad=parseInt(edad);

	if (edad<13 || edad>17)
	{
		alert("No es adolescente");
	}



	

}//FIN DE LA FUNCIÓN