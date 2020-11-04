'use strict';

/* Muestra por pantalla un mensaje al usuario para que elija la categoría que quiera
   en la última tirada. Guarda la elección del usuario en una variable y la devuelve.*/

let elegir = () =>
    prompt(`Elige la categoría de tu carta 1 = Geografía, 2 = Arte, 
    3 = Espectáculos, 4 = Historia, 5 = Ciencias o 6 = Deporte.`, 1);

// Ejecutará las instrucciones según la elección del usuario, se le pasa el parámetro e
let categoria = (elec) => {
    let eleccion = parseInt(elec); // 
    //document.write("Esta es la eleccion dentro de la funcion categoria: " + eleccion); // PRUEBAS
    switch (eleccion) {
        case 1:
            alert("Has elegido Geografía");
            let geo = geografia;
            crearCarta(geo);
            break;
        case 2:
            alert("Has elegido Arte");
            let art = arte;
            crearCarta(art);
            break;
        case 3:
            alert("Has elegido Espectáculos");
            let esp = espectaculos;
            crearCarta(esp);
            break;
        case 4:
            alert("Has elegido Historia");
            let his = historia;
            crearCarta(his);
            break;
        case 5:
            alert("Has elegido Ciencias");
            let cie = ciencia;
            crearCarta(cie);
            break;
        case 6:
            alert("Has elegido Deporte");
            let dep = deporte;
            crearCarta(dep);
            break;
        default:
            alert("estás en el default, algo falló")
    }
}

// Preguntas y respuestas de cada categoría 
const geografia = [
    {
        pregunta: " Capital de España? ",
        respuesta: "madrid"
    },
    {
        pregunta: " Cuántas provicians tiene la C.Valenciana? (en número)",
        respuesta: "3"
    },
    {
        pregunta: " Nombre de los puntos cardinales (separados por comas y en orden desde arriba, en sentido de las manecillas del reloj)",
        respuesta: "norte, este, sur, oeste"
    },
    {
        pregunta: " Cuántos continentes hay en el mundo? (en número)",
        respuesta: "6"
    },
    {
        pregunta: " Cuál es la montaña más alta del mundo? (con artículo el/la)",
        respuesta: "el everest"
    },
    {
        pregunta: " Qué país tiene mayor número de habitantes en el mundo?",
        respuesta: "china"
    },
    {
        pregunta: " En qué país se encuentra el Taj Mahal? (con artículo)",
        respuesta: "la india"
    },
    {
        pregunta: " Cuántos países tiene África? 54, 37 o 61?",
        respuesta: "54"
    },
    {
        pregunta: " En qué hemisferio se encuentra Nigeria? Norte o Sur?",
        respuesta: "norte"
    },
    {
        pregunta: " Cuál es el estado más grande de los Estados Unidos?",
        respuesta: "alaska"
    }
];

const arte = [
    {
        pregunta: " Quién pintó la Mona Lisa? (nombre y apellido)",
        respuesta: "leonardo da vinci"
    },
    {
        pregunta: " Quién pintó el Guernica? (nombre y apellido) ",
        respuesta: "pablo picasso"
    },
    {
        pregunta: " Cuáles son las flores más famosas pintadas por Van Gogh? (con artículo)",
        respuesta: "los girasoles"
    },
    {
        pregunta: " GEOCuántos continentes hay en el mundo? (en número)",
        respuesta: "6"
    },
    {
        pregunta: " GEOCuál es la montaña más alta del mundo? (con artículo el/la)",
        respuesta: "el everest"
    },
    {
        pregunta: " GEOQué país tiene mayor número de habitantes en el mundo?",
        respuesta: "china"
    },
    {
        pregunta: " GEOEn qué país se encuentra el Taj Mahal? (con artículo)",
        respuesta: "la india"
    },
    {
        pregunta: " GEOCuántos países tiene África? 54, 37 o 61?",
        respuesta: "54"
    },
    {
        pregunta: " GEOEn qué hemisferio se encuentra Nigeria? Norte o Sur?",
        respuesta: "norte"
    },
    {
        pregunta: " GEOCuál es el estado más grande de los Estados Unidos?",
        respuesta: "alaska"
    }
];

