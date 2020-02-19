import {SideScroll} from './modules/animTitre.js';
import {Waves} from './modules/animWaves.js';

let sideScrollStart = new SideScroll(document.querySelector(".menu_container > h1"), 1);
sideScrollStart.startMoving();

let waves = new Waves(300, 30);
waves.prepareBoxForWave();
 