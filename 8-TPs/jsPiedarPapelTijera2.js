var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	eleccionMaquina=Math.floor((Math.random()*3)+1);

	 	console.log(eleccionMaquina);



}//FIN DE LA FUNCIÓN
function piedra()
{
	var mensaje;

	switch(eleccionMaquina)
	{
		case 1:
			mensaje="Empate";
				break;
		case 2:
			mensaje="Perdiste";
				break;
		case 3:
			mensaje="Ganaste";
				break;
	}
	if(mensaje=="Perdiste")
		{
			ContadorDePerdidas++;
		}
		else
		{
			if(mensaje=="Ganaste")
			{
				ContadorDeGanadas++;
			}
			else
			{
				ContadorDeEmpates++;
			}
		}
	alert(mensaje);
	

}//FIN DE LA FUNCIÓN
function papel()
{
	var mensaje;

	switch(eleccionMaquina)
	{
		case 1:
			mensaje="Ganaste";
				break;
		case 2:
			mensaje="Empate";
				break;
		case 3:
			mensaje="Perdiste";
				break;
	}
	if(mensaje=="Perdiste")
	{
		ContadorDePerdidas++;
	}
	else
	{
		if(mensaje=="Ganaste")
		{
			ContadorDeGanadas++;
		}
		else
		{
			ContadorDeEmpates++;
		}
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
function tijera()
{
	var mensaje;

	switch(eleccionMaquina)
	{
		case 1:
			mensaje="Perdiste";
				break;
		case 2:
			mensaje="Ganaste";
				break;
		case 3:
			mensaje="Empate"
			 break;
	}
	if(mensaje=="Perdiste")
	{
		ContadorDePerdidas++;
	}
	else
	{
		if(mensaje=="Ganaste")
		{
			ContadorDeGanadas++;
		}
		else
		{
			ContadorDeEmpates++;
		}
	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("ganadas").value = "ganadas: "+ContadorDeGanadas;
	document.getElementById("perdidas").value = "perdidas: "+ContadorDePerdidas;
	document.getElementById("empatadas").value = "empatadas: "+ContadorDeEmpates;
}