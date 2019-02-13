/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;

	precio1=PrecioUno.value;
	precio2=PrecioDos.value;
	precio3=PrecioTres.value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	var suma;

	suma=precio1+precio2+precio3;

	alert("El resultado de la suma es: "+suma);
	
	
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;

	precio1=PrecioUno.value;
	precio2=PrecioDos.value;
	precio3=PrecioTres.value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	var promedio;

	promedio=(precio1+precio2+precio3)/3;

	alert("El promedio es: "+promedio);
	
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;

	precio1=PrecioUno.value;
	precio2=PrecioDos.value;
	precio3=PrecioTres.value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	var suma;

	suma=precio1+precio2+precio3;

	var coniva;

	coniva=suma+(suma*21/100);

	alert("El precio con IVA es "+coniva);
	
}