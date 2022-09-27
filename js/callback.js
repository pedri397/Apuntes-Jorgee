

// Funciones de callback


const sumatorio = (num1, cb) => {
    // console.log(num1 + cb(num1, 5)) //Cuando ejecutas la funcion utiliza el codigo de abajo 
    // console.log(num1)
    // console.log(cb) //Mientras cb no sea ejecutado solo se muestra el codigo creado
}

sumatorio(10, (num2, num3) => {
    return num2 + num3
})

/**
 * CONDICION PARA SABER SI UN NUMERO ES PAR => (% 2 == 0)
 */


//Funcion MAP
//sirve para hacer un calculo para cada uno de los valores del array

let edades = [10, 20, 30, 40]

let nuevo = edades.map(edad => edad * 3)

console.log(nuevo)


//Funcion FILTER
//Sirve para aplicar una condicion a cada uno de los valores del array, si se cumple la condicion te devuelve los valores

let nuevo2 = edades.filter(edad => edad > 25) //Si la edad es mayor a 25 te devuelve el valor y lo mete en nuevo2

console.log(nuevo2)

//Funcion SOME si alguno cumple la condicion te devuelve true, si ninguno la cumple false
//Funcion EVERY si todos cumplen la condicion te devuelve true, si todos no la cumplen false

//Funcion FIND
//Al aplicarse la condicion devuelve el primer numero que encuentra 
//si usas ".findIndex" te devuelve la posicion en la que se encuentra


let nuevo3 = edades.find(edad => edad > 10)

console.log(nuevo3)


//Se pueden concadenar funciones primero haria el filtro de edad y con esos filtrados 
//empezaria el map que hara que aumenten en 5 su edad


let nuevo4 = edades.filter(edad => edad < 18).map(edad => edad + 5)

console.log(nuevo4)


//Funcion REDUCE hace una operacion con todos los elementos y te saca el resultado de esa operacion 

let nuevo5 = edades.reduce((edad, acu) => { //Esta operacion saca la suma de las edades
    return acu + edad
})
console.log(nuevo5)


let nuevo6 = edades.reduce((edad, acu) => { //Esta saca la suma de todas las edades y la divide entre la longitud del array
    return acu + edad
}) / edades.length //Aqui es cuando divide entre la longitud del array

console.log(nuevo6)