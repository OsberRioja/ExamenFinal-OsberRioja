function ContarPalabras(texto,palabra) {
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

export default ContarPalabras;
