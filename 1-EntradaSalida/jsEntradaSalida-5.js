/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre //creo ambas variables
	var edad

	nombre=elNombre.value; //indico que los valores de las variables = datos ingresados por id
	edad=laEdad.value;

	alert("Usted se llama "+nombre+ " y tiene "+edad+" años "); //muestro los datos concatenados

	
}

