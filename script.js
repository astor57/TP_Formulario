var nombre = document.getElementById('nombre').value;
var email = document.getElementById('email');
var contra = document.getElementById('contraseña').value;
var contra2 = document.getElementById('confirmarContraseña').value;
var mensajeEito = document.getElementById('mensaje').value;

let x = false;

﻿function validar() {
    if(nombre.length < 3) {
        parrafo.innerHTML = "El nombre tiene menos de 3 caracteres";
    } else if(contraseña != confirmarContraseña) {
        parrafo.innerHTML = "Las contraseñas no coinciden";
    } 
    else {
        enviarForm('signUpForm');
        x = true;
    }
    return x;
}