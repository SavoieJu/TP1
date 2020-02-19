export {Waves};

class Waves {

    constructor(speed, maxHeight) {
        this.speed = speed;
        this.maxHeight = maxHeight;
        this.boxNum = 0;
        this.OriginalPattern = [4, 3, 2, 3, 0, 3, 1, 0, 4, 3, 4, 3];
        this.currentPatternProgress = 0;
      }

      //Dis a la fonction makeWave quelle boite faire monter
      //en suivant le "Original pattern" -> chaque chiffre dedans représente le numero de
      //la boite.
      //Pourrait être mieux si les boite était généré dans le js pour avoir controle
      //sur le nombre de boite. Et le pattern pourrait être généré aléatoirement
      //ou basé sur quelque chose aussi.
      prepareBoxForWave() {
        let boxes = this.getBoxes();


        if (this.currentPatternProgress < this.OriginalPattern.length) {
            this.makeWave(boxes[this.OriginalPattern[this.currentPatternProgress]]);
            this.currentPatternProgress++;
        } else if (this.currentPatternProgress >= this.OriginalPattern.length) {
            this.currentPatternProgress = 0;
            this.makeWave(boxes[this.OriginalPattern[this.currentPatternProgress]]);
            this.currentPatternProgress++;
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