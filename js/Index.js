window.addEventListener('DOMContentLoaded', function () {
    let prevUrl = document.referrer ;
    let ActualUrl = location.origin + location.pathname;
    //Elementos Principales 
    var Carousel = document.getElementById("Carousel");
    var Youtube = document.getElementById("Youtube");
    var Productos = document.getElementById("Productos");
    var Clientes = document.getElementById("Clientes");
    var Proceso = document.getElementById("Proceso");
    var Contacto = document.getElementById("Contacto");
    //Elementos de scroll hibrido
    let sliderYouTube = document.getElementById("sliderYouTube");
    let sliderProductos = document.getElementById("sliderProductos");
    let sliderProceso = document.getElementById("sliderProceso");

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
    let ScrollProductos = 0;
    let ScrollProceso = 0;

    if(prevUrl != ActualUrl )  {
        i = 2
        subir()
        bajar()
        sliderProductos.scroll({
            top: 0,
            left: ScrollProductos+=40,
            behavior: 'smooth'
        });
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
        if(value > 1000 && value < 15000) {
            i = 1
            subir()
            bajar()
            sliderYouTube.scroll({
                top: 0,
                left: ScrollYouTube+=80,
                behavior: 'smooth'
            });
        }
        if(value > 15000 && value < 19000) {
            i = 2
            subir()
            bajar()
            sliderProductos.scroll({
                top: 0,
                left: ScrollProductos+=40,
                behavior: 'smooth'
            });
        }
        if(value > 19000 && value < 20000) {
            i = 3
            subir()
            bajar()
            ReiniciarScroll()
        }
        if(value > 20000 && value < 30000) {
            i = 4
            subir()
            sliderProceso.scroll({
                top: 0,
                left: ScrollProceso+=60,
                behavior: 'smooth'
            });
        }
        if(value > 30000 && value < 31000) {
            i = 5
            subir()
            bajar()
            ReiniciarScroll()
        }
        if(value > 32000) {
            i = 0
            this.window.scroll(0, -32000)
            ReiniciarScroll()
            bajar()
        }

        function ReiniciarScroll() {
            sliderYouTube.scroll({
                top: 0,
                left: ScrollYouTube-=ScrollYouTube,
                behavior: 'smooth'
            });
              sliderProceso.scroll({
                top: 0,
                left: ScrollProceso-=ScrollProceso,
                behavior: 'smooth'
            });
            sliderProductos.scroll({
                top: 0,
                left: ScrollProductos-=ScrollProductos,
                behavior: 'smooth'
            });
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
    })
})








