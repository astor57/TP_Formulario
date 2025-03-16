// Función para validar el formulario
function validarFormulario() {
    
    let nombre = document.getElementById("nombre").value;
    let errorNombre = document.getElementById("errorNombre");

    let email = document.getElementById("email").value;
    let errorEmail = document.getElementById("errorEmail");

    let contraseña = document.getElementById("contraseña").value;
    let errorContraseña = document.getElementById("errorContraseña");

    let confirmar = document.getElementById("confirmar").value;
    let errorConfirmar = document.getElementById("errorConfirmar");


    let valido = true;

    // Validación del nombre
    if (nombre.length < 3) {
        errorNombre.innerHTML = "Debe tener al menos 3 caracteres";
        valido = false;
    } else {
        errorNombre.innerHTML = "";
    }

    // Validación del email
    if (!email.includes("@") || !email.includes(".")) {
        errorEmail.innerHTML = "Debe ser un email válido";
        valido = false;
    } else {
        errorEmail.innerHTML = "";
    }

    // Validación de la contraseña
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!regexPassword.test(contraseña)) {
        errorContraseña.innerHTML = "Debe tener al menos 8 caracteres, un número y una letra";
        valido = false;
    } else {
        errorContraseña.innerHTML = "";
    }

    // Validación de confirmación de contraseña
    if (password !== confirmar) {
        errorConfirmar.innerHTML = "Las contraseñas no coinciden";
        valido = false;
    } else {
        errorConfirmar.innerHTML = "";
    }

    return valido; // Si es falso, el formulario no se envía
}
