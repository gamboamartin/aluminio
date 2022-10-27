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
    let ScrollYouTube = -400;
    let ScrollProductos = -600;
    let ScrollProceso = -600;

    window.addEventListener("scroll", function () {
        value = this.window.scrollY
        console.log(value)
        if(value > 0 && value < 1000) {
            i = 0
            subir()
        }
        if(value > 1000 && value < 3500) {
            i = 1
            subir()
            sliderYouTube.scroll(ScrollYouTube = ScrollYouTube + 100, 0);
        }
        if(value > 3500 && value < 4500) {
            i = 2
            subir()
            sliderProductos.scroll(ScrollProductos = ScrollProductos + 100, 0);
        }
        if(value > 4500 && value < 5500) {
            i = 3
            subir()
        }
        if(value > 5500 && value < 7000) {
            i = 4
            subir()
            sliderProceso.scroll(ScrollProceso = ScrollProceso + 140, 0);
        }
        if(value > 7000 && value < 8000) {
            i = 5
            subir()
        }
        if(value > 8000) {
            this.window.scroll(0, -8000)
            sliderYouTube.scroll(ScrollYouTube = - ScrollYouTube - ScrollYouTube ,0);
            sliderProductos.scroll(ScrollProductos = ScrollProductos - ScrollProductos, 0);
            sliderProceso.scroll(ScrollProceso = ScrollProceso - ScrollProceso, 0);
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
})








