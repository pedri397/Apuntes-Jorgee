
// 8.Realizar un programa que “implemente” el funcionamiento de un Cajero Automático, con las siguientes características:
// a.Las operaciones que se podrán realizar son:

// MENU DEL CAJERO
// 1.Sacar dinero.
// 2.Ingresar dinero.
// 3.Consultar saldo.
// 4.Cambiar Contraseña.
// 5.Salir


// Entrada con contraseña al programa 
const entrada = (con) =>{
    
    let intentos = 3
    let correcto = false //Booleano se inicializa a false para cuando entre en que la contraseña es correcta entonces es true
                         // y se sale debido a la condicion del while 
    
    do {
        let contraseña = prompt("Introduce la contraseña")
        if(contraseña == con){
            alert("Contraseña correcta")
            correcto = true
        }else{
            intentos--
            alert(`Contraseña incorrecta, te quedan ${intentos}`)

            if(intentos==0) {
                alert("Usuario bloqueado")
            }
        }
        
    } while (intentos > 0 && !correcto)  // Si intentos es superior a 0 y correcto es false se sigue repitiendo 

    return correcto
}

const menu = () => {

    //Este return lo que hace es que la funcion devuelva el valor que se ingresa por teclado
    //Se pone el parseInt ya que esto devuelve un String y no podria compararse con el "case 1" ya que ese 1 es un int,
    //Tambien se podria dejar sin el parseInt pero en el switch habria que poner comillas lo cual seria asi 'case "1"'
    return parseInt(prompt(`Elige una opcion \n 
    1. Sacar dinero\n
    2. Ingresar dinero\n
    3. Consultar saldo\n
    4. Cambiar contraseña\n
    5. Salir`))
}

const ingresar = () => {

}

const programa = () => {
    let opcion = 0
    let con = "DAW2"
    let saldo = 8000

    if(entrada(con)){

        do {
            //Aqui se le asigna a opcion el valor que devuelve menu 
            opcion = menu()
            
            switch(opcion){

                case 1:
                    alert("HOLA")
                    break

                case 2:
                    alert("CARA")
                    break
                
                case 3: 
                    alert("COLA")
                    break
                
                case 4:
                    alert("4")
                    break

                case 5:
                    alert("Hasta luego")
                    break

            }



            
        } while (opcion !== 5) //El bucle se va a ejecutar mientras opcion sea diferente de 5

    }
}

programa()