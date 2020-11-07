
/* Muestra mensaje al usuario para que elija la categoría*/

    let elegir = () =>
        prompt(`Elige la categoría de tu carta 1 = Geografía, 2 = Arte, 
        3 = Espectáculos, 4 = Historia, 5 = Ciencias o 6 = Deporte.`, 1);

    // según la elección del usuario se ejecuta cada caso
    let categoria = (elec) => {
        let eleccion = parseInt(elec);  // eleccion del usuario
        let cat;                        // preguntas aleatorias categoría
        let answ;                       // respuestas aleatorias categoría

        switch (eleccion) {
            case 1:
                alert("Has elegido Geografía");
                cat = geografia;
                answ = crearCarta(cat);
                validaResp(answ);
                break;
            case 2:
                alert("Has elegido Arte");
                cat = arte;
                answ =crearCarta(cat);
                validaResp(answ);
                break;
            case 3:
                alert("Has elegido Espectáculos");
                cat = espectaculos;
                answ = crearCarta(cat);
                validaResp(answ);
                break;
            case 4:
                alert("Has elegido Historia");
                cat = historia;
                answ = crearCarta(cat);
                validaResp(answ);
                break;
            case 5:
                alert("Has elegido Ciencias");
                let cie = ciencia;
                answ = crearCarta(cie);
                validaResp(answ);
                break;
            case 6:
                alert("Has elegido Deporte");
                let dep = deporte;
                answ = crearCarta(dep);
                validaResp(answ);
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

    const verResultado = document.querySelector("#resultado");  // Puntuación

    let preg = [];
    let resp = [];
    let pHTML = [];
    // La carta es un formulario
    let crearCarta = (cat) => {
        pHTML = cat;
        console.log(pHTML.length);
        console.log("pHTML: " +(pHTML.pregunta)); // PRUEBAS
        

        for (let i = 0; i < 6; i++) {
            
            let indice = Math.floor(Math.random() * (pHTML.length)); // Genera indice aleatorio 

            preg[i] = (pHTML[indice].pregunta); // pregunta aleatorio cada iteración
            resp[i] = (pHTML[indice].respuesta); // respuesta buena cada iteración

            pHTML.splice(indice, 1); // Elimina la pregunta y respuesta para no repetirla en la siguiente iteración

            console.log("Pregunta: " + preg[i]);  // PRUEBAS 
            console.log("Respuesta buena: " + resp[i]); // PRUEBAS

            console.log("ALEATORIAS: " + preg); // PRUEBAS 
            console.log("BUENAS:  " +resp); // PRUEBAS 


        }
        // crea el formulario
        document.getElementById("formulario").innerHTML =
            `<form action="#" method= "POST" id="carta" onsubmit='return false;' >

                <label for="usu1">1. ${preg[0]}</label><br><br>
                <input type="text" id="usu1"><br><br>
                <p id="0"></p>

                <label for="usu2">2. ${preg[1]}</label><br><br>
                <input type="text" id="usu2"><br><br>
                <p id="1"></p>

                <label for="usu3">3. ${preg[2]}</label><br><br>
                <input type="text" id="usu3"><br><br>
                <p id="2"></p>

                <label for="usu4">4. ${preg[3]}</label><br><br>
                <input type="text" id="usu4"><br><br>
                <p id="3"></p>

                <label for="usu5">5. ${preg[4]}</label><br><br>
                <input type="text" id="usu5"><br><br>
                <p id="4"></p>

                <label for="usu6">6. ${preg[5]}</label><br><br>
                <input type="text" id="usu6"><br><br>
                <p id="5"></p>

                <input type="submit" value="Comprobar" id="submit"></input>

                <br><br>`

        return resp; // devuelve el array de respuestas buenas generado

    }

    let aciertos = 0;
    let fallos = 0;

    let validaResp = (answ) => {
            // captura en cada variable la respuesta del usuario
        let cartaSubmit = document.querySelector("#carta");
        cartaSubmit.addEventListener('submit', ()=>{



        let respBuenas = answ;
        let rusu1 = document.querySelector("#usu1").value;
        let rusu2 = document.querySelector("#usu2").value;
        let rusu3 = document.querySelector("#usu3").value;
        let rusu4 = document.querySelector("#usu4").value;
        let rusu5 = document.querySelector("#usu5").value;
        let rusu6 = document.querySelector("#usu6").value;
        let rusu = [rusu1, rusu2, rusu3, rusu4, rusu5, rusu6]; // Array de respuestas que introduce el usuario
        

        for(let i=0; aciertos<4 || fallos<3; i++){
            
            let element = rusu[i];
            let buena = respBuenas[i];

            console.log("ususario: "+element);
            console.log("LA BUENA: "+buena);
            //borrarError(i);

            if(element === "" || element === null){ // si la respuesta está en blanco o nula

            }else if(element.toLowerCase() != buena){ // si la respuesta es incorrecta
                error = (buena, i);
                fallos++;
            }else{
                correcta = (i); // si la respuesta es correcta
                aciertos++;
            }

        }
        if (aciertos >= 4){
            // la alerta de ganar aparece
            document.getElementById("ganar").style.display = "block";
        }else if(fallos >= 3){
            // la alerta de perder aparece
            document.getElementById("perder").style.display = "block";
        }
    });
}


    // Cuando click en Nueva partida, todo vuelve a comenzar
    document.getElementById("miboton").addEventListener("click", () => {
        window.location.reload()
    });

    // let borrarError = (parrafo) => {
    //     document.getElementById(parrafo).innerHTML = "";
    //     // elemento.style.border = 'solid 1px #ccc';
    // }
    
    // Mensaje debajo de cada input
    let error = (mensaje, parrafo) => {
        const mns = mensaje;
        document.getElementById(parrafo).innerHTML = `La respuesta correcta es: ${mns}`;
        document.getElementById(parrafo).className = 'error' // no me funciona
        // elemento.style.border = 'solid 2px rgb(214, 86, 118)'; // sí funciona
        //elemento.focus(); no hace falta
    }

    let correcta = (parrafo) => {
        document.getElementById(parrafo).innerHTML ="CORRECTO";
        document.getElementById(parrafo).className = 'acierto';
        // elemento.style.border = 'solid 2px rgb(7, 179, 36)';
    }


//  **** CODIGO PRINCIPAL ****

let eleccionUsuario;

do {
    eleccionUsuario = parseInt(elegir());

} while (eleccionUsuario < 1 || eleccionUsuario > 6); // Se ejecuta hasta que introduzca un valor válido

categoria(eleccionUsuario);