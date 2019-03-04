function mostrar()
/*

6-(1pt.) (SWITCH + IF) Se ingresa una nota. Si está entre las 0 y las 3 mostrar: 
"la próxima se puede", si es desde las 4 a las 6: "raspando", de lo contrario informar que aprobó. 
Informar si la nota no es válida. Si es
aprobó y la nota es mayor a 8 se debe agregar el mensaje: "muy bien".
 Si es nota para “raspando” y la nota es menor a 5 se debe agregar el mensaje: "debes preocuparte más".
*/

{
	var nota;
	var mensaje;

	nota=document.getElementById('laHora').value;
	nota=parseInt(nota);

	switch(nota)
	{
		case 1:
		case 2:
		case 3:
			mensaje="La proxima se puede";
				break;
		case 4:
		case 5:
		case 6:
			mensaje="Raspando";

			if(nota==4 || nota==5)
			{
				mensaje="Raspando, debes preocuparte mas";
			}
			break;

		case 7:
		case 8:
		case 9:
		case 10:
			mensaje="Aprobo";

			if(nota>8 && nota<=10)
			{
				mensaje="Aprobo, Muy bien";
			}
			break;

		default:
			mensaje="La nota no es valida";

	}

	alert(mensaje);

}

/*


	var hora;
	var mensaje;

	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);

	
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

			if(hora>=20 && hora<=24)
			{
				mensaje="Es de noche. A dormir";
			}

		}
	

	alert(mensaje);

*/