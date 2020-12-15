function Flower(x,y) {
    this.x =x;
    this.y = y
    this.r = 20
    this.toDelete = false
    this.xdir = 2;
    this.ydir = 0;
    this.img = loadImage("Space-Invaders-PNG-Picture.png");
    this.show = function() {
      image(this.img,this.x, this.y, this.r*2, this.r*2);
    }

    this.evaporate = function(){
        this.toDelete = true
    }

    this.shiftDown = function(){
        this.xdir *= -1;
        this.y += this.r
    }
    this.move = function(){
        this.x = this.x + this.xdir
        this.y = this.y + this.ydir
    }

    
    this.hits = function(ship){
        var d = dist(this.x,this.y,ship.x,ship.y)
        if(d< this.r + ship.r){
            return true;
        }else{
            return false;
        }
    }
  }