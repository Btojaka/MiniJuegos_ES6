'use strict';

// Agraga el formulario con las preguntas aleatorias al HTML manipulando el DOM



// Objetos que contiene las preguntas y respuestas de cada categoría 
const geo = [
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

// Introduce formulario en HTML y lo muestra por pantalla cuando se le invoque
let imprimirForm = (cat) => {
    let pHTML = cat
    console.log(pHTML.length);
    // console.log(pHTML[5].pregunta); // PRUEBAS
    let preg = [];
    let resp = [];
    let comodin= "";
    let comodin2 = "";

    for (let i = 0; i < 6; i++) {
        // Genera indice aleatorio
        let indice = Math.floor(Math.random() * (pHTML.length));
        console.log(indice);
        console.log(pHTML[indice].pregunta);
        
        comodin = (pHTML[indice].pregunta); // valor de la pregunta aleatorio en cada iteración
        console.log("comodin: "+ comodin);
        preg[i] = comodin;
        comodin2 = (pHTML[indice].respuesta); // valor de la pregunta aleatorio en cada iteración
        resp[i] = comodin2;
        pHTML.splice(indice, 1);
        ///aux2.fill(comodin, i, i); // rellena el array auxiliar con el valor de cada iteración, en la posición i
        //resp[i] = aux2[i];
        console.log("Pregunta: " + preg[i]);
        console.log("Respuesta buena: " + resp[i]);

        console.log("ALEATORIAS: " + preg);
        console.log("BUENAS:  " +resp);


    }

    /*document.getElementById("formulario").innerHTML =
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

            <br><br>`;*/

}

imprimirForm(geo);
