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






  },
  false
);
