// Mensaje si no escribes en 15s

// 1º Validación del fomrulario campos vacios

setTimeout(() => {
    let alerta = document.getElementById("alerta");
    let contenido = document.getElementById("contenido");
    let nom = document.getElementById("name");
    let inv = document.getElementById("investigador");
    let ident = document.getElementById("id");
    let sign = document.getElementById("firma");
    
    if((nom.validity.valueMissing)&& (inv.validity.valueMissing) && (ident.validity.valueMissing) && (sign.validity.valueMissing)){
        alerta.style.display = "block";
        contenido.style.display = "block";
    } else{
        //el botón enviar inicia la función validar
        document.getElementById("enviar").addEventListener('click', validar, false);
    }
    console.log("entrando en alerta");
}, 5000);

// validaciones individuales

let validarNombre = () => {
    let elemento = document.getElementById("name");
    //borrarError('errorName', elemento);
    if (!elemento.checkValidity()) {
      if(elemento.validity.valueMissing){
          error(elemento, "Debe introducir un nombre", 'errorName');
      } else if (elemento.validity.patternMismatch){
          error(elemento, "Formato correcto: 2-32 letras mayúsculas o minúsculas.", 'errorName');
     }
      return false;
    }
    return true;
  }

  let validarInvestigador = () => {
    let elemento = document.getElementById("investigador");
    //borrarError('errorInv', elemento);
    if (!elemento.checkValidity()) {
      if(elemento.validity.valueMissing){
          error(elemento, "Debe introducir un número de investigador. ", 'errorInv');
      } else if (elemento.validity.patternMismatch){
          error(elemento, "Formato correcto: 8 dígitos y una letra final.", 'errorInv');
     }
      return false;
    }
    return true;
  }

let validarId = () => {
    let elemento = document.getElementById("id");
    //borrarError('errorIdent', elemento);
    if (!elemento.checkValidity()) {
      if(elemento.validity.valueMissing){
          error(elemento, "Debe introducir un ID ", 'errorId');
      } else if (elemento.validity.patternMismatch){
          error(elemento, "Formato correcto: 1 numero de hasta 10 dígitos", 'errorId');
     }
      return false;
    }
    return true;
  }

  let validarFirma = () => {
    let elemento = document.getElementById("firma");
    //borrarError('errorFir', elemento);
    if (!elemento.checkValidity()) {
      if(elemento.validity.valueMissing){
          error(elemento, "Debe introducir un ID ", 'errorFir');
      } else if (elemento.validity.patternMismatch){
          error(elemento, "Formato correcto: empezando por S4ND1EG0 (de 8-50 caracteres) ", 'errorFir');
          document.getElementById("firma").value = "S4ND1EG0";
     }
      return false;
    }
    return true;
  }

  let error = (elemento, mensaje, lugar) => {
    document.getElementById(lugar).innerHTML = mensaje;
    document.getElementById(lugar).className = 'wrong'
    //elemento.style.border = 'solid 2px rgb(214, 86, 118)';
    elemento.focus(); // no hace falta
  }


//realizar validaciones
let validar = (e) => {

    validarNombre();
    validarInvestigador();
    validarId();
    validarFirma();
    //borrarError()
    validacionFinal()

}

let validacionFinal = () => {
    if (validarNombre && validarInvestigador && validarId && validarFirma) {
        return true;
    } else {
        //console.log("prevent default")
        e.preventDefault();
        return false;
    }
}


// 2º cuando la validación es correcta se almacenan los datos en localStorage

if (validacionFinal){
    let localStorageKeyName = ['data'];
    
    document.getElementById("enviar").addEventListener('click', () => {
        let nombre = document.getElementById("name");
        let investigador = document.getElementById("investigador");
        let id = document.getElementById("id");
        let firma = document.getElementById("firma");

        let signature = {
            nombre: nombre.value,
            investigador: investigador.value,
            id: id.value,
            firma: firma.value
        };

        // añadir al localStorage
        appendObjectToLocalStorage(signature);
    })


    function appendObjectToLocalStorage(obj) {
        let signatures = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            signatures = JSON.parse(dataInLocalStorage);
        }

        signatures.push(obj);

        localStorage.setItem(localStorageKeyName, JSON.stringify(signatures));
    }

    console.log(localStorage); // visualizar en consola el localStorage
}

 localStorage.clear(); // limipiar almacenamiento 
















