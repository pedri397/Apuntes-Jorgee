/** Indica como se pueden realizas las siguientes acciones */


    /** Mostrar de la suma de todos los valores de un array */

    /** Obtener un nuevo array con los valores de un array que cumplan una cierta condicion */

    /** Mostrar si un array contiene un valor y en que posicion se encuentra */

    /** Mostrar todos los valores de un array, si tiene algun valor igual a 0 */

    /** Obtener un nuevo array con los valores multiplicados por dos
     *  y al mismo tiempo mostrar el contenido del array que ya teniamos */

    let ArrayF2 = ArrayF.map(valor => {
        console.log(valor)
        return valor * 2
    })

    /** Mostrar un array si todos los valores que contiene son positivos */

    /** Si tenemos un proceso que se repite un numero muy alto de veces y queremos mostrar 
     * el contenido de cada una de sus posiciones y el idice de cada una de sus posiciones.
     * Cual seria el proceso repetitivo mas adecuado */


    /** Podemos "suplantar" el recorrido de un array con algun metodo que nos e un for of,
     * for, for in, forEach o map. Seria adecuado. */


    /** Tenemos un array con valores numericos. Podriamos almacenar en un nuevo array
     * los valores de un array que se encuentren entre 10 y 20, en el caso de que 
     * todos los valores del array sean positivos y al mismo tiempo mostrar todos los valores del array. */
    
    if(ArrayJ.every(valor => valor > 0)){
        nuevoArrayJ = ArrayJ.filter(valor => {
            console.log(valor)
            return valor > 10 && valor < 20
        })
    }