const espectaculos = [
    {
        pregunta: " En música, a cuántos tiempos equivale una blanca? ",
        respuesta: "2"
    },
    {
        pregunta: " El piano es un instrumento de: ",
        respuesta: "cuerda"
    },
    {
        pregunta: " Pelicula Disney más taquillera de la historia? ",
        respuesta: "el rey leon"
    },
    {
        pregunta: " ESPEC el mundo? (en número)",
        respuesta: "6"
    },
    {
        pregunta: " ESP es la montaña más alta del mundo? (con artículo el/la)",
        respuesta: "el everest"
    },
    {
        pregunta: " ESP país tiene mayor número de habitantes en el mundo?",
        respuesta: "china"
    },
    {
        pregunta: " ESP qué país se encuentra el Taj Mahal? (con artículo)",
        respuesta: "la india"
    },
    {
        pregunta: " ESP países tiene África? 54, 37 o 61?",
        respuesta: "54"
    },
    {
        pregunta: " ESP qué hemisferio se encuentra Nigeria? Norte o Sur?",
        respuesta: "norte"
    },
    {
        pregunta: " ESP es el estado más grande de los Estados Unidos?",
        respuesta: "alaska"
    }
];

const historia = [
    {
        pregunta: " Nombre (sólo) del Rey de España en 2020? ",
        respuesta: "felipe"
    },
    {
        pregunta: " Cuál es el personaje más conocido de Miguel de Cervantes? ", 
        respuesta: "don quijote"
    },
    {
        pregunta: ` Cómo se llaman las tres carabelas que fueron a América con Cristóbal Colón 
        (separa sus nombres por comas y pon artículos en la que corresponda)?`, 
        respuesta: "santa maria, la pinta, la niña"
    },
    {
        pregunta: " HIS el mundo? (en número)",
        respuesta: "6"
    },
    {
        pregunta: " EHISSP es la montaña más alta del mundo? (con artículo el/la)",
        respuesta: "el everest"
    },
    {
        pregunta: " HIS país tiene mayor número de habitantes en el mundo?",
        respuesta: "china"
    },
    {
        pregunta: " HIS qué país se encuentra el Taj Mahal? (con artículo)",
        respuesta: "la india"
    },
    {
        pregunta: " HIS países tiene África? 54, 37 o 61?",
        respuesta: "54"
    },
    {
        pregunta: " HIS qué hemisferio se encuentra Nigeria? Norte o Sur?",
        respuesta: "norte"
    },
    {
        pregunta: " HIS es el estado más grande de los Estados Unidos?",
        respuesta: "alaska"
    }
];

const ciencia = [
    {
        pregunta: " Cuántos minutos tiene una hora? (en número) ",
        respuesta: "60"
    },
    {
        pregunta: " Cuántas patas tiene una araña? (en número)", 
        respuesta: "8"
    },
    {
        pregunta: " Cuál es el río más caudaloso del mundo? (con artículo)", 
        respuesta: "el amazonas"
    },
    {
        pregunta: " CI el mundo? (en número)",
        respuesta: "6"
    },
    {
        pregunta: " CI es la montaña más alta del mundo? (con artículo el/la)",
        respuesta: "el everest"
    },
    {
        pregunta: " CI país tiene mayor número de habitantes en el mundo?",
        respuesta: "china"
    },
    {
        pregunta: " CI qué país se encuentra el Taj Mahal? (con artículo)",
        respuesta: "la india"
    },
    {
        pregunta: " CI países tiene África? 54, 37 o 61?",
        respuesta: "54"
    },
    {
        pregunta: " CI qué hemisferio se encuentra Nigeria? Norte o Sur?",
        respuesta: "norte"
    },
    {
        pregunta: " CI es el estado más grande de los Estados Unidos?",
        respuesta: "alaska"
    }
];

