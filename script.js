document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro");
    const botonModo = document.getElementById("modoOscuro");
    const body = document.body;

    if (localStorage.getItem("modoOscuro") === "activado") {
        body.classList.add("modo-oscuro");
        botonModo.textContent = "☀️ Modo Claro";
    }

    botonModo.addEventListener("click", function () {
        body.classList.toggle("modo-oscuro");
        localStorage.setItem("modoOscuro", body.classList.contains("modo-oscuro") ? "activado" : "desactivado");
        botonModo.textContent = body.classList.contains("modo-oscuro") ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let valido = true;

        if (!ValidarNombre()) valido = false;
        if (!ValidarEmail()) valido = false;
        if (!ValidarContraseña()) valido = false;
        if (!ValidarContraseñasIguales()) valido = false;

        if (valido) {
            alert("Registro exitoso!");
            form.reset();
        }
    });
});

        // Validar nombre
        function ValidarNombre() {
            let nombre = document.getElementById("nombre").value;
            let errorNombre = document.getElementById("errorNombre");
            let valido = true;

            if (nombre.length < 3) {
                errorNombre.textContent = "Debe tener mínimo 3 caracteres";
                valido = false;
            } else {
                errorNombre.textContent = "";
            }

            return valido;
        }

        // Validar email
        function ValidarEmail() {
            let email = document.getElementById("email").value;
            let errorEmail = document.getElementById("errorEmail");
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let valido = true;

            if (!regex.test(email)) {
                errorEmail.textContent = "Debe ser un email válido";
                valido = false;
            } else {
                errorEmail.textContent = "";
            }

            return valido;
        }

        // Validar contraseña
        function ValidarContraseña() {
            let contra = document.getElementById("contraseña").value;
            let errorContra = document.getElementById("errorContraseña");
            let regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
            let valido = true;

            if (!regex.test(contra)) {
                errorContra.textContent = "Debe tener mínimo 8 caracteres, al menos un número y una letra";
                valido = false;
            } else {
                errorContra.textContent = "";
            }

            return valido;
        }

        // Validar que las contraseñas sean iguales
        function ValidarContraseñasIguales() {
            let contra = document.getElementById("contraseña").value;
            let confirmar = document.getElementById("confirmar").value;
            let errorConfirmar = document.getElementById("errorConfirmar");
            let valido = true;

            if (contra !== confirmar || confirmar === "") {
                errorConfirmar.textContent = "Las contraseñas no coinciden";
                valido = false;
            } else {
                errorConfirmar.textContent = "";
            }

            return valido;
        }
