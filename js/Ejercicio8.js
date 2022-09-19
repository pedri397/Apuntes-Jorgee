
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



const menu = (saldo) => {

    //Este return lo que hace es que la funcion devuelva el valor que se ingresa por teclado
    //Se pone el parseInt ya que esto devuelve un String y no podria compararse con el "case 1" ya que ese 1 es un int,
    //Tambien se podria dejar sin el parseInt pero en el switch habria que poner comillas lo cual seria asi 'case "1"'
    return parseInt(prompt(`MENU CAJERO \n 
    Saldo actual: ${saldo}\n
    1. Sacar dinero\n
    2. Ingresar dinero\n
    3. Consultar saldo\n
    4. Cambiar contraseña\n
    5. Salir`))
}

const ingresar = (saldo) => {

    let ingreso = parseInt(prompt("Dinero a ingresar"))

    if(ingreso > 0){ //Aqui comprueba que el ingreso sea positivo.

        saldo += ingreso
        alert(`Ingreso: ${ingreso} \n
        Saldo: ${saldo}`)
    }else{
        alert(`El saldo ingresado es negativo ${ingreso}`)
    }
    
    return saldo 
}

const sacar = (saldo) => {
    
    let cobrar = parseInt(prompt("Dinero a retirar"))

    if(cobrar > 0 && saldo >= cobrar){
        saldo -= cobrar
        alert(`Retirarda: ${cobrar}\n 
        Saldo: ${saldo}`)
    }
    if(cobrar > saldo){
        alert(`No puedes sacar mas de su saldo `)
    }
    
    return saldo
}

const consultar = (saldo) => {
    alert(`Saldo: ${saldo}`)
    return saldo
}

const cambiarcon = (con) => {

    let con2 = prompt("Introduce la nueva contraseña")

    if(con == con2){
        alert("Error: Las contraseña nueva coincide con la contraseña actual")
    }else {

        con = con2
        alert(`Contraseña nueva: ${con} `)
    }

    return con
}

const programa = () => {
    let opcion = 0
    let saldo = 8000
    let con = "DAW2"
    
    if(entrada(con)){
        
        do {
            
            //Aqui se le asigna a opcion el valor que devuelve menu 
            opcion = menu(saldo)
            
            switch(opcion){
                    //Sacar dinero
                case 1:
                    saldo = sacar(saldo) //con esto actualizamos la variable saldo
                    break

                    //Ingreso
                case 2:
                    saldo = ingresar(saldo)
                    break
                    //Consultar saldo 
                case 3: 
                    saldo = consultar(saldo)
                    break
                    //Cambiar contraseña
                case 4:
                    con = cambiarcon(con) //con esto actualizamos la variable con (contraseña)
                    break
                    //Salir
                case 5:
                    alert("Hasta luego")
                    break
            }
        } while (opcion !== 5) //El bucle se va a ejecutar mientras opcion sea diferente de 5

    }
}

programa()