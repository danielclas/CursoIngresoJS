function mostrar()
{
	var hora;
	var mensaje;

	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);

	if(hora>=20 && hora<=24)
	{
		mensaje="Es de noche. A dormir";
	}
	else
	{
		switch(hora)
		{
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				mensaje="Es de noche";
					break;
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
			default:
				mensaje="Hora no valida";
					break;

		}
	}

	alert(mensaje);

}
