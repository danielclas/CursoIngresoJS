/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{	
	var largo;
	var ancho;
	var perimetro;	
	var alambre;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=2*largo+2*ancho;
	alambre=perimetro*3;

	alert("Se necesitan "+alambre+" hilos de alambre");

}
function Circulo () 
{
	var radio;
	var perimetro;
	var alambre;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	perimetro=2*3.14*radio;

	alambre=perimetro*3

	alert("Se necesitan "+alambre+" hilos de alambre");
	
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;	
	var alambre;
	var cal;
	var cemento;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	area=largo*ancho;

	cal=area*3;
	cemento=area*2;

	alert("Se necesitan "+cal+" bolsas de cal y "+cemento+" bolsas de cemento");


	
	
}