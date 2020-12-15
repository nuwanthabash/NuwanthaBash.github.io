

var ship;
var flowers = [];
var flowers2 = [];
var flowers3 = [];
var drops = [];
var flowerdrops = [];

var score = 0;
var health = 100;





function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    drop = new Drop(20, 20)
    createInvaders();
}


function createInvaders() {

    for (var i = 0; i < 7; i++) {
        flowers[i] = new Flower(i * Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100), 60);
        flowers2[i] = new Flower(i * Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100), 100);
        flowers3[i] = new Flower(i * Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100), 140);
    }
}




setInterval(function () {
    if (flowers.length != 0 && flowers2.length != 0 && flowers3.length != 0) {
        var drop = new Drop(flowers[Math.floor(Math.random() * flowers.length)].x, flowers[Math.floor(Math.random() * flowers.length)].y)
        flowerdrops.push(drop)
        var drop = new Drop(flowers2[Math.floor(Math.random() * flowers2.length)].x, flowers2[Math.floor(Math.random() * flowers2.length)].y)
        flowerdrops.push(drop)
        var drop = new Drop(flowers3[Math.floor(Math.random() * flowers3.length)].x, flowers3[Math.floor(Math.random() * flowers3.length)].y)
        flowerdrops.push(drop)
    }
}, 1000);



function drawInvaders() {
    var edge = false
    var edge2 = false
    var edge3 = false



    for (var i = 0; i < flowerdrops.length; i++) {
        flowerdrops[i].show();
        flowerdrops[i].shoot();

        if (flowerdrops[i].damage(ship) && !flowerdrops[i].toDelete) {
            console.log("bf:" + i)
            health -= 20;
            console.log(health)
            document.getElementById('health').innerText = "Health :" + health;
            flowerdrops[i].evaporate()
            console.log(flowerdrops[i].toDelete)
        }


        if (health == 0) {
            score = 0;
            health = 100
            document.getElementById('health').innerText = "Health :" + health;
            document.getElementById('score').innerText = "Score :" + score;
        }
    }


    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();




        if (flowers[i].x > width || flowers[i].x < 0) {
            edge = true
        }

    }

    for (var i = 0; i < flowers2.length; i++) {
        flowers2[i].show();
        flowers2[i].move();
        if (flowers2[i].x > width || flowers2[i].x < 0) {
            edge2 = true
        }
    }

    for (var i = 0; i < flowers3.length; i++) {
        flowers3[i].show();
        flowers3[i].move();
        if (flowers3[i].x > width || flowers3[i].x < 0) {
            edge3 = true
        }

    }

    if (edge) {
        for (var i = 0; i < flowers.length; i++) {
            flowers[i].shiftDown();
        }
    }

    if (edge2) {
        for (var i = 0; i < flowers2.length; i++) {
            flowers2[i].shiftDown();
        }
    }

    if (edge3) {
        for (var i = 0; i < flowers3.length; i++) {
            flowers3[i].shiftDown();
        }
    }
    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();

        for (var x = 0; x < flowers.length; x++) {
            if (drops[i].hits(flowers[x])) {
                flowers[x].evaporate();
                drops[i].evaporate();
                score += 10;
                document.getElementById('score').innerText = "Score :" + score;
                if (score >= 1500) {
                    var modal = document.getElementById("id01");

                    // Get the button that opens the modal
                    var btn = document.getElementById("myBtn");

                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];
                    localStorage.setItem('spaceScore', 2000)

                    modal.style.display = "block";
                }
            }
        }

        for (var x = 0; x < flowers2.length; x++) {
            if (drops[i].hits(flowers2[x])) {
                flowers2[x].evaporate();
                drops[i].evaporate();
                score += 10;
                document.getElementById('score').innerText = "Score :" + score;
                if (score >= 2000) {
                    var modal = document.getElementById("id01");

                    // Get the button that opens the modal
                    var btn = document.getElementById("myBtn");

                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];
                    localStorage.setItem('spaceScore', 2000)

                    modal.style.display = "block";
                }
            }
        }

        for (var x = 0; x < flowers3.length; x++) {
            if (drops[i].hits(flowers3[x])) {
                flowers3[x].evaporate();
                drops[i].evaporate();
                score += 10;
                document.getElementById('score').innerText = "Score :" + score;
                if (score >= 2000) {
                    var modal = document.getElementById("id01");

                    // Get the button that opens the modal
                    var btn = document.getElementById("myBtn");

                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];

                    localStorage.setItem('spaceScore', 2000)
                    modal.style.display = "block";
                }
            }
        }
    }




    for (var i = flowers.length - 1; i >= 0; i--) {
        if (flowers[i].hits(ship)) {
            ship.evaporate();
            if (ship.toDelete) {
                console.log("hit")
                setup()
                document.getElementById('game-status').innerText = "Game Status : New Game";
            }
        }
        if (flowers[i].y > height) {
            console.log("hit")
            setup()
            document.getElementById('game-status').innerText = "Game Status : New Game";
        }
    }

    for (var i = flowers2.length - 1; i >= 0; i--) {
        if (flowers2[i].hits(ship)) {
            ship.evaporate();
            if (ship.toDelete) {
                console.log("hit")
                setup()
                document.getElementById('game-status').innerText = "Game Status : New Game";
            }
        }
        if (flowers2[i].y > height) {
            console.log("hit")
            setup()
            document.getElementById('game-status').innerText = "Game Status : New Game";
        }
    }

    for (var i = flowers3.length - 1; i >= 0; i--) {
        if (flowers3[i].hits(ship)) {
            ship.evaporate();
            if (ship.toDelete) {
                console.log("hit")
                setup()
                document.getElementById('game-status').innerText = "Game Status : New Game";
            }
        }
        if (flowers3[i].y > height) {
            console.log("hit")
            setup()
            document.getElementById('game-status').innerText = "Game Status : New Game";
        }
    }

    for (var i = drops.length - 1; i >= 0; i--) {
        if (drops[i].toDelete) {
            drops.splice(i, 1)
        }
    }

    for (var i = flowers.length - 1; i >= 0; i--) {
        if (flowers[i].toDelete) {
            flowers.splice(i, 1)
        }
    }

    for (var i = flowers2.length - 1; i >= 0; i--) {
        if (flowers2[i].toDelete) {
            flowers2.splice(i, 1)
        }
    }

    for (var i = flowers3.length - 1; i >= 0; i--) {
        if (flowers3[i].toDelete) {
            flowers3.splice(i, 1)
        }
    }

    if (flowers.length == 0 && flowers2.length == 0 && flowers3.length == 0) {
        createInvaders();
        drawInvaders()
    }

}

function draw() {
    background(51);
    ship.show();
    ship.move();

    drawInvaders();
}



function keyReleased() {
    if (key != ' ') {
        ship.setDir(0)
    }

}

function keyPressed() {
    if (key === ' ') {
        var drop = new Drop(ship.x, height)
        drops.push(drop)
    }

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1)
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1)

    }
}