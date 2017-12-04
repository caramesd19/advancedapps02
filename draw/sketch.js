
var  f,g,h; 

function setup() { 
  createCanvas(1000, 1000);
background (0)
	f = random (255)
	g = random(255)
	h = random(255) 
}


function mouseWheel() { 
background(f,g,h)
}





	


 function mouseDragged() {
	//Draw circle
	strokeWeight(10) 
	stroke(f,g,h)
	fill(f,g,h,100)
	ellipse(mouseX,mouseY,200,200)
}

//when mouse is clicked
function mousePressed() { 
	
	//color pick
 f = random (255)
	g = random(255)
	h = random(255) 
}

