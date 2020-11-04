document.addEventListener("DOMContentLoaded", () => {

    // Se obtiene el modo
    let modal = document.getElementById("miModo");
    
    // Cuando el ususario clica en cualquier sitio fuera, se cierra.
    window.onclick = function(e) {
        if (e.target == modal) {
        modal.style.display = "none";
        }
    };

    //Opciones de las cartas
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
    const cardArray = [
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
    //const cardArray = [wizard, dwarf, wizard, dwarf];

    // Función que ordena las cartas aleatoriamente
    function ordenaCartas() {
        cardArray.sort(() => 0.5 - Math.random());
    }

    ordenaCartas();

    
});
