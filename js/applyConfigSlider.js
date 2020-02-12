window.addEventListener("load", applyConfigs());

function applyConfigs() {
    let slider = document.querySelector(".slider");
    let slides = document.querySelectorAll(".slide");
    
    slider.style.width = configSlider.largeur;
    slider.style.height = configSlider.hauteur;
    slides.forEach((el)=>{
        el.style.width = configSlider.largeur;
    })
}

