document.addEventListener( 
  "DOMContentLoaded",
  function () {

    // Función para mostrar imágenes
    let rightWrong = (match, right, wrong) => {
      if (match !== null) {
        document.getElementById(right).style.display = 'block';
        document.getElementById(wrong).style.display = 'none';
      } else {
        document.getElementById(wrong).style.display = 'block';
        document.getElementById(right).style.display = 'none';
      }
    }

    // validar fecha
    let validateDate = () => {
      let date = document.getElementById('date').value;
      let regex =  /^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/\d\d\d\d [012]{0,1}[0-9]:[0-6][0-9]$/ ;
      let match = date.match(regex);
      rightWrong(match,"rightDate", "wrongDate")
    }

    // Validar el cocinero
    let validateCooker = () => {
      let cooker = document.getElementById("cooker").value;
      let regex = /^[A-Z]{2}[^\w\s]{1}[0-9]{4}/;
      let match = cooker.match(regex);
      rightWrong(match,"rightCooker", "wrongCooker")
    };
    // Validar destinatario
    let validateDest = () => {
      let dest = document.getElementById('dest').value;
      let regex = /^[A-Z]{2,3}\_[a-z]{2,}\:[0-9]{4}/;
      let match = dest.match(regex);
      rightWrong(match,"rightDest", "wrongDest")
    }

    // validar gramos
    let validateGr = () => {
      let gr = document.getElementById('gr').value;
      let match;
      if (gr >= 1000 && gr <= 5000) {
        match =  true;
      } else {
        match = null;
      }
      rightWrong(match, "rightGr", "wrongGr");
    }

    // validar composición
    let validateComposition = () => {
      let comp = document.getElementById('composition').value;
      let regex = /^[0-9]{1,}g[a-zA-Z]{1,2}\d{0,1}[a-zA-Z]{1,2}\d{0,1}/;
      let match = comp.match(regex);
      rightWrong(match,"rightComp", "wrongComp")
   }

   // añadir evento click
   document.getElementById('buttonDate').addEventListener('click', validateDate);
   document.getElementById('buttonCooker').addEventListener('click', validateCooker);
   document.getElementById('buttonDest').addEventListener('click', validateDest);
   document.getElementById('buttonGr').addEventListener('click', validateGr);
   document.getElementById('buttonComp').addEventListener('click', validateComposition);

  },
  false
);
