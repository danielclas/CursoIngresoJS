function mostrar()
{

	var hora;
	var mensaje;

	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);

	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de mañana";
				break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje="Es de tarde";
				break;

		if(hora>19 && hora<=24)
		{
			mensaje="Es de noche. A dormir";
		}
		else
		{
			if(hora>=1 && hora<6)
			{
				mensaje="Es de noche";
			}
		}

		default:
			mensaje="Ingrese una hora valida";
	}


	alert(mensaje);

}
