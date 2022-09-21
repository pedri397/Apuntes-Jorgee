

// Funciones de callback


const sumatorio = (num1,cb) => {
    // console.log(num1 + cb(num1, 5)) //Cuando ejecutas la funcion utiliza el codigo de abajo 
    // console.log(num1)
    // console.log(cb) //Mientras cb no sea ejecutado solo se muestra el codigo creado
}

sumatorio (10, (num2, num3) => {
    return num2 + num3
}) 


    
    //Funcion MAP
    //sirve para hacer un calculo para cada uno de los valores del array

    let edades = [10,20,30,40]

    let nuevo = edades.map( edad => edad * 3)

        console.log(nuevo)


    //Funcion Filter
    //Sirve para aplicar una condicion a cada uno de los valores del array, si se cumple la condicion te devuelve los valores

    let nuevo2 = edades.filter( edad => edad > 25) //Si la edad es mayor a 25 te devuelve el valor y lo mete en nuevo2

        console.log(nuevo2)


    //Funcion Find
    //Al aplicarse la condicion devuelve el primer numero que encuentra 


    let nuevo3 = edades.find(edad => edad > 10)

        console.log(nuevo3)