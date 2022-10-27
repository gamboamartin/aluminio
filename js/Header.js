    function abrirmenu() {
        var menuheaderindice = document.getElementById("menu-header-indice");
        menuheaderindice.classList.add("header-menu-desplegable-abrir")
        var abrir = document.getElementById("menuprincipal-abrir");
        abrir.classList.add("header-menubotton-container-abrir")
        var cerrar = document.getElementById("menuprincipal-cerrar");
        cerrar.classList.remove("header-menubotton-container-cerrar")
    }

    function cerrarmenu(){
        var menuheaderindice = document.getElementById("menu-header-indice");
        menuheaderindice.classList.remove("header-menu-desplegable-abrir")
        var abrir = document.getElementById("menuprincipal-abrir");
        abrir.classList.remove("header-menubotton-container-abrir")
        var cerrar = document.getElementById("menuprincipal-cerrar");
        cerrar.classList.add("header-menubotton-container-cerrar")
    }