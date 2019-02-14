function mostrar()
{
  var compra;
  var descuento;
  var condescuento;
  var iva;
  var coniva;

  compra=prompt("Ingrese el valor de su compra");
  compra=parseInt(compra);

  descuento=compra*10/100;

  condescuento=compra-descuento;

  iva=condescuento*21/100;

  coniva=condescuento+iva;

  alert("Tu compra es de "+compra+", tenes un descuento del 10% queda en "+condescuento+", mas el iva es "+coniva);



}
