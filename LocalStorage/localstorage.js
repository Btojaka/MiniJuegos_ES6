

//obtener tu form desde el HTML
let form = document.getElementById('miFormulario').elements;
for(let i = 0; i<= form.length - 1; i++){
    //aquí las validaciones 
    // PRUEBAS solo con inputs de texto.
    if(form[i].type == 'text'){
        console.log(form[i].value);
        //la key sera el id del elemento, lo siguiente el valor
        localStorage.setItem(form[i].id, JSON.stringify(form[i].value));
    }
}
//para probar que se han guardado
console.log(localStorage);