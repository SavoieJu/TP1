window.addEventListener("load", applyConfigs());

function applyConfigs() {
    let slider = document.querySelector(".slider");
    let slides = document.querySelectorAll(".slide");
    
    slider.style.width = configSlider.largeur;
    slider.style.height = configSlider.hauteur;

    for (let i = 0; i < slides.length; i++) {
        slide = document.querySelector(`#slide-${i+1}`);
        slideImg = document.querySelector(`#slide-${i+1} > div > img`);

        slide.style.width = configSlider.largeur;
        slideImg.src = configSlider.contenu[i].src;
    }
}

