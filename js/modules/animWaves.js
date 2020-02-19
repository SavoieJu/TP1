export {Waves};

class Waves {

    constructor(speed, maxHeight) {
        this.speed = speed;
        this.maxHeight = maxHeight;
        this.boxNum = 0;
        
      }

      //Dis a la fonction makeWave quelle boite faire monter
      prepareBoxForWave() {
        let boxes = this.getBoxes();

        if (this.boxNum < boxes.length) {
            this.makeWave(boxes[this.boxNum]);
            this.boxNum++;
        } else if (this.boxNum >= boxes.length) {
            this.boxNum = 0;
            this.makeWave(boxes[this.boxNum]);
            this.boxNum++;
        }
      }

      //Change la hauteur minimum de la boite, et appelle la prochaine preparation de boite
      //et la fonction pour remettre a normal son min-height
      makeWave(box) {
        box.style.minHeight = "" + this.maxHeight + "vh";
        setTimeout(()=>{
            this.calmWave(box);
        }, this.speed);
        setTimeout(()=>{
            this.prepareBoxForWave();
        }, this.speed);
      }

      //Remet la boite a son état normal
      calmWave(box) {
        box.style.minHeight = "10vh";
      }

      //Retourn toutes les boites dans le footer
      getBoxes() {
          return document.querySelectorAll(".boite-up-down");
      }

}