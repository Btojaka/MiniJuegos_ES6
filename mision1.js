
// FUNCIONES

/* Muestra por pantalla un mensaje al usuario para que elija la categoría que quiera
   en la última tirada. Guarda la elección del usuario en una variable y la devuelve.*/

let elegir = () =>
    prompt(`Elige la categoría de tu carta 1 = Geografía, 2 = Arte, 
    // corregirForm(respuestas); // accion cada vez que le aprieta a comprobar
    3 = Espectáculos, 4 = Historia, 5 = Ciencias o 6 = Deporte.`, 3);


// Ejecutará las instrucciones según la elección del usuario, se le pasa el parámetro e
let comprobar = (e) => {
    let eleccion = parseInt(e); // 
    document.write("Esta es la eleccion dentro de la funcion comprobar: " + eleccion); // PRUEBAS

    switch (eleccion) {
        case 1:
            alert("Has elegido Geografía");
            const [preguntas, respuestas] = geografia();
            crearCarta(preguntas);
            break;
        case 2:
            alert("Has elegido Arte");
            //let categoria = arte();
            //crearCarta(categoria);
            break;
        case 3:
            alert("Has elegido Espectáculos");
            //let categoria = espectaculos();
            //crearCarta(categoria);
            break;
        case 4:
            alert("Has elegido Historia");
            //let categoria = historia();
            //crearCarta(categoria);
            break;
        case 5:
            //alert("Has elegido Ciencias");
            //let categoria = ciencia();
            crearCarta(categoria);
            break;
        case 6:
            alert("Has elegido Deporte");
            //let categoria = deporte();
            //crearCarta(categoria);
            break;
        default:
            alert(" estas en el default")
        //comprobar();

    }
}
// Genera un número aleatorio entre 0 y el indice máximo -1 de ¡l vector o matriz 
let indiceAleatorio = (v) => Math.floor(Math.random() * (v.length));


// Crea la carta según la categoría elegida
let crearCarta = (p) => {
    let preg = p;
    console.log(preg); // PRUEBAS

    let cont = 0;
    let indice;
    let pregx = "";

    // ejecuta 6 veces la función para obtener 6 preguntas aleatorias
    do {
        indice = indiceAleatorio(preg);
        document.write("Indice aleatorio de la pregunta: " + indice); // PRUEBAS
        pregx = preg[indice];
        alert("Pregunta: " + pregx);
        cont++;
    } while (cont < 2); // PRUEBAS (cambiar a 6)




}

// Compara respuestas introducidas con respuestas almacenadas

/*function corregirForm(r){
    //let resp = r;
    let resp1 = prompt(preg1);
    
}*/

// Preguntas y respuestas por categorías 
// OJO AÑADIR HASTA 10 PREGUNTAS Y RESPUESTAS POR CATEGORIA PORQUE EN LA CARTA VAN 6
let geografia = () => {
    let preguntas =
        [
            " Capital de España? ",
            " Cuántas provicians tiene la C.Valenciana? ",
            `Nombre de los puntos cardinales (separados por comas y 
         en orden desde arriba, en sentido de las manecillas del reloj)`
        ];

    let respuestas =
        [
            "madrid",
            ["3", "tres"],
            ["norte, este, sur, oeste", "norte, este, sur y oeste"]
        ];

    return [preguntas, respuestas];
}

let arte = () => {
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

let espectaculos = () => {
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

let historia = () => {
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

let ciencia = () => {
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

let deporte = () => {
    let preguntas =
        [
            " En qué deporte se utiliza un bate para darle a una pelota? ",
            " Cómo se llama el mejor tenista español? ",
            " uantos sets tienes que ganar para ganar un partido de voleibol? "
        ];


    let respuestas =
        [
            ["beisbol", "baseball", "béisbol"],
            ["rafa nadal", "nadala", "rafael nadal"],
            [" 3 ", " tres "]
        ];

    return [preguntas, respuestas];
}



// CODIGO PRINCIPAL

let eleccionUsuario;

do {
    eleccionUsuario = parseInt(elegir());

} while (eleccionUsuario < 1 || eleccionUsuario > 6);

document.write(eleccionUsuario); // PRUEBAS

comprobar(eleccionUsuario);

