document.getElementById("formulario").addEventListener("submit", function(event) {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmarContraseña").value;

    let errorNombre = document.getElementById("error-nombre");
    let errorEmail = document.getElementById("error-email");
    let errorPassword = document.getElementById("error-password");
    let errorConfirmPassword = document.getElementById("error-confirmarContraseña");

    let valido = true;

    // Validar nombre
    if (nombre.length < 3) {
        errorNombre.textContent = "Debe tener al menos 3 caracteres";
        valido = false;
    } else {
        errorNombre.textContent = "";
    }

    // Validar email
    if (!email.includes("@") || !email.includes(".")) {
        errorEmail.textContent = "Ingrese un email válido";
        valido = false;
    } else {
        errorEmail.textContent = "";
    }

    // Validar contraseña
    if (password.length < 8) {
        errorPassword.textContent = "Debe tener al menos 8 caracteres";
        valido = false;
    } else {
        errorPassword.textContent = "";
    }

    // Validar confirmación de contraseña
    if (password !== confirmPassword) {
        errorConfirmPassword.textContent = "Las contraseñas no coinciden";
        valido = false;
    } else {
        errorConfirmPassword.textContent = "";
    }

    // Si hay errores, detener el envío del formulario
    if (!valido) {
        event.preventDefault();
    } else {
        alert("Registro exitoso!");
    }
});
