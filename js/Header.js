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


    function IrInicio() {
        var Carousel = document.getElementById("Carousel");
        var Youtube = document.getElementById("Youtube");
        var Productos = document.getElementById("Productos");
        var Clientes = document.getElementById("Clientes");
        var Proceso = document.getElementById("Proceso");
        var Contacto = document.getElementById("Contacto");
    
        const paneles = [
            Carousel, 
            Youtube, 
            Productos, 
            Clientes, 
            Proceso, 
            Contacto
        ]
        paneles[0].classList.remove("bajar");
        paneles[0].classList.add("subir");

        paneles[5].classList.remove("subir");
        paneles[5].classList.add("bajar");
        
        paneles[4].classList.remove("subir");
        paneles[4].classList.add("bajar");

        paneles[3].classList.remove("subir");
        paneles[3].classList.add("bajar");

        paneles[2].classList.remove("subir");
        paneles[2].classList.add("bajar");

        paneles[1].classList.remove("subir");
        paneles[1].classList.add("bajar");

        this.window.scroll(0, 1)
        cerrarmenu()
    }

    function IrYouTube() {
        var Carousel = document.getElementById("Carousel");
        var Youtube = document.getElementById("Youtube");
        var Productos = document.getElementById("Productos");
        var Clientes = document.getElementById("Clientes");
        var Proceso = document.getElementById("Proceso");
        var Contacto = document.getElementById("Contacto");
    
        const paneles = [
            Carousel, 
            Youtube, 
            Productos, 
            Clientes, 
            Proceso, 
            Contacto
        ]
        paneles[1].classList.remove("bajar");
        paneles[1].classList.add("subir");

        paneles[5].classList.remove("subir");
        paneles[5].classList.add("bajar");
        
        paneles[4].classList.remove("subir");
        paneles[4].classList.add("bajar");

        paneles[3].classList.remove("subir");
        paneles[3].classList.add("bajar");

        paneles[2].classList.remove("subir");
        paneles[2].classList.add("bajar");

        paneles[0].classList.remove("subir");
        paneles[0].classList.add("bajar");

        this.window.scroll(0, 2001)
        cerrarmenu()
    }

    function IrProductos() {
        var Carousel = document.getElementById("Carousel");
        var Youtube = document.getElementById("Youtube");
        var Productos = document.getElementById("Productos");
        var Clientes = document.getElementById("Clientes");
        var Proceso = document.getElementById("Proceso");
        var Contacto = document.getElementById("Contacto");
    
        const paneles = [
            Carousel, 
            Youtube, 
            Productos, 
            Clientes, 
            Proceso, 
            Contacto
        ]
        paneles[2].classList.remove("bajar");
        paneles[2].classList.add("subir");

        paneles[5].classList.remove("subir");
        paneles[5].classList.add("bajar");
        
        paneles[4].classList.remove("subir");
        paneles[4].classList.add("bajar");

        paneles[3].classList.remove("subir");
        paneles[3].classList.add("bajar");

        paneles[0].classList.remove("subir");
        paneles[0].classList.add("bajar");

        paneles[1].classList.remove("subir");
        paneles[1].classList.add("bajar");

        this.window.scroll(0, 9501)
        cerrarmenu()
    }


    function IrClientes() {
        var Carousel = document.getElementById("Carousel");
        var Youtube = document.getElementById("Youtube");
        var Productos = document.getElementById("Productos");
        var Clientes = document.getElementById("Clientes");
        var Proceso = document.getElementById("Proceso");
        var Contacto = document.getElementById("Contacto");
    
        const paneles = [
            Carousel, 
            Youtube, 
            Productos, 
            Clientes, 
            Proceso, 
            Contacto
        ]
        paneles[3].classList.remove("bajar");
        paneles[3].classList.add("subir");

        paneles[5].classList.remove("subir");
        paneles[5].classList.add("bajar");
        
        paneles[4].classList.remove("subir");
        paneles[4].classList.add("bajar");

        paneles[0].classList.remove("subir");
        paneles[0].classList.add("bajar");

        paneles[2].classList.remove("subir");
        paneles[2].classList.add("bajar");

        paneles[1].classList.remove("subir");
        paneles[1].classList.add("bajar");

        this.window.scroll(0, 12601)
        cerrarmenu()
    }

    function IrProceso() {
        var Carousel = document.getElementById("Carousel");
        var Youtube = document.getElementById("Youtube");
        var Productos = document.getElementById("Productos");
        var Clientes = document.getElementById("Clientes");
        var Proceso = document.getElementById("Proceso");
        var Contacto = document.getElementById("Contacto");
    
        const paneles = [
            Carousel, 
            Youtube, 
            Productos, 
            Clientes, 
            Proceso, 
            Contacto
        ]
        paneles[4].classList.remove("bajar");
        paneles[4].classList.add("subir");

        paneles[5].classList.remove("subir");
        paneles[5].classList.add("bajar");
        
        paneles[0].classList.remove("subir");
        paneles[0].classList.add("bajar");

        paneles[3].classList.remove("subir");
        paneles[3].classList.add("bajar");

        paneles[2].classList.remove("subir");
        paneles[2].classList.add("bajar");

        paneles[1].classList.remove("subir");
        paneles[1].classList.add("bajar");

        this.window.scroll(0, 14600)
        cerrarmenu()
    }

    function IrContacto() {
        var Carousel = document.getElementById("Carousel");
        var Youtube = document.getElementById("Youtube");
        var Productos = document.getElementById("Productos");
        var Clientes = document.getElementById("Clientes");
        var Proceso = document.getElementById("Proceso");
        var Contacto = document.getElementById("Contacto");
    
        const paneles = [
            Carousel, 
            Youtube, 
            Productos, 
            Clientes, 
            Proceso, 
            Contacto
        ]
        paneles[5].classList.remove("bajar");
        paneles[5].classList.add("subir");

        paneles[0].classList.remove("subir");
        paneles[0].classList.add("bajar");
        
        paneles[4].classList.remove("subir");
        paneles[4].classList.add("bajar");

        paneles[3].classList.remove("subir");
        paneles[3].classList.add("bajar");

        paneles[2].classList.remove("subir");
        paneles[2].classList.add("bajar");

        paneles[1].classList.remove("subir");
        paneles[1].classList.add("bajar");

        this.window.scroll(0, 19651)
        cerrarmenu()
    }


    function CerrarProducto() {
        location.href = "index.html"
    }




    