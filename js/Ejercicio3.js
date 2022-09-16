
// 3.Realizar un programa que calcule el salario de un trabajador, para ello pediremos el número de horas trabajadas y el precio de la hora. Si el trabajador 
// trabajas más de 40 horas semanales, se considera que trabaja horas extras. Las horas extras se pagan a 1.5 veces la hora normal.

// a.Modifica el programa para que la operación se realice para cinco trabajadores.
// b.Modifica el programa anterior para que el trabajador introduzca también su nombre y dirección que mostraremos junto con su salario.
// c.Modifica el programa anterior para que la salida se muestre en nuestro documento html y también en la consola.

let horas = parseInt(prompt("Numero de horas trabajadas"))
let precioh = parseInt(prompt("Precio de las horas "))
let salario = 0
let salarioex = 0


if(horas<=40){

    salario = horas * precioh
}else if(horas>40){
    
    let hex = 0

    hex = horas - 40

    horas = horas - hex
    salario = horas * precioh
    
    precioh = precioh * 1.5
    salarioex = hex * precioh 
    
}

console.log(salarioex)
console.log(salario)

salario = salario + salarioex

alert(salario)



//Corregido (Estan bien los dos)

// let extras = 0
// let horasC = parseInt(prompt("Corregido"))
// let preciohC = parseFloat(prompt("Corregido"))
// let sueldo = 0

//     if(horasC>40){
//         extras =  (horasC - 40) * (preciohC) * 1.5
//         sueldo = 40 * preciohC + extras
//     }else {
//         sueldo = horasC * preciohC
//     }

//     alert(sueldo + (" Corregido"))

//     console.log(`hola ${sueldo} bien`)