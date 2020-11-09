
// 1º Validación del fomrulario

// validaciones individuales

let validarNombre = () => {
    let elemento = document.getElementById("name");
    //borrarError('errorName', elemento);
    if (!elemento.checkValidity()) {
      if(elemento.validity.valueMissing){
          error2(elemento, "Debe introducir un nombre", 'errorName');
      } else if (elemento.validity.patternMismatch){
          error2(elemento, "Formato correcto: 2-32 letras mayúsculas o minúsculas.", 'errorName');
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

//el botón enviar inicia la función validar
document.getElementById("enviar").addEventListener('click', validar, false);

if (validacionFinal){
    //obtener tu form desde el HTML 
    let nombre = document.getElementById("name");
    let investigador = document.getElementById("investigador");
    let id = document.getElementById("id");
    let firma = document.getElementById("firma");
    let password = document.getElementById("password");

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('investigador', investigador);
    localStorage.setItem('ID', id);
    localStorage.setItem('firma', firma);
    localStorage.setItem('password', password);
        
//para probar que se han guardado
console.log(localStorage);
}



