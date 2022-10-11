
let tarjetas = document.getElementById("tarjetas");
let slider = document.getElementById("slider"); 
let html = document.getElementById("html");




window.addEventListener("scroll", function() {
    let valueToStock = window.scrollY;
    if (valueToStock > 660) {
        let youtubeView = document.getElementById("youtubeseccion");
        youtubeView.classList.add("detenerscrollenyoutube")
        console.log(valueToStock)
        if (valueToStock > 2600) {
            let youtubeView = document.getElementById("youtubeseccion");
            youtubeView.classList.remove("detenerscrollenyoutube")
            this.slider.scroll(0, 990)
        }
    }

    let value = window.scrollY - 700;
    this.slider.scroll(value * 1.5, 0)


    



})


