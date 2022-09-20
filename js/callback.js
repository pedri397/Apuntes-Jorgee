

// Funciones de callback


const sumatorio = (num1,cb) => {
    // console.log(num1 + cb(num1, 5)) //Cuando ejecutas la funcion utiliza el codigo de abajo 
    // console.log(num1)
    // console.log(cb) //Mientras cb no sea ejecutado solo se muestra el codigo creado
}

sumatorio (10, (num2, num3) => {
    return num2 + num3
}) 