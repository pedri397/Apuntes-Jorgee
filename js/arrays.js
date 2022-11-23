

/** ---------------------------------------------------------------------------
 *                                     ARRAYS
 * ----------------------------------------------------------------------------
 */

const numericos = [1, 2, 3, 4, 5, 6, 7]
const decimales = [1.1, 1.2, 1.3, 1.4, 1.5]
const string = ["Pedro", "Jose", "Sergio", "Juli", "Manolo"]

console.log(string)


// For para recorrer el array

//for of 

for (let numero of numericos) {

}

//Diferencia entre "for of" y "for in", "for of" te devuelve el contenido del elemento y "for in" la posicion del elemento


//for in 

for (let i in numericos) {

    //Como hacer que me de el contenido pidendole la posicion 
    console.log(numericos[i])
    //Tambien se puede poner asi
    console.log(i)

}


//for each
// Este forEach tiene una funcion de flecha 

string.forEach(nombres => {
    console.log(nombres)
})