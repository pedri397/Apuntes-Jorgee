
let ciudades = ["Talavera", "Toledo", "Madrid", "Barcelona", "Vigo", "Ciudad Real", "Alicante", "Murcia", "Badalona", "Palma"]


const menu = () => {

    //Este return lo que hace es que la funcion devuelva el valor que se ingresa por teclado
    //Se pone el parseInt ya que esto devuelve un String y no podria compararse con el "case 1" ya que ese 1 es un int,
    //Tambien se podria dejar sin el parseInt pero en el switch habria que poner comillas lo cual seria asi 'case "1"'
    return parseInt(prompt(`CIUDADES \n 
 
    1. For of \n
    2. For in \n
    3. For each\n
    4. Map\n
    5. Añadir Moscu y Buenos Aires\n 
    6. Buscar si madrid existe y si no existe se borra\n
    7. Salir`))
}


const programa = () => {



    let opcion = 0

    do {

        //Aqui se le asigna a opcion el valor que devuelve menu 
        opcion = menu()

        switch (opcion) {

            case 1:
                for (let ciudad of ciudades) {
                    alert(ciudad)
                }
                break
            case 2:
                for (let posicion in ciudades) {
                    alert(posicion)
                }
                break
            case 3:
                ciudades.forEach(ciudad => {
                    alert(ciudad)
                })
                break
            case 4:
                ciudades.map(ciudad => alert(ciudad))
                break
            //Salir
            case 5: //Este caso añade buenos aires al principio y moscu al final
                ciudades.unshift("Buenos Aires")
                ciudades.push("Moscu")
                alert(ciudades)
                break
            case 6:
                if (ciudades.some(ciudad => ciudad === "Madrid")) {
                    alert("Si esta")
                    ciudades.splice(ciudades.indexOf( ciudad => ciudad === "Madrid"))

                } else {
                    ciudades.push("Madrid")
                }

                //Tambien se puede hacer con FILTER

                // if(ciudades.some(ciudad => ciudad === "Madrid")){
                //     ciudades.filter(ciudad => ciudad !== "Madrid")
                // }else {
                //     ciudades.push("Madrid")
                // }
                
                break
            case 7:
                alert("Hasta luego")
                break
        }
    } while (opcion !== 7) //El bucle se va a ejecutar mientras opcion sea diferente de 5


}


programa()