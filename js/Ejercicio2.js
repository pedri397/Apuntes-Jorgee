//Ejercicio 02 |Estructura de control|

// Realizar un programa que acepte valores hasta que se introduzca el valor 0. El programa
// nos mostrará:
// a.Cuantos valores pares e impares se han introducido.
// b.La suma de los valores pares.
// c.Cuantos valores positivos y negativos se han introducido.
// d.El producto de los valores positivos.
// e.Cuantos valores se han introducido.

//A

let n1 = 0
let positivo = 0
let par = 0
let impar = 0
let sumapar = 0
let negativo = 0
let valoresIntr = 0

do{
    
    n1 = parseInt(prompt("Introduce otro numero"))
    //E
    valoresIntr++
    
    //C-D
    if(n1 >= 0){
        positivo++
    }else{
        negativo++
    }

    //B - Si el resto de dividir el nunero entre 2 es 0 entonces es par

    if(n1 % 2 == 0){
        par++
        sumapar = n1 + sumapar
    }else {
        impar++
    }
    

}while(n1!=0)

alert("ES 0" + " " + "Positivos:"+ positivo + " " + "Par:" + par + " " + "Impar:" + impar )

alert("Suma de los valores pares:" + sumapar)

alert("Negativos:" + negativo)

alert("Cuantos numeros se han introduccido" + valoresIntr)



