/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
	var edad;
	var sexo;
	var estado;
	var sueldo;
	var legajo;
	var nacionalidad;

	edad=prompt("Ingrese la edad");
	edad=parseInt(edad);

	while(edad<18 || edad>90)
	{
		edad=prompt("Ingrese una edad correcta");
		edad=parseInt(edad);
	}

	document.getElementById('Edad').value=edad;

	sexo=prompt("Ingrese el sexo");

	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("Ingrese un sexo valido");
	}

	document.getElementById('Sexo').value=sexo;

	estado=prompt("Ingrese el estado civil. 1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo");
	estado=parseInt(estado);

	while(estado<1 || estado>4)
	{
		estado=prompt("Ingrese un estado valido.  1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo");
		estado=parseInt(estado);

			switch(estado)
			{
				case 1:
					estado="soltero";
						break;
				case 2:
					estado="casado";
						break;
				case 3:
					estado="divorciado";
						break;
				case 4:
					estado="viudo";
						break;

			}
	}
	

	document.getElementById('EstadoCivil').value=estado;

	sueldo=prompt("Ingrese el sueldo bruto");
	sueldo=parseInt(sueldo);

	while(sueldo<8000)
	{
		sueldo=prompt("Ingrese un sueldo bruto valido");
		sueldo=parseInt(sueldo);
	}

	document.getElementById('Sueldo').value=sueldo;

	legajo=prompt("Ingrese el numero de legajo");
	legajo=parseInt(legajo);

	while(legajo<1000 || legajo>9999)
	{
		legajo=prompt("Ingrese un numero de legajo valido");
		legajo=parseInt(legajo);
	}

	document.getElementById('Legajo').value=legajo;

	nacionalidad=prompt("Ingrese la nacionalidad. A para Argentinos, E para extranjeros y N para nacionalizados");

	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{
		nacionalidad=prompt("Ingrese una nacionalidad valida. A para Argentinos, E para extranjeros y N para nacionalizados");
	}

	switch(nacionalidad)
	{
		case "A":
			nacionalidad="argentino";
				break;
		case "E":
			nacionalidad="extranjero";
				break;
		case "N":
			nacionalidad="nacionalizado";
				break;
	}

	document.getElementById('Nacionalidad').value=nacionalidad;


}
