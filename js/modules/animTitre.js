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
        this.titre.forEach(element => {
            var style = window.getComputedStyle(element);
            var matrix = new WebKitCSSMatrix(style.webkitTransform);
            if (matrix.m41 < -this.getWidth()/1.6) {
                element.style.transform = "translateX(" + this.getWidth()/1.6 + "px)";
            }
            element.style.transform = "translateX(" + (this.getTranslateX(element) - this.speed) + "px)";

        });
        
        
    }

    getTranslateX(element) {
        var style = window.getComputedStyle(element);
        var matrix = new WebKitCSSMatrix(style.webkitTransform);
        return matrix.m41
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
		}.bind(this), 25);
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