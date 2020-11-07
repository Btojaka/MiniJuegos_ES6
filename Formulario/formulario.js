document.addEventListener(
  "DOMContentLoaded",
  function () {
    //SELECCION DEL FORMULARIO

    //Conociendo el id
    let formulario = document.getElementById("miFormulario");

    let validarId = () => {
      let elemento = document.getElementById("ident");
      borrarError('errorIdent', elemento);
      if (!elemento.checkValidity()) {
        if(elemento.validity.valueMissing){
            error2(elemento, "Debe introducir un identificador", 'errorIdent');
        } else if (elemento.validity.patternMismatch){
            error2(elemento, "Formato correcto: 1 letra, 8 cifras y 1 letra.", 'errorIdent');
       }
        return false;
      }
      return true;
    }

    let validarNombre = () => {
      let elemento = document.getElementById("name");
      borrarError('errorName', elemento);
      if (!elemento.checkValidity()) {
        if(elemento.validity.valueMissing){
            error2(elemento, "Debe introducir un nombre", 'errorName');
        } else if (elemento.validity.patternMismatch){
            error2(elemento, "El nombre debe de tener menos de 50 letras", 'errorName');
       }
        return false;
      }
      return true;
    }

    let validarFecha = () => {
      let elemento = document.getElementById("date");
      borrarError('errorDate', elemento);
      if (!elemento.checkValidity()) {
        if(elemento.validity.valueMissing){
            error2(elemento, "Debe introducir una fecha", 'errorDate');
        }
        return false
      }
      return true;
    }

    let validarEmail = () => {
      let elemento = document.getElementById("email");
      borrarError('errorEmail', elemento);
      if (!elemento.checkValidity()) {
        if(elemento.validity.valueMissing){
            error2(elemento, "Debe introducir un email", 'errorEmail');
        } else if (elemento.validity.patternMismatch){
            error2(elemento, "Formato correcto: nombre@mail.com", 'errorEmail');
       }
        return false;
      }
      return true;
    }

    let validarTel = () => {
      let elemento = document.getElementById("tel");
      borrarError('errorTel', elemento);
      if (!elemento.checkValidity()) {
        if (elemento.validity.patternMismatch){
            error2(elemento, "Formato teléfono +34-612345678", 'errorTel');
       }
        return false;
      }
      
      return true;
      
    }


    let validarClub = () => {
      let elemento = document.getElementById("nSocio");
      borrarError('errorNsocio', elemento)
      if (!elemento.checkValidity()) {
        if(elemento.validity.rangeOverflow) {
          error2(elemento, "el número debe de ser menor a 99999", 'errorNsocio');
        } else if (elemento.validity.rangeUnderflow) {
          error2(elemento, "el número debe de ser mayor a 10000", 'errorNsocio');
        }
        return false;
      }
      return true;
    }

    //realizar validaciones
    let validar = (e) => {
      validarId();
      validarNombre();
      validarFecha();
      validarTel();
      validarEmail();
      //borrarError()
      validacionFinal()

    }

    let validacionFinal = () => {
      if(validarId && validarNombre && validarFecha && validarTel &&validarEmail) {
        return true; 
    } else {
      //console.log("prevent default")
      e.preventDefault();
      return false;
    }
    }


    //error debajo del input
    let error2 = (elemento, mensaje, parrafo) => {
      document.getElementById(parrafo).innerHTML = mensaje;
      document.getElementById(parrafo).className = 'wrong'
      elemento.style.border = 'solid 2px rgb(214, 86, 118)';
      //elemento.focus(); no hace falta
    }

    let borrarError = (mensaje, elemento) => {
      document.getElementById(mensaje).innerHTML = "";
      elemento.style.border = '1px solid #ccc';
     
    }

    //el botón enviar inicia la función validar
    document.getElementById("enviar").addEventListener('click', validar, false);


    //funcionalidad del checkbox para mostrar datos del club
    let checkBox = document.getElementById("skiClub");
    let displayCheck = () => {
      let clubData = document.getElementById("clubData");
      if (checkBox.checked) {
        clubData.style.display = "block";
      } else {
        clubData.style.display = "none";
      }
    };
    checkBox.addEventListener("click", displayCheck);
    

    //evento para validar el nº socio al rellenar input
    document.getElementById('nSocio').addEventListener('change', validarClub);

  },
  false
);