function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var final;

	precio=prompt("Ingrese el precio");
	porcentaje=prompt("Ingrese el porcentaje de descuento");

	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;
	final=precio-descuento;

	document.getElementById('elPrecioFinal').value=final;
}
