function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
  fill(237, 34, 93);

  }
function draw(){

  clear();

  fill(237, 34, 93);

  let speed = abs(winMouseX - pwinMouseX);

  
if (mouseIsPressed) {

  fill(27, 34, 93);
  ellipse(windowWidth/1, windowHeight/1, 10 + speed * 5, 10 + speed * 5)

  ellipse(windowWidth/3, windowHeight/3, 10 + speed * 10, 10 + speed * 10)

  ellipse(windowWidth/4, windowHeight/4, 10 + speed * 15, 10 + speed * 15)

  ellipse(windowWidth/5, windowHeight/5, 10 + speed * 50, 10 + speed * 50)





  } else {
    ellipse(mouseX, mouseY, 10 + speed * 5, 10 + speed * 5)
  }

  print(mouseIsPressed);


  
}

