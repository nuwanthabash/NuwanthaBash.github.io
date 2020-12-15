function Ship() {
    this.x = width/2;
    this.y = height -30
    this.xdir = 0
    this.r = 20
    this.toDelete = false;
    this.img = loadImage("spaceship.png");
  
    this.show = function() {
        image( this.img,this.x , this.y, this.r*2, this.r*2)
    }

    this.setDir = function(dir){
        this.xdir = dir;
    }

    this.move = function(dir){
        this.x +=this.xdir*5 
    }

    this.evaporate = function(){
        this.toDelete = true
    }

  }