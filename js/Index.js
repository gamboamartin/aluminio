window.addEventListener('DOMContentLoaded', function () {
    //Elementos Principales 
    var Carousel = document.getElementById("Carousel");
    var Youtube = document.getElementById("Youtube");
    var Productos = document.getElementById("Productos");
    var Clientes = document.getElementById("Clientes");
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
        Proceso, 
        Contacto
    ]

    let value = 0;
    let i = 0;
    let ScrollYouTube;
    let ScrollProductos;
    let ScrollProceso;

    let prevUrl = document.referrer;
    let ActualUrl = location.origin + location.pathname;

    /*
    if(prevUrl != ActualUrl)  {
        i = 2
        subir()
        bajar()
        prevUrl = ActualUrl;
    }*/



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
        if(value > 0 && value < 2000) {
            i = 0
            subir()
            bajar()
        }
        if(value > 2000 && value < 9500) {
            i = 1
            subir()
            bajar()
            ScrollYouTube = value - 2000;
            if(ScrollYouTube < 6500 ) {
                for (var y = 0; y < sliderYouTube.length; y++) {
                    sliderYouTube[y].style.transform = `translate(-${ScrollYouTube}px)`
                }
            }
        }
        if(value > 9500 && value < 12600) {
            i = 2
            subir()
            bajar()
            ScrollProductos = value - 9500;
            if(ScrollProductos < 2310 ) {
                for (var y = 0; y < sliderProductos.length; y++) {
                    sliderProductos[y].style.transform = `translate(-${ScrollProductos}px)`
                }  
            }
        }
        if(value > 12600 && value < 14600) {
            i = 3
            subir()
            bajar()
        }
        if(value > 14600 && value < 19650) {
            i = 4
            subir()
            bajar()
            ScrollProceso = value - 14600;
            if (ScrollProceso < 5000 ) {
                for (var y = 0; y < sliderProceso.length; y++) {
                    sliderProceso[y].style.transform = `translate(-${ScrollProceso}px)`
                }
            }
        }
        if(value > 19650 && value < 21650) {
            i = 5
            subir()
            bajar()
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



