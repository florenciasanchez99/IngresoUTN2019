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
    var resultado;

precio1=parseInt(document.getElementById("PrecioUno").value);
precio2= parseInt(document.getElementById("PrecioDos").value);
precio3= parseInt(document.getElementById("PrecioTres").value);

resultado = precio1 + precio2 + precio3;
alert("La suma es "+ resultado);

}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;
 
 precio1=parseInt(document.getElementById("PrecioUno").value);
precio2= parseInt(document.getElementById("PrecioDos").value);
precio3= parseInt(document.getElementById("PrecioTres").value);

resultado = (precio1 + precio2 + precio3) / 3;
alert("El importe de los precios es "+ resultado);
 


}
function PrecioFinal () 
{
    
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var iva;
    var resultadoConIva;
    
    precio1=parseFloat(document.getElementById("PrecioUno").value);
    precio2= parseFloat(document.getElementById("PrecioDos").value);
    precio3= parseFloat(document.getElementById("PrecioTres").value);
    
    suma= precio1 + precio2 + precio3;
    iva= suma * 21/ 100;
    resultadoConIva= suma + iva;

    alert("El precio con IVA incluido es" + resultadoConIva);

}




