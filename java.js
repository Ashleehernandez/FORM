//Validacion del formulario//

function validacion() {

    // Obtiene el valor del campo "nombre" del formulario
    hola = document.getElementById("hola").value;
    if (hola =="") {
     // Si el campo está vacío, muestra un mensaje de error y devuelve false
    swal('Campo vacio', 'Nombre', 'error')
    // Si todos los campos están llenos, la función devuelve true (indicando que la validación fue exitosa)
    return false;
    }
    // Obtiene el valor del campo "apellido" del formulario
    mundo= document.getElementById("mundo").value;
    if (mundo ==""){
     // Si el campo está vacío, muestra un mensaje de error y devuelve false
    swal ('Campo vacio', 'Apellido', 'error')
    // Si todos los campos están llenos, la función devuelve true (indicando que la validación fue exitosa)
        return false;
    }
   
 

}

