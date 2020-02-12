window.addEventListener("load", applyConfigs());

function applyConfigs() {
    let slider = document.querySelector(".slider");
    let slides = document.querySelectorAll(".slide");
    let slide1 = document.querySelector("#slide-1 > div > img");
    let slide2 = document.querySelector("#slide-2 > div > img");
    let slide3 = document.querySelector("#slide-3 > div > img");
    let slide4 = document.querySelector("#slide-4 > div > img");
    let slide5 = document.querySelector("#slide-5 > div > img");
    
    slider.style.width = configSlider.largeur;
    slider.style.height = configSlider.hauteur;
    slides.forEach((el)=>{
        el.style.width = configSlider.largeur;
    })

    slide1.src = configSlider.contenu[0].src;
    slide2.src = configSlider.contenu[1].src;
    slide3.src = configSlider.contenu[2].src;
    slide4.src = configSlider.contenu[3].src;
    slide5.src = configSlider.contenu[4].src;
}

