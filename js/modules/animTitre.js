export {SideScroll};

class SideScroll {
    constructor(titre, speed) {
      this.titre = titre;
      this.speed = speed;
      this.directionSymbol = "-";
      this.moving = null;
      this.newPos = 0;
    }


    move() {
        var computedStyle = window.getComputedStyle(this.titre);
        this.newPos = parseInt(computedStyle.marginLeft)-this.speed;
        if (this.newPos < -this.getWidth()-300) {
            this.newPos = this.getWidth()+300;
        }
        this.titre.style.marginLeft = "" + this.newPos +"px";
        
    }

    checkDir() {
        if (direction == -1) {
            this.directionSymbol = "-";
        } else if (direction == 1) {
            this.directionSymbol = "+";
        }
    }

    startMoving = function(){
		this.moving = setInterval(function(){
			this.move();
		}.bind(this), 5);
    }
    
    getWidth() {
        return Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.documentElement.clientWidth
        );
      }
    
  }