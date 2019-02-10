/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo; //defino las variables
	var divisor;
	var resto;

	dividendo=numeroDividendo.value; //tomo datos por id
	divisor=numeroDivisor.value;

	dividendo=parseInt(dividendo); //paso datos tomados por id a entero
	divisor=parseInt(divisor);

	resto=dividendo%divisor; //indico que la var resto =modulo entre dividendo y divisor

	alert("El resto es "+resto);//muestro resultado por id





}
