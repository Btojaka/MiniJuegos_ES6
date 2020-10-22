
// FUNCIONES

/* Muestra por pantalla un mensaje al usuario para que elija la categoría que quiera
   en la última tirada. Guarda la elección del usuario en una variable y la devuelve.*/

let elegir = () => prompt(`Elige la categoría de tu carta 
        1 = Geografía, 2 = Arte, 3 = Espectáculos,
        4 = Historia, 5 = Ciencias o 6 = Deporte.`, 3);


// Ejecutará las instrucciones según la elección del usuario, se le pasa el parámetro e

function comprobar(e){
    
    let eleccion = e; // 
    document.write("Esta es la eleccion dentro de la funcion comprobar: " +eleccion); // PRUEBAS
       
    switch (eleccion){
        case 1:
            alert("Has elegido Geografía");
            cartaGeo();
            break;
        case 2:
            alert("Has elegido Arte");
            cartaArt();
            break;
        case 3:
            alert("Has elegido Espectáculos");
            cartaEsp();
            break;
        case 4:
            alert("Has elegido Historia");
            cartaHis();
            break;
        case 5:
            alert("Has elegido Ciencias");
            cartaCien();
            break;
        case 6:
            alert("Has elegido Deporte");
            cartaDep();
            break;
        default:
            alert("")
            //comprobar();
            
    }
}
// Crea la carta según la categoría elegida
function crearCarta(categoria()){};

// Preguntas y respuestas por categorías 
function geografia(){
    let preguntas = 
    [
        " Capital de España? ",
        " Cuántas provicians tiene la C.Valenciana? ",
        " Nombre de los puntos cardinales (separados por comas y en orden desde arriba, en sentido de las manecillas del reloj)"
    ]
    
    let respuestas = 
    [
        "madrid",
        ["3", "tres"],
        ["norte, este, sur, oeste", "norte, este, sur y oeste"]
    ]
    return [preguntas, respuestas];
}

function arte(){
    let preguntas = 
    [
        " Quién pintó la Mona Lisa? ",
        " Quién pintó el Guernica? ",
        " Cuáles son las flores más famosas pintadas por Van Gogh? "
    ];
    

    let respuestas = 
    [
        ["leonardo da vinci", "da vinci"],
        ["pablo picasso", "picasso"],
        ["girasoles", "los girasoles"]
    ];
    return [preguntas, respuestas];
}

function espectaculos(){
    let preguntas = 
    [
        " En música, a cuántos tiempos equivale una blanca? ",
        " EL piano es un instrumento de: ",
        " Pelicula Disney más taquillera de la historia? "
    ];
    

    let respuestas = 
    [
        ["2", "dos"],
        "cuerda",
        ["el rey leon", "el rey león"]
    ];
    
    return [preguntas, respuestas];
}

function historia(){
    let preguntas = 
    [
        " Nombre (sólo) del Rey de España en 2020? ",
        " Cuál es el personaje más conocido de Miguel de Cervantes? ",
        `Cómo se llaman las tres carabelas que fueron a América con Cristóbal Colón 
        (separa sus nombres por comas)?`
    ];
   

    let respuestas = 
    [
        "Felipe", 
        "don quijote",
        "santa maria, la pinta, la niña"
    ];
    return [preguntas, respuestas];
}

function ciencia(){
    let preguntas = 
    [
        " Cuántos minutos tiene una hora? ",
        " Cuántas patas tiene una araña? ",
        " Cuál es el río más caudaloso del mundo? "
    ];
  
    let respuestas = 
    [
        ["60", "sesenta"], 
        ["8", "ocho"],
        [" amazonas ", "el amazonas"]
    ];
    return [preguntas, respuestas];

}





// CODIGO PRINCIPAL

let eleccionUsuario;

do{
    eleccionUsuario = parseInt(elegir());

}while(eleccionUsuario < 1 || eleccionUsuario > 6);

document.write(eleccionUsuario); // PRUEBAS

comprobar(eleccionUsuario);