/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var ellargo;
	var elancho;

	ellargo=Largo.value;
	elancho=Ancho.value;

	ellargo=parseInt(ellargo);
	elancho=parseInt(elancho);

	var perimetro;

	perimetro=(2*ellargo)+(2*elancho);

	var alambre;

	alambre=perimetro*3;

	alert("La cantidad de hilos de alambre que se necesitan es "+alambre);

}
function Circulo () 
{
	var radio;
	
	radio=Radio.value;

	radio=parseInt(radio);

	var circunferencia;

	circunferencia=2*3.14159*radio;

	var alambre;

	alambre=circunferencia*3;

	alert("Usted necesitara "+alambre+" hilos de alambre");

	
}
function Materiales () 
{
	var ellargo;
	var elancho;

	ellargo=Largo.value;
	elancho=Ancho.value;

	ellargo=parseInt(ellargo);
	elancho=parseInt(elancho);

	var area;

	area=ellargo*elancho;

	var cemento;

	cemento=area*3;

	var cal;

	cal=area*2;

	alert("Para "+area+"m2 de contrapiso usted necesitara "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
	
}