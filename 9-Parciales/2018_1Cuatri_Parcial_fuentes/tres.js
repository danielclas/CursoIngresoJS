function mostrar()
{
	var precio; //creo las variables
	var descuento;//esta variable corresponde al porcentaje de descuento
	var valordescuento;//esta variable corresponde al valor del descuento
	var preciofinal;

	precio=prompt("Ingrese el precio");//tomo datos por prompt
	descuento=prompt("Ingrese el descuento");

	precio=parseInt(precio);//paso valores a enteros
	descuento=parseInt(descuento);

	valordescuento=precio*(descuento/100);//calculo el valor del descuento

	preciofinal=precio-valordescuento;//resto el precio menos el valor del descuento

	elPrecioFinal.value=preciofinal;//muestro el resultado por id



}
