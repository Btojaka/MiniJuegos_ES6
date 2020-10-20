/* Muestra por pantalla un mensaje al usuario para que elija la categoría que quiera
 en la última tirada. Guarda la elección del usuario en una variable y la devuelve.*/
function elegir(){
    let eleccion = prompt(`Elige la categoría de tu carta 
    1 = Geografía, 2 = Arte, 3 = Espectáculos,
    4 = Historia, 5 = Ciencias o 6 = Deporte.`, 3);
    
    return eleccion;
}

switch(elegir()){
    case 1:
        alert("Has elegido Geografía");
                
}


let elegir = () => prompt(`Elige la categoría de tu carta 
    1 = Geografía, 2 = Arte, 3 = Espectáculos,
    4 = Historia, 5 = Ciencias o 6 = Deporte.`, 3);
    


/*Creará la carta con el parámetro eleccion que será la categoria que eligió el usuario 
De momento la idea es crrearla a como un formulario*/
/*let crearCarta = eleccion => 
    <form>
        <label>Pregunta 1:</label>
        <input></input>
    </form>*/

elegir();