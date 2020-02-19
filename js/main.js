import {SideScroll} from './modules/animTitre.js';
import {Waves} from './modules/animWaves.js';

let sideScrollStart = new SideScroll(document.querySelectorAll(".menu_container > div"), 2);
sideScrollStart.startMoving();

let waves = new Waves(300, 30);
waves.prepareBoxForWave();

var date = new Date();
chargerTemps(date);

function chargerTemps(date) {
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric'};
    document.querySelector("header > span").innerHTML = "On est le " + date.toLocaleDateString('fr-FR', options) + "";
}