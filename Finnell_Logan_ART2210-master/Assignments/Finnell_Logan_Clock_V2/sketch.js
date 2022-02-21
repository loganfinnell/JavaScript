let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);


  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;
}

function draw() {
  background('#CFB4E4');

  let h3 = map(hour() + norm(minute(), 0, 60), 0, 48, 0, TWO_PI * 2) + PI;
  push();
  translate(width / 2, height / 2);
  rotate(h3);
  fill('#9ADBEC');
  arc(0, 0, windowWidth * 4, windowWidth * 4, 0, PI);
  pop();



  // Draw the clock background
  noStroke();
 fill('#FFCC8B');
ellipse(cx, cy, clockDiameter - 250, clockDiameter - 250);
 

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  //stroke(255);
  //strokeWeight(1);
  //line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  //strokeWeight(2);
  //line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  //strokeWeight(4);
  //line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  //earth
  fill('#ABE9DD');
  ellipse(cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius, 150, 150);

push();
//moon
translate(cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  rotate(m);
  fill('#FCEDA7');
  ellipse(0, 200 , 50, 50);
pop();


push();
//star
translate(cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  rotate(m);
  fill('#DEEEDC');
  translate(0, 200);
  rotate(s);
  star(0, 130, 10, 20, 5);
pop();

  fill('#DEEEDC');

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