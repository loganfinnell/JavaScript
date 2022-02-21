
function setup() {
  createCanvas(windowWidth, windowHeight);

}
  function draw() {
  
    let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
    let h2 = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) + HALF_PI;
    let h3 = map(hour() + norm(minute(), 0, 60), 0, 48, 0, TWO_PI * 2) + PI;
    let h4 = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) + TWO_PI;
    let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;

    background('#CFB4E4');
  
  translate(width / 2, height / 2);
  
  push();
  rotate(h3);
  fill('#9ADBEC');
  arc(0, 0, windowWidth * 4, windowWidth * 4, 0, PI);
  pop();


  push();
  //sun
  strokeWeight(0);
    fill('#FFCC8B');
    ellipse(0, 0, 300, 300);
    pop();
  
    push();
    //earth
     ellipseMode(CENTER);
     fill('#ABE9DD');
     strokeWeight(0);
     strokeCap(ROUND);
     rotate(h);
     ellipse(300, 0, 200, 200);
     pop();
     


     push();
     //moon
     strokeWeight(0);
     ellipseMode(CENTER);
     fill('#FCEDA7');
     rotate(m);
     ellipse(350, 0, 75, 75);
     pop();
     

  push();
  strokeWeight(0);
  //star
  fill('#DEEEDC');
  rotate(s);
  star(450, 0, 20, 10, 5);
  pop();
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }




  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  