
'use strict'
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
    //document.write("Esta es la eleccion dentro de la funcion comprobar: " + eleccion); // PRUEBAS
    switch (eleccion) {
        case 1:
            alert("Has elegido Geografía");
            let geo = geografia();
            crearCarta(geo);
            break;
        case 2:
            alert("Has elegido Arte");
            let art = arte();
            crearCarta(art);
            break;
        case 3:
            alert("Has elegido Espectáculos");
            let esp = espectaculos();
            crearCarta(esp);
            break;
        case 4:
            alert("Has elegido Historia");
            let his = historia();
            crearCarta(his);
            break;
        case 5:
            alert("Has elegido Ciencias");
            let cie = ciencia();
            crearCarta(cie);
            break;
        case 6:
            alert("Has elegido Deporte");
            let dep = deporte();
            crearCarta(dep);
            break;
        default:
            alert("estás en el default, algo falló")
    }
}
// Muestra las pregunta de la "carta"
let mostrarPreg = (quest) => {
    
    let preg1 = quest[0][0];
    let preg2 = quest[1][0];
    let preg3 = quest[2][0];
    let preg4 = quest[3][0];
    let preg5 = quest[4][0];
    let preg6 = quest[5][0];

    // Manipulamos el DOM y capturamos/incrustamos en el html lo siguiente donde aparece el id formulario

    document.getElementById('formulario').innerHTML =
        `<form action="#" method= "POST" id="carta" onsubmit="return false;" >

            <label for="respUsu1">1. ${preg1}</label><br><br>
            <input type="text" id="respUsu1"><br><br
            

            <label for="respUsu2">2. ${preg2}</label><br><br>
            <input type="text" id="respUsu2"><br><br>
            

            <label for="respUsu3">3. ${preg3}</label><br><br>
            <input type="text" id="respUsu3" ><br><br>

            <label for="respUsu4">4. ${preg4}</label><br><br>
            <input type="text" id="respUsu4"><br><br>
                    

            <label for="respUsu5">5. ${preg5}</label><br><br>
            <input type="text" id="respUsu5"><br><br>
            

            <label for="respUsu6">6. ${preg6}</label><br><br>
            <input type="text" id="respUsu6" ><br><br>

            <input type="submit" value="Comprobar" id="submit">

            <br><br>

        </form>` 

}   

// BORRAR modifico algo para hacer commit

let validarRespuestas = (answ) =>{
     //respuestas buenas

    let resp1 = answ[0][0];
    let resp2 = answ[1][0];
    let resp3 = answ[2][0];
    let resp4 = answ[3][0];
    let resp5 = answ[4][0];
    let resp6 = answ[5][0];


    document.write("***COMPROBACIÓN DE LAS RESPUESTAS***");
    document.write("</br>"+"respuesta 1: " +resp1+ "</br>");
    document.write("respuesta 2: " +resp2+ "</br>");
    document.write("respuesta 3:" +resp3+ "</br>");
    document.write("respuesta 1: " +resp4+ "</br>");
    document.write("respuesta 2: " +resp5+ "</br>");
    document.write("respuesta 3:" +resp6+ "</br>");

    
    /* captura del código html lo que tenga los id siguientes (que serán las respuestas introducidas por los usuarios)
        y las guarda en variables para compararlas con las respuestas correctas*/
    let cartaSubmit = document.querySelector("#carta"); 
    
    
    cartaSubmit.addEventListener('submit', function(){

        console.log("*****RESPUESTAS ENVIADAS****");
        let rusu1 = document.querySelector("#respUsu1").value;
        let rusu2 = document.querySelector("#respUsu2").value;
        let rusu3 = document.querySelector("#respUsu3").value;
        let rusu4 = document.querySelector("#respUsu4").value;
        let rusu5 = document.querySelector("#respUsu5").value;
        let rusu6 = document.querySelector("#respUsu6").value;
        let correct = "<strong> BIEN! es:  </strong></br>";
        let incorrect = "<h2>OOOOOHHHHH era --> </h2>";
    

        if((rusu1.toLowerCase()) === resp1){
            document.write(correct + " "+ resp1 );
        }else{
            document.write(incorrect + resp1+ " **tu respuesta fue: " + rusu1);
        }

        if((rusu2.toLowerCase())=== resp2){
            document.write(correct + " "+ resp2);
        }else{
            document.write(incorrect + " "+ resp2);
        }

        if((rusu3.toLowerCase())=== resp3){
            document.write(correct +" " + resp3);
        }else{
            document.write(incorrect + " " + resp3);
        }

        if((rusu4.toLowerCase())=== resp4){
            document.write(correct+ " " + resp4);
        }else{
            document.write(incorrect+ " " + resp4);
        }

        if((rusu5.toLowerCase())=== resp5){
            document.write(correct+ " " + resp5);
        }else{
            document.write(incorrect + " " + resp5);
        }

        if((rusu6.toLowerCase())=== resp6){
            document.write(correct+ " " + resp6);
        }else{
            document.write(incorrect + " " + resp6);
        }

    });

}

            



