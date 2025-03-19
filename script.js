document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let nombre = document.getElementById("nombre").value;
        let errorNombre = document.getElementById("errorNombre");

        let email = document.getElementById("email").value;
        let errorEmail = document.getElementById("errorEmail");

        let contra = document.getElementById("contraseña").value;
        let errorContra = document.getElementById("errorContraseña");

        let confirmar = document.getElementById("confirmar").value;
        let errorConfirmar = document.getElementById("errorConfirmar");

        let valido = true;

        // Validar nombre
        if (nombre.length < 3) {
            errorNombre.innerHTML = "Debe tener al menos 3 caracteres";
            valido = false;
        } else {
            errorNombre.innerHTML = "";
        }

        // Validar email
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            errorEmail.innerHTML = "Debe ser un email válido";
            valido = false;
        } else {
            errorEmail.innerHTML = "";
        }

        // Validar contraseña
        let regexPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!regexPassword.test(contra)) {
            errorContra.innerHTML = "Debe tener al menos 8 caracteres, un número y una letra";
            valido = false;
        } else {
            errorContra.innerHTML = "";
        }

        // Validar contraseña
        if (contra !== confirmar) {
            errorConfirmar.innerHTML = "Las contraseñas no coinciden";
            valido = false;
        } else {
            errorConfirmar.innerHTML = "";
        }

        if (!valido) {
            return;
        }

        alert("Registro exitoso!");
        form.reset();
    });
});

