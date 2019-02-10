/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre; //creo la variable
	nombre=prompt ("Ingrese su nombre"); //indico que el valor = al dato ingresado por prompt
	document.getElementById('elNombre').value=nombre; // muestro el dato tomado en prompt por id




}