// Crea la carta según la categoría elegida
function crearCarta(p) {
    let preg = p;
    console.log("Array de preguntas: " + preg); // PRUEBAS 
    let indice;
    let pregx = [[], [], [], [], [], []];
    let respx = [[], [], [], [], [], []];
    let aux = [[], [], [], [], [], [], [], [], [], []];

    // Genera un número aleatorio entre 0 y el indice máximo de la matriz de las preguntas
    for (let i = 0; i < 6; i++) {

        //indiceFila= indiceAleatorio(preg);
        indice = Math.floor(Math.random() * (preg.length));
        console.log("Indice aleatorio: " + indice);
        aux[i][0] = preg[indice][0]; // las preguntas se encuentran en la columna 0 de cualquier fila
        aux[i][1] = preg[indice][1]; // las respuestas se encuentran en la columna 1 de la fila de su pregunta
        pregx[i][0] = aux[i][0];
        respx[i][0] = aux[i][1];
        console.log("Preguntas aleatorias: " + pregx); // PRUEBAS
        preg.splice(indice, 1); // Eliminará la pregunta ya elegida para no repetir en la elección aleatoria
        console.log("respuestas de las preguntas: " + respx);
        console.log("Lo que queda en preg: " + preg);

    }

    mostrarPreg(pregx);
    validarRespuestas(respx);
}

// Preguntas y respuestas por categorías 
// OJO AÑADIR HASTA 8 PREGUNTAS Y RESPUESTAS POR CATEGORIA PORQUE EN LA CARTA VAN 6
let geografia = () => {
    let preguntas =
        [
            [" Capital de España? ", "madrid"],
            [" Cuántas provicians tiene la C.Valenciana? (en número)", "3"],
            [` Nombre de los puntos cardinales (separados por comas y 
            en orden desde arriba, en sentido de las manecillas del reloj)`, "norte, este, sur, oeste"],
            [" Cuántos continentes hay en el mundo? (en número)", "6"],
            [" Cuál es la montaña más alta del mundo? (con artículo el/la)", "el averest"],
            [" qué país tiene mayor número de habitantes en el mundo?", "china"],
            [" En qué país se encuentra el Taj Mahal? (con artículo)", "la india"],
            [" Cuántos países tiene África? 54, 37 o 61?", "54"],
            [" En qué hemisferio se encuentra Nigeria? Norte o Sur?", "norte"],
            [" Cuál es el estado más gfrande de los Estados Unidos?", "alaska"]
        ];

    return preguntas;
}

let arte = () => {
    let preguntas =
        [
            [" Quién pintó la Mona Lisa? (nombre y apellido)", "leonardo da vinci"],
            [" Quién pintó el Guernica? (nombre y apellido) ", "pablo picasso"],
            [" Cuáles son las flores más famosas pintadas por Van Gogh? (con artículo)", "los girasoles"]
        ];

    return preguntas;
}

let espectaculos = () => {
    let preguntas =
        [
            [" En música, a cuántos tiempos equivale una blanca? ", "2"],
            [" El piano es un instrumento de: ","cuerda"],
            [" Pelicula Disney más taquillera de la historia? ", "el rey leon"]
        ];

        return preguntas;
}

let historia = () => {
    let preguntas =
        [
            [" Nombre (sólo) del Rey de España en 2020? ", "felipe"],
            [" Cuál es el personaje más conocido de Miguel de Cervantes? ", "don quijote"],
            [` Cómo se llaman las tres carabelas que fueron a América con Cristóbal Colón 
            (separa sus nombres por comas y pon artículos en la que corresponda)?`, "santa maria, la pinta, la niña"]
        ];

        return preguntas;
}

let ciencia = () => {
    let preguntas =
        [
            [" Cuántos minutos tiene una hora? (en número) ", "60"],
            [" Cuántas patas tiene una araña? (en número)", "8"],
            [" Cuál es el río más caudaloso del mundo? (con artículo)", "el amazonas"]
        ];

        return preguntas;
}

let deporte = () => {
    let preguntas =
        [
            [" En qué deporte se utiliza un bate para darle a una pelota? (en español sin tildes)" , "beisbol"],
            [" Cómo se llama el mejor tenista español? (nombre y apellido)", "rafa nadal"],
            [" Cuantos sets tienes que ganar para ganar un partido de voleibol? (en número)", "3"]
        ];

        return preguntas;
}



// CODIGO PRINCIPAL

let eleccionUsuario;

do {
    eleccionUsuario = parseInt(elegir());

} while (eleccionUsuario < 1 || eleccionUsuario > 6);

// document.write(eleccionUsuario); // PRUEBAS

comprobar(eleccionUsuario);