const deporte = [
    {
        pregunta: " En qué deporte se utiliza un bate para darle a una pelota? (en español sin tildes)" , 
        respuesta: "beisbol"
    },
    {
        pregunta: " Cómo se llama el mejor tenista español? (apellido)",
        respuesta: "nadal"
    },
    {
        pregunta: " Cuantos sets tienes que ganar para ganar un partido de voleibol? (en número)", 
        respuesta: "3"
    },
    {
        pregunta: " DE el mundo? (en número)",
        respuesta: "6"
    },
    {
        pregunta: " DE es la montaña más alta del mundo? (con artículo el/la)",
        respuesta: "el everest"
    },
    {
        pregunta: " DE país tiene mayor número de habitantes en el mundo?",
        respuesta: "china"
    },
    {
        pregunta: " DE qué país se encuentra el Taj Mahal? (con artículo)",
        respuesta: "la india"
    },
    {
        pregunta: " DE países tiene África? 54, 37 o 61?",
        respuesta: "54"
    },
    {
        pregunta: " DE qué hemisferio se encuentra Nigeria? Norte o Sur?",
        respuesta: "norte"
    },
    {
        pregunta: " DE es el estado más grande de los Estados Unidos?",
        respuesta: "alaska"
    }
];

// Función que crea el formulario según la categoría elegida por el usuario en HTML y lo muestra por pantalla cuando se le invoque
let crearCarta = (cat) => {
    let pHTML = cat
    console.log(pHTML.length);
    // console.log(pHTML[5].pregunta); // PRUEBAS
    let preg = [];
    let resp = [];
    let comodin= "";
    let comodin2 = "";

    for (let i = 0; i < 6; i++) {
        
        let indice = Math.floor(Math.random() * (pHTML.length)); // Genera indice aleatorio
        console.log(indice);
        console.log(pHTML[indice].pregunta);
        
        comodin = (pHTML[indice].pregunta); // valor de la pregunta aleatorio en cada iteración
        console.log("comodin: "+ comodin);
        preg[i] = comodin;
        comodin2 = (pHTML[indice].respuesta); // valor de la pregunta aleatorio en cada iteración
        resp[i] = comodin2;
        pHTML.splice(indice, 1); // Elimina la pregunta y respuesta que acaba de salir para no repetirla en la siguiente iteración

        console.log("Pregunta: " + preg[i]);
        console.log("Respuesta buena: " + resp[i]);

        console.log("ALEATORIAS: " + preg);
        console.log("BUENAS:  " +resp);


    }

    document.getElementById("formulario").innerHTML =
        `<form action="#" method= "POST" id="carta" onsubmit='return false;' >

            <label for="usu1">1. ${preg[0]}</label><br><br>
            <input type="text" id="usu1"><br><br>

            <label for="usu2">2. ${preg[1]}</label><br><br>
            <input type="text" id="usu2"><br><br>

            <label for="usu3">3. ${preg[2]}</label><br><br>
            <input type="text" id="usu3"><br><br>

            <label for="usu4">4. ${preg[3]}</label><br><br>
            <input type="text" id="usu4"><br><br>

            <label for="usu5">5. ${preg[4]}</label><br><br>
            <input type="text" id="usu5"><br><br>

            <label for="usu6">6. ${preg[5]}</label><br><br>
            <input type="text" id="usu6"><br><br>

            <input type="submit" value="Comprobar" id="submit"></input>

            <br><br>`;

}


//  **** CODIGO PRINCIPAL ****

let eleccionUsuario;

do {
    eleccionUsuario = parseInt(elegir());

} while (eleccionUsuario < 1 || eleccionUsuario > 6); // Se ejecuta hasta que introduzca un valor válido

// document.write(eleccionUsuario); // PRUEBAS

categoria(eleccionUsuario);
