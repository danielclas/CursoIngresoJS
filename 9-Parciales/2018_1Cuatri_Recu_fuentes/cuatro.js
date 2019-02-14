function mostrar()
{
	var amigos;
	var cuenta;
	var propina;
	var iva;
	var coniva;
	var total;
	var cadauno;

	amigos=prompt("Cantidad de amigos:");
	cuenta=prompt("La cuenta es de:");

	amigos=parseInt(amigos);
	cuenta=parseInt(cuenta);

	propina=cuenta*10/100;

	iva=cuenta*21/100;

	coniva=cuenta+iva;

	total=coniva+propina;

	cadauno=total/amigos;

	alert("El total incluyendo propina e iva es: $"+total+". Divido "+amigos+" amigos, cada uno debera pagar $"+cadauno);



}
