// Función para validar el formulario
function validarFormulario() {
    
    var nombre = document.getElementById("nombre").value;
    var errorNombre = document.getElementById("errorNombre");

    var email = document.getElementById("email").value;
    var errorEmail = document.getElementById("errorEmail");

    var contraseña = document.getElementById("contraseña").value;
    var errorContraseña = document.getElementById("errorContraseña");

    var confirmar = document.getElementById("confirmar").value;
    var errorConfirmar = document.getElementById("errorConfirmar");


    let valido = false;

    // Validación del nombre
    if (nombre.length < 3) {
        errorNombre.innerHTML = "Debe tener al menos 3 caracteres";
    } else {
        errorNombre.innerHTML = "";
    }

    // Validación del email
    if (!email.includes("@") || !email.includes(".")) {
        errorEmail.innerHTML = "Debe ser un email válido";
    } else {
        errorEmail.innerHTML = "";
    }

    // Validación de la contraseña
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!regexPassword.test(contraseña)) {
        errorContraseña.innerHTML = "Debe tener al menos 8 caracteres, un número y una letra";
    } else {
        errorContraseña.innerHTML = "";
    }

    // Validación de confirmación de contraseña
    if (password !== confirmar) {
        errorConfirmar.innerHTML = "Las contraseñas no coinciden";
    } else{
        enviarForm('formulario');
        valido = true;
    }
    return valido;
}

function enviarForm(formulario){
    document.getElementById(formulario).submit();
}   
