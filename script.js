document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro");
    const botonModo = document.getElementById("modoOscuro");
    const body = document.body;

    if (localStorage.getItem("modoOscuro") === "activado") 
    {
        body.classList.add("modo-oscuro");
        botonModo.textContent = "☀️ Modo Claro";
    }

    botonModo.addEventListener("click", function () {
        body.classList.toggle("modo-oscuro");

        if (body.classList.contains("modo-oscuro")) 
        {
            localStorage.setItem("modoOscuro", "activado");
            botonModo.textContent = "☀️ Modo Claro";
        } else 
        {
            localStorage.setItem("modoOscuro", "desactivado");
            botonModo.textContent = "🌙 Modo Oscuro";
        }
    });


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
        if (nombre.length < 3) 
        {
            errorNombre.innerHTML = "Debe tener mínimo 3 caracteres";
            valido = false;
        } else {
            errorNombre.innerHTML = "";
        }

        // Validar email
        let simbolos = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!simbolos.test(email)) 
        {
            errorEmail.innerHTML = "Debe ser un email válido";
            valido = false;
        } else {
            errorEmail.innerHTML = "";
        }

        // Validar contraseña
        let simbolo_contraseña = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

        if (!simbolo_contraseña.test(contra)) 
        {
            errorContra.innerHTML = "Debe tener mínimo 8 caracteres, al menos un número y una letra";
            valido = false;
        } else {
            errorContra.innerHTML = "";
        }

        // Validar contraseña
        if (contra !== confirmar) 
        {
            errorConfirmar.innerHTML = "Las contraseñas no son iguales";
            valido = false;
        } else {
            errorConfirmar.innerHTML = "";
        }

        if (!valido) 
        {
            return;
        }

        alert("Registro exitoso!");
        form.reset();
    });
});

