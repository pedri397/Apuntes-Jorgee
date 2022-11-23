

/** --------------------------------------------------------------------------
 *                              DOM 
 * ---------------------------------------------------------------------------
 */




/** Para selecionar elementos del html a traves del id y me devuelve un objeto */

let id = document.getElementById("id")



/** Para selecionar elementos del html a traves de clases y me devuelve un array */

let clase = document.getElementsByClassName("clase")



/** Para selecionar elementos del html a traves de tag y me devuelve un array */

let tag = document.getElementsByTagName("tag")



/** Para selecionar elementos con quierySelector */

    /** Para selecionar por id, este te devuelve un objeto */

    document.querySelector("#id")

    /** Para selecionar por clase, este te devuelve un array */

    document.querySelectorAll(".clase")

    /** Para selecionar por tag, este te devuelve un array */

    document.querySelectorAll("tag")



/** Para cambiar el atributo */

    /**  id.setAttribute("href", "https://www.ono.es") */


    /** PRUEBA CAMBIO DE ENLACES */

    let enlaces = document.querySelectorAll(".menu_txt")
    
    console.log(enlaces)

    enlaces.forEach(enlaces=> {
        enlaces.setAttribute("href", "http://www.ono.es")
        enlaces.setAttribute("target", "_blank")
    })

    /** ------------------------------------------- */



/** ---------------------------------------------------
 *              EVENT LISENER
 * ----------------------------------------------------
 */

    let foto1 = document.getElementById("foto1")

    foto1.addEventListener("click",/**Aqui la funcion o un callback */)



/**-------------------------------------------------------- 
 * Acceder a elementos que e creado en tiempo de ejecucion 
 * --------------------------------------------------------- */

    /** .firstElementChild */
    /** Este metodo sirve para selecionar el primer elemento  */


 
    /** .lastElementChild */
    /** Este metodo sirve para selecionar el ultimo elemento */


    /** .nextElementSibling */
    /** Este metodo sirve para selecionar el elemento de al lado, se puede poner varias veces,
     * para ir acediendo de uno en uno.
     */


    /**----- CREAR UN ELEMENTO DESDE JAVASCRIPT------ */
 
        let newitem = document.createElement("li") /** Creamos el elemnto */

        newitem.textContent = "El mejor nieto" /** Le damos un texto */

        nietos.appendChild(newitem) /** Aqui le paso a nietos que sera otra etiqueta 
                                        el nuevo item y lo añado */