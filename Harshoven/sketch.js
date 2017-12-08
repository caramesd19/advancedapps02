//variables, which allow the creation of new pipes and determine the size of the canvas

var bird;
var pipes = [];
function setup() {
  createCanvas(600, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
//when pipe hits bird, console displays the word "hit"

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
      fill(255,0,0) 
      textSize(102);
      text("Try harder",50,300)
     
      document.location.reload()
      
      
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
 
  }
//makes the background look like it is moving 
  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	fill(255,0,0)
  textSize(25)
var millisecond = millis();
text("Time: \n" + millisecond, 5, 40)
}
 

//makes bird move
function mousePressed() {
  if (bird.up()) {
    
   
  }
}

//makes bird, demensions
function Bird() {
  this.y = height/2;
  this.x = 64;
  
//makes bird's moving measurments
  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  // draws the bird
  this.show = function() {
fill(255,100,0)
triangle(this.x + 75,this.y +0,this.x + 21,this.y +22,this.x + 20,this.y - 19)
    fill(255,255,0);
    ellipse(this.x, this.y, 75, 75);
     fill(0)
ellipse(this.x + 10,this.y - 20,20,20)

  }

  //bird movement 
  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
//makes pipes and makes them move
function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

//when the bird hits a pipe it lights up red
  this.highlight = false;
  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}
