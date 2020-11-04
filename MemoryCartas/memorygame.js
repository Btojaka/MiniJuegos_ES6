document.addEventListener("DOMContentLoaded", () => {

    // Obtiene el modo
    let modal = document.getElementById("miModo");
    
    // Cuando el ususario clica en cualquier sitio fuera, se cierra.
    window.onclick = function(e) {
        if (e.target == modal) {
        modal.style.display = "none";
        }
    };

    // Opciones de las cartas
    const wizard = {
        name: "wizard",
        img: "./images/1wizard.svg"
    };
    const dwarf = {
        name: "dwarf",
        img: "./images/2dwarf.svg"
    };
    const elf = {
        name: "elf",
        img: "./images/3elf.svg"
    };
    const queen = {
        name: "queen",
        img: "./images/4queen.svg"
    };
    const prince = {
        name: "prince",
        img: "./images/5prince.svg"
    };
    const frogPrince = {
        name: "frogPrince",
        img: "./images/6fprince.svg"
    };
    const fairy = {
        name: "fairy",
        img: "./images/7fairy.svg"
    };
    const unicorn = {
        name: "unicorn",
        img: "./images/8unicorn.svg"
    };

    // Array de las imagenes para las cartas 
    const arrayCartas = [
        wizard,
        dwarf,
        elf,
        queen,
        prince,
        frogPrince,
        fairy,
        unicorn,
        wizard,
        dwarf,
        elf,
        queen,
        prince,
        frogPrince,
        fairy,
        unicorn,
    ];

    //array PRUEBAS 
    //const arrayCartas = [wizard, dwarf, wizard, dwarf];

    // Función que ordena las cartas aleatoriamente
    function ordenaCartas() {
        arrayCartas.sort(() => 0.5 - Math.random());
    }

    ordenaCartas();

    const cuadricula = document.querySelector(".cuadricula");
    const verResultado = document.querySelector("#resultado");

    let cartaElegida = [];
    let cartaElegidaId = [];
    const cartasGanadas = [];

    // temporizador
    let tempo = 0;
    setInterval(() => {
        tempo++;
        console.log(tempo);
        document.querySelector("#tempo").textContent = tempo;
    }, 1000);

    // contador
    let contador = 0;
    document.querySelector("#contador").textContent = contador;

    // Cear tablero
    function crearTablero() {
        for (let i = 0; i < arrayCartas.length; i++) {
        let carta = document.createElement("img");
        carta.setAttribute("src", "./images/colors.svg");
        carta.setAttribute("data-id", i);
        carta.classList.add("mystyle");
        carta.addEventListener("click", girarCarta);
        cuadricula.appendChild(carta);
        }
    }

    

    // Con esta función se gira la carta
    function girarCarta() {
        let cartasElegidas = [];
        let cartaId = this.getAttribute("data-id");
        cartaElegida.push(arrayCartas[cartaId].name);
        cartaElegidaId.push(cardId);
        this.setAttribute("src", arrayCartas[cartaId].img);
        contador++;
        document.querySelector("#contador").textContent = contador;
        if (cartasElegidas.length === 2) {
        setTimeout(coincidencia, 500);
        }
    }

    crearTablero();


});
