
/* Muestra por pantalla un mensaje al usuario para que elija la categoría que quiera
   en la última tirada. Guarda la elección del usuario en una variable y la devuelve.*/

let elegir = () => prompt(`Elige la categoría de tu carta 
        1 = Geografía, 2 = Arte, 3 = Espectáculos,
        4 = Historia, 5 = Ciencias o 6 = Deporte.`, 3);


// Llamará a la función elegir y además ejecutará unas instrucciones según la elección

function comprobar(e){
    let eleccion = e;
    document.write("Esta es la eleccion dentro de la funcion comprobar: " +eleccion);
   // Comprueba que opción ha elegido el usuario y según la elección ejecuta las intrucciones que debe, utiliza
   // el método parseInt() para transformas el string introducido por el usuario

    switch (parseInt(eleccion)){
        case 1:
            alert("Has elegido Geografía");
            break;
        case 2:
            alert("Has elegido Arte");
            break;
        case 3:
            alert("Has elegido Espectáculos");
            break;
        case 4:
            alert("Has elegido Historia");
            break;
        case 5:
            alert("Has elegido Ciencias");
            break;
        case 6:
            alert("Has elegido Deporte");
            break;
        default:
            alert("Introduce un número del 1 al 6, vuelve a intentarlo.")
            //comprobar();
            
    }
}

let eleccionUsuario = elegir();
document.write(eleccionUsuario);

comprobar(eleccionUsuario);