
// 5. Programa que pide 2 números y halla su potencia.
// a. La potencia se debe realizar mediante productos y debemos asegurarnos de que los valores con los que trabajamos son numéricos.
// b. No admitiremos valores negativos.

let base = parseInt(prompt("Introduce un numero"))
let exp = parseInt(prompt("Introduce la potencia"))


if(base >= 0 && exp >= 0) {
    let resultado = 1

    for(i = 0; i < exp; i++){
        resultado *= base
    }
    alert(resultado)
}