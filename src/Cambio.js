function Cambio(venta, efectivo) {
  if(venta!=null||efectivo!=null)
  {
    return efectivo-venta;
  }
  else{
    return "";
  }
}


function Fraccionar(monto)
{
  let monedas=[5,2,1];
  let fraccion=[];
  var suma=0;
  for(var i=0;i<monedas.length;i++)
  {
    while(monto>=(suma+monedas[i]))
    {
      suma=suma+monedas[i];
      fraccion.push(monedas[i]);
    }
  }
  return fraccion;
}

export default (Cambio,Fraccionar);