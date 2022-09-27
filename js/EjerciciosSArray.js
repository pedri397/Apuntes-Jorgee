let numeros = [2, 2, 2, 2, 2, -10]

/** Un array que me devuelva las 3 primeras posiciones  */
    console.log("Un array que me devuelva las 3 primeras posiciones")

    console.log(numeros.slice(0,3))

    console.log("--------------------------------------------")

    /** Sacar los 3 ultimos */
        console.log("Sacar los 3 ultimos")    

        console.log(numeros.slice(-3))
        console.log("--------------------------------------------")


/** Si un array tiene mas de 5 elementos, mostrar las posiciones pares */

console.log("Si un array tiene mas de 5 elementos, mostrar las posiciones pares")


    if(numeros.length > 5){

        for (let index in numeros){
            if(index %2==0){
                console.log(index)
            }
        }
    }

    console.log("--------------------------------------------") 

/** Mostrar el producto de los valores pares */

console.log("Mostrar el producto de los valores pares")

   let numeros1 = numeros.filter(pares => pares %2==0).reduce((pares, acu) => acu * pares)

        console.log(numeros1)

        console.log("--------------------------------------------")    

/** Si todos los valores del array son positivos y pares mostrar el producto de los valores del array */

console.log("Si todos los valores del array son positivos y pares mostrar el producto de los valores del array") 

    if(numeros.every(pares => pares %2==0 && pares > 0)){
        let numeros3 = numeros.reduce((pares, acu) => pares * acu)
        console.log(numeros3)
    }

    console.log("--------------------------------------------") 

/** Si tienes un array que contienen un valor par y menor que 10. 
 * Añade al array todos los valores, que haya desde el valor par hasta 10
 */

 console.log("Si tienes un array que contienen un valor par y menor que 10. Añade al array todos los valores, que haya desde el valor par hasta 10") 

        /** Se hace con un some por que al menos tiene que tener un parametro */
 
    if(numeros.some(pares => pares %2==0 && pares < 10)){
        let primerValor = numeros.find(pares => pares % 2 == 0 && pares < 10)

        if(primerValor){
            for (primerValor; primerValor <= 10; primerValor++){
                numeros.push(primerValor)
            }
        }
    }
