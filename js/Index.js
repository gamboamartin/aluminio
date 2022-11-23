window.addEventListener('DOMContentLoaded', function () {
    //Elementos Principales 
    var Carousel = document.getElementById("Carousel");
    var Youtube = document.getElementById("Youtube");
    var Productos = document.getElementById("Productos");
    var Clientes = document.getElementById("Clientes");
    var Nosotros = document.getElementById("Nosotros");
    var Proceso = document.getElementById("Proceso");
    var Contacto = document.getElementById("Contacto");
    //Elementos de scroll hibrido
    let sliderYouTube = document.getElementsByClassName("videos-container--card");
    let sliderProductos = document.getElementsByClassName("productos-card");
    let sliderProceso = document.getElementsByClassName("proceso-slider--card");

    const paneles = [
        Carousel, 
        Youtube, 
        Productos, 
        Clientes, 
        Nosotros,
        Proceso, 
        Contacto
    ]

    let value = 0;
    let i = 0;

    let prevUrl = document.referrer;

    
    if(prevUrl == "http://127.0.0.1:5500/productos-puertasdealuminio.html"      ||
       prevUrl == "http://127.0.0.1:5500/productos-barandales.html"             ||
       prevUrl == "http://127.0.0.1:5500/productos-cancelesdebaño.html"         ||
       prevUrl == "http://127.0.0.1:5500/productos-domosytechos.html"           ||
       prevUrl == "http://127.0.0.1:5500/productos-proyectoscomerciales.html"   ||
       prevUrl == "http://127.0.0.1:5500/productos-ventanasdealuminio.html"   
      )
    {
        i = 2
        subir()
        bajar()
        this.window.scroll(0, 2001)
    } else {
        i = 0
        subir()
        bajar() 
        this.window.scroll(0, 1)
    }



    function subir() {
        paneles[i].classList.remove("bajar");
        paneles[i].classList.add("subir");
    }

    function bajar() {
        for (var j = 0; j < 6; j++) {
            if(i != j) {
                paneles[j].classList.remove("subir");
                paneles[j].classList.add("bajar");
            }
        }
    }
    window.addEventListener("scroll", function () {
        value = this.window.scrollY
        if(value > 0 && value < 1000) {
            i = 0
            subir()
            bajar()
        }
        if(value > 1000 && value < 2000) {
            i = 1
            subir()
            bajar()
        }
        if(value > 2000 && value < 3000) {
            i = 2
            subir()
            bajar()
        }
        if(value > 3000 && value < 4000) {
            i = 3
            subir()
            bajar()
        }
        if(value > 4000 && value < 5000) {
            i = 4
            subir()
            bajar()
        }
        if(value > 5000 && value < 6000) {
            i = 5
            subir()
            bajar()
        }
        
        if(value > 6000 && value < 7000) {
            i = 6
            subir()
            bajar()
        }
        function subir() {
            paneles[i].classList.remove("bajar");
            paneles[i].classList.add("subir");
        }
    
        function bajar() {
            for (var j = 0; j < paneles.length; j++) {
                if(i != j) {
                    paneles[j].classList.remove("subir");
                    paneles[j].classList.add("bajar");
                }
            }
        }
    })
})



