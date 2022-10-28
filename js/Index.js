window.addEventListener('DOMContentLoaded', function () {
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

    window.addEventListener("scroll", function () {
        value = this.window.scrollY
        if(value > 0 && value < 2000) {
            i = 0
            subir()
            bajar()
        }
        if(value > 2000 && value < 4000) {
            i = 1
            subir()
            bajar()
            sliderYouTube.scroll({
                top: 0,
                left: ScrollYouTube+=100,
                behavior: 'smooth'
              });
        }
        if(value > 4000 && value < 6000) {
            i = 2
            subir()
            bajar()
            sliderProductos.scroll({
                top: 0,
                left: ScrollProductos+=100,
                behavior: 'smooth'
              });
        }
        if(value > 6000 && value < 8000) {
            i = 3
            subir()
            bajar()
        }
        if(value > 8000 && value < 9000) {
            i = 4
            subir()
            sliderProceso.scroll({
                top: 0,
                left: ScrollProceso+=80,
                behavior: 'smooth'
              });
        }
        if(value > 9000 && value < 9000) {
            i = 5
            subir()
            bajar()
        }
        if(value > 8300) {
            this.window.scroll(0, -8300)
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
            i = 0
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








