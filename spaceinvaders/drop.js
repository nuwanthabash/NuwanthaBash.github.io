function Drop(x,y) {
    this.x =x;
    this.y = y
    this.r = 8
    this.toDelete = false
    this.show = function() {
        noStroke()
      fill(50,0,200);
      rectMode(CENTER);
      ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.move = function(){
        this.y = this.y-1*5; 
    }

    this.shoot = function(){
        this.y = this.y+1*5; 
    }

    this.hits = function(flower){
        var d = dist(this.x,this.y,flower.x,flower.y)
        if(d< this.r + flower.r){
            return true;
        }else{
            return false;
        }
    }

    this.damage = function(ship){
        var d = dist(this.x,this.y,ship.x,ship.y)
        if(d< this.r + ship.r){
            return true;
        }else{
            return false;
        }
    }

    this.evaporate = function(){
        this.toDelete = true;
    }
  }