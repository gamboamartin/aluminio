//Control de Scroll en X,Y
//Este codigo se encarga de controlar todo el scroll 
window.addEventListener('DOMContentLoaded', function () {
    //Elementos Principales 
    var Carousel = document.getElementById("Carousel");
    var Youtube = document.getElementById("Youtube");
    var Productos = document.getElementById("Productos");
    var Clientes = document.getElementById("Clientes");
    var Proceso = document.getElementById("Proceso");
    var Contacto = document.getElementById("Contacto");
    //Elementos de scroll hibrido
    let slider = document.getElementById("test");
    

    const paneles = [
        Carousel, 
        Youtube, 
        Productos, 
        Clientes, 
        Proceso, 
        Contacto
    ]

    let value = 0;
    let i = 0;
    let ScrollYouTube = 0;

    function IrProceso() {
        i = 0;
        subir() 
    }
    
    function IrContacto() {
        i = 1;
        subir() 
    }
    
    function IrInicio() {
        i = 2;
        subir() 
    }
    
    function IrYouTube() {
        i = 3;
        subir() 
    }
    
    function IrProductos() {
        i = 4;
        subir() 
    }
    
    function IrClientes() {
        i = 5;
        subir() 
    }

    function subir() {
        paneles[i].classList.remove("bajar");
        paneles[i].classList.add("subir");
    }

    window.addEventListener("scroll", function () {
        value = this.window.scrollY
        if(value > 0 && value < 290) {
            i = 0
            subir()
        }
        if(value > 290 && value < 580) {
            i = 1
            subir()
        }
        if(value > 580 && value < 870) {
            i = 2
            subir()
        }
        if(value > 870 && value < 1160) {
            i = 3
            subir()
        }
        if(value > 1160 && value < 1450) {
            i = 4
            subir()
        }
        if(value > 1450 && value < 1743) {
            i = 5
            subir()
        }
        if(value > 1743) {
            this.window.scroll(-1743, 0)
            i = 0
            ScrollYouTube = 0;
            bajar()
        }
    
        function subir() {
            paneles[i].classList.remove("bajar");
            paneles[i].classList.add("subir");
        }
    
        function bajar() {
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

            paneles[0].classList.remove("subir");
            paneles[0].classList.add("bajar");
        }
    })
    window.addEventListener("scroll", function () {
        slider.scroll(ScrollYouTube = ScrollYouTube + 10, 0);
    })
})




