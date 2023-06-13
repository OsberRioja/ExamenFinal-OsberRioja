export function ContarPalabras(texto,palabra) {
  let contador=0;
  if(texto==""){
    return contador;
  }
  else{
    let palabras=texto.split(" ");
    for(var i=0;i<palabras.length;i++)
    {
      if(palabras[i]==palabra){
        contador+=1;
      }
    }
    return contador;
  }
}

export function ContarOcurrencias(texto)
{
  let words=texto.split(" ");
  let cuenta=[];
  let repeticiones;
  var i=0;
  while(i<words.length)
  {
    repeticiones=ContarPalabras(texto,words[i]);
    cuenta.push(repeticiones);
    i++;
  }
  return cuenta;
}

// export default ContarPalabras;
