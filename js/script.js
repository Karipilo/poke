let datoUsuarioAdmin = {
    "nombreCompleto": "Karina Pimentel",
    "usuario": "karina",
    "password": "karina",
    "estado": true
}

// Al cargar la página, muestra el nombre en perfil.html si el usuario está logueado
window.onload = function () {
    if (window.location.pathname.endsWith("perfil.html")) {
        let usuarioLogin = JSON.parse(localStorage.getItem("datoUsuario"))
        if (usuarioLogin && usuarioLogin.estadoLogin) {
            document.getElementById("cambio").textContent = "Bienvenido " + usuarioLogin.usuario
        } else {
            // Si no está logueado, redirige al login
            window.location.href = "index.html"
        }
    }
}

// Función de validación y login
function datoUsuario() {
    let usuario = document.getElementById("UsuarioInput").value
    let password = document.getElementById("inputPassword5").value
    if (usuario == "" || password == "") {
        alert("Usuario y contraseña no deben estar vacíos")
        return
    } else if (usuario.length < 3 || password.length < 3) {
        alert("Debe tener más de 3 caracteres")
        return
    } else if (usuario == datoUsuarioAdmin.usuario && password == datoUsuarioAdmin.password) {
        // Guardar datos en localStorage
        let usuarioLogeado = {
            "usuario": datoUsuarioAdmin.nombreCompleto,
            "estadoLogin": datoUsuarioAdmin.estado
        }
        localStorage.setItem("datoUsuario", JSON.stringify(usuarioLogeado))
        window.location.href = "perfil.html"
    } else {
        alert("Usuario o contraseña incorrectos")
        return
    }
}