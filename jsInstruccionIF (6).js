function Mostrar()
{
//tomo la edad  

var edad;

edad= parseInt(document.getElementById("edad").value);

if( edad <13){
  alert("es un niño");
}
else if(edad <=17){
   alert("es un adolescente");

}
else{
    alert("es mayor");

}

}//FIN DE LA FUNCIÓN
