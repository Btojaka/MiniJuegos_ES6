
'use strict';
// FUNCIONES

/* Muestra por pantalla un mensaje al usuario para que elija la categoría que quiera
   en la última tirada. Guarda la elección del usuario en una variable y la devuelve.*/

let elegir = () =>
    prompt(`Elige la categoría de tu carta 1 = Geografía, 2 = Arte, 
    3 = Espectáculos, 4 = Historia, 5 = Ciencias o 6 = Deporte.`, 3);

// Ejecutará las instrucciones según la elección del usuario, se le pasa el parámetro e
let categoria = (e) => {
    let eleccion = parseInt(e); // 
    //document.write("Esta es la eleccion dentro de la funcion categoria: " + eleccion); // PRUEBAS
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

let valida = (buenas) =>{
    console.log("A valida() llega");
    let ok = true;
    let resp1 = buenas[0][0];
    let resp2 = buenas[1][0];
    let resp3 = buenas[2][0];
    let resp4 = buenas[3][0];
    let resp5 = buenas[4][0];
    let resp6 = buenas[5][0];

    let marcador = 0;
    let aciertos = 0;
    let errores = 0;

    // captura en cada variable la respuesta del usuario
    let cartaSubmit = document.querySelector("#carta");
    cartaSubmit.addEventListener('submit', function(){

        console.log("*****RESPUESTAS ENVIADAS****");

        let rusu1 = document.querySelector("#usu1").value;
        let rusu2 = document.querySelector("#usu2").value;
        let rusu3 = document.querySelector("#usu3").value;
        let rusu4 = document.querySelector("#usu4").value;
        let rusu5 = document.querySelector("#usu5").value;
        let rusu6 = document.querySelector("#usu6").value;

        document.write("***COMPROBACIÓN DE LAS RESPUESTAS***");
        
        
        if(rusu1.toLowerCase() != resp1){
            ok = false;
            errores += 1;
            
            
        }else{
            aciertos = aciertos + 1;
            marcador = aciertos;
            alert(` MARCADOR: ${marcador}`);
            
        }
        if(rusu2.toLowerCase() != resp2){
            ok = false;
            errores += 1;
            
            
        }else{
            aciertos = aciertos + 1;
            marcador = aciertos;
            alert(` MARCADOR: ${marcador}`);
            
        }
        if(rusu3.toLowerCase() != resp3){
            ok = false;
            errores += 1;
            
            
        }else{
            aciertos = aciertos + 1;
            marcador = aciertos;
            alert(` MARCADOR: ${marcador}`);
            
        }

        if(ok== false){
            document.write(`<h4> has cometido ${errores} errores`);
            alert(` MARCADOR: ${marcador}`);
            return ok;

        }
        if(rusu4.toLowerCase() != resp4){
            ok = false;
            errores += 1;
            
            
        }else{
            aciertos = aciertos + 1;
            marcador = aciertos;
            alert(` MARCADOR: ${marcador}`);
            
        }
        if(rusu5.toLowerCase() != resp5){
            ok = false;
            errores += 1;
            
            
        }else{
            aciertos = aciertos + 1;
            marcador = aciertos;
            alert(` MARCADOR: ${marcador}`);
            
        }
        if(rusu6.toLowerCase() != resp6){
            ok = false;
            errores += 1;
            
            
        }else{
            aciertos = aciertos + 1;
            marcador = aciertos;
            alert(` MARCADOR: ${marcador}`);
            
        }

    });
    

}

// Va mostrando una por una las preguntas generadas aleatoriamente (quest) de la "carta" y el usuario va contestándolas
let mostrarPreg = (quest) => {
    console.log("A mostrarPreg() llega"); // PRUEBA

    let preg1 = quest[0][0];
    let preg2 = quest[1][0];
    let preg3 = quest[2][0];
    let preg4 = quest[3][0];
    let preg5 = quest[4][0];
    let preg6 = quest[5][0];
    
    console.log("A mostrar() llega"); //PRUEBA
    //console.log(preg); PRUEBAS

    document.getElementById("formulario").innerHTML =
        `<form action="#" method= "POST" id="carta" onsubmit='return valida(this)' >

            <label for="usu1">1. ${preg1}</label><br><br>
            <input type="text" id="usu1"><br><br>

            <label for="usu2">2. ${preg2}</label><br><br>
            <input type="text" id="usu2"><br><br>

            <label for="usu3">3. ${preg3}</label><br><br>
            <input type="text" id="usu3"><br><br>

            <label for="usu4">4. ${preg4}</label><br><br>
            <input type="text" id="usu4"><br><br>

            <label for="usu5">5. ${preg5}</label><br><br>
            <input type="text" id="usu5"><br><br>

            <label for="usu6">6. ${preg6}</label><br><br>
            <input type="text" id="usu6"><br><br>

            <input type="submit" value="Comprobar" id="submit"></input>

            <br><br>`

}



// Crea la carta según la categoría elegida
function crearCarta(p) {
    let preg = p;
    console.log("Array de preguntas: " + preg); // PRUEBAS 
    let indice;
    let pregx = [[], [], [], [], [], []];
    let respx = [[], [], [], [], [], []];
    let aux = [[], [], [], [], [], [], [], [], [], []]; // matriz auxiliar

    // Genera un número aleatorio entre 0 y el indice máximo de la matriz de las preguntas
    for (let i = 0; i < 6; i++) {
    
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
    //valida(respx);
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
            [" Cuál es la montaña más alta del mundo? (con artículo el/la)", "el everest"],
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

categoria(eleccionUsuario);

