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
        if(value > 0 && value < 1000) {
            i = 0
            subir()
        }
        if(value > 1000 && value < 3400) {
            i = 1
            subir()
            sliderYouTube.scroll({
                top: 0,
                left: ScrollYouTube+=100,
                behavior: 'smooth'
              });
        }
        if(value > 3400 && value < 5000) {
            i = 2
            subir()
            sliderProductos.scroll({
                top: 0,
                left: ScrollProductos+=50,
                behavior: 'smooth'
              });
        }
        if(value > 5000 && value < 6000) {
            i = 3
            subir()
        }
        if(value > 6000 && value < 7300) {
            i = 4
            subir()
            sliderProceso.scroll({
                top: 0,
                left: ScrollProceso+=80,
                behavior: 'smooth'
              });
        }
        if(value > 7300 && value < 8300) {
            i = 5
            subir()
        }
        if(value > 8300) {
            this.window.scroll(0, -8300)
            sliderYouTube.scroll({
                top: 0,
                left: ScrollYouTube-=ScrollYouTube,
                behavior: 'smooth'
              });
              sliderProductos.scroll({
                top: 0,
                left: ScrollProductos-=ScrollProductos,
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
})








