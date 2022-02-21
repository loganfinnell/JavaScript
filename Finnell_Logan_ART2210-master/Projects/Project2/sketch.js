//new
class Module {
  constructor(xOff, yOff, x, y, speed, unit) {
    this.xOff = xOff;
    this.yOff = yOff;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.unit = unit;
    this.xDir = 1;
    this.yDir = 1;
  }

  // Custom method for updating the variables
  update() {
    this.x = this.x + this.speed * this.xDir;
    if (this.x >= this.unit || this.x <= 0) {
      this.xDir *= -1;
      this.x = this.x + 5 * this.xDir;
      this.y = this.y + 5 * this.yDir;
    }
    if (this.y >= this.unit || this.y <= 0) {
      this.yDir *= -1;
      this.y = this.y + 7 * this.yDir;
    }
  }

  // Custom method for drawing the object
  draw() {
    randomSeed(seed);
    let colors = ['#FF0000', '#0000FF', '#008000'];
    let color = random(colors);

    let sizes = [10, 5, 15];
    let size = random(sizes);

    fill(color);
    ellipse(this.xOff + this.x, this.yOff + this.y, size, size);
  }
}
let unit = 80;
let count;
let mods = [];
//new




// for red, green, and blue color values
let r, g, b;
let f;
let h;
let o;
let s;
function setup() {
  createCanvas(windowWidth, windowHeight);


//new
  noStroke();
  let wideCount = width / unit;
  let highCount = height / unit;
  count = wideCount * highCount;
seed = random(255);
  let index = 0;
  for (let y = 0; y < highCount; y++) {
    for (let x = 0; x < wideCount; x++) {
      mods[index++] = new Module(
        x * unit,
        y * unit,
        unit / 2,
        unit / 2,
        random(0.05, 0.8),
        unit
      );
    }
  }
//new





  // Pick colors randomly
  r = [0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0];
  g = [100, 100, 100, 100, 100, 100, 100 ,100 ,100 ,100];
  b = [0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0];
  f = [0, 0];
  h = [0, 0];
  o = [127, 127, 127, 127, 127, 127, 127, 127, 127, 127]
  s = [1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1];
  t = [30, 1 ]
}

function draw() {
  background(0);


  //new
  for (let i = 0; i < count; i++) {
    mods[i].update();
    mods[i].draw();
  }
//new



  //instructions
  textSize(20);
  strokeJoin(ROUND);
  strokeWeight(3);
  stroke(0, 0, 0);
  fill(255, 255, 255);
  textAlign(LEFT, TOP);
  text('LEFT click a circle', 50, 100);
  text('to turn it', 50, 130);
  
  text('RIGHT click a circle', 50, 190);
  text('to turn it', 50, 220);

  text('Make all circles', 50, 280);
  text('or', 108, 310);
  text('to', 50, 340);

  stroke(0, 0, 100);
  text('BLUE', 130, 130);
  text('BLUE', 50, 310);

  stroke(100, 0, 0);
  text('RED', 130, 220);
  text('RED', 133, 310);

  stroke(0, 100, 0);
  text('WIN', 75, 340);

  // reset text
  textSize(t[0]);
  strokeWeight(t[1]);
  stroke(0, 100, 0, o[0]);
  fill(0, 100, 0, o[0]);
  textAlign(CENTER);
  text('RESET', 1000, 100);

  push();
  let d = dist(mouseX, mouseY, 1000, 200);
  if (d < 50) {
   s[0] = 6;
   o[0] = 300;
   t[0] = 30
   t[1] = 3
  }
  else {
    s[0] = 0;
    o[0] = 150; 
  t[0] = 25 
  t[1] = 1}
  pop();

  strokeWeight(s[0]);
  stroke(r[9], g[9], b[9]);
  fill(r[9], g[9], b[9], o[0]); //resetbutton
  ellipse(1000, 200, 100, 100);

  push();
  let d1 = dist(mouseX, mouseY, 360, 200);
  if (d1 < 100) {
   s[1] = 6;
   o[1] = 300;
  }
  else {
    s[1] = 0;
    o[1] = 150; }
  pop();

  strokeWeight(s[1]);
  stroke(r[0], g[0], b[0]);
  fill(r[0], g[0], b[0], o[1]);
  ellipse(360, 200, 200, 200);

  push();
  let d2 = dist(mouseX, mouseY, 580, 200);
  if (d2 < 100) {
   s[2] = 6;
   o[2] = 300;
  }
  else {
    s[2] = 0;
    o[2] = 150; }
  pop();

  strokeWeight(s[2]);
  stroke(r[1], g[1], b[1]);
  fill(r[1], g[1], b[1], o[2]);
  ellipse(580, 200, 200, 200);

  push();
  let d3 = dist(mouseX, mouseY, 800, 200);
  if (d3 < 100) {
   s[3] = 6;
   o[3] = 300;
  }
  else {
    s[3] = 0;
    o[3] = 150; }
  pop();

  strokeWeight(s[3]);
  stroke(r[2], g[2], b[2]);
  fill(r[2], g[2], b[2], o[3]);
  ellipse(800, 200, 200, 200);

  push();
  let d4 = dist(mouseX, mouseY, 360, 420);
  if (d4 < 100) {
   s[4] = 6;
   o[4] = 300;
  }
  else {
    s[4] = 0;
    o[4] = 150; }
  pop();

  strokeWeight(s[4]);
  stroke(r[3], g[3], b[3]);
  fill(r[3], g[3], b[3], o[4]);
  ellipse(360, 420, 200, 200);

  push();
  let d5 = dist(mouseX, mouseY, 580, 420);
  if (d5 < 100) {
   s[5] = 6;
   o[5] = 300;
  }
  else {
    s[5] = 0;
    o[5] = 150; }
  pop();

  strokeWeight(s[5]);
  stroke(r[4], g[4], b[4]);
  fill(r[4], g[4], b[4], o[5]);
  ellipse(580, 420, 200, 200);

  push();
  let d6 = dist(mouseX, mouseY, 800, 420);
  if (d6 < 100) {
   s[6] = 6;
   o[6] = 300;
  }
  else {
    s[6] = 0;
    o[6] = 150; }
  pop();

  strokeWeight(s[6]);
  stroke(r[5], g[5], b[5]);
  fill(r[5], g[5], b[5], o[6]);
  ellipse(800, 420, 200, 200);

  push();
  let d7 = dist(mouseX, mouseY, 360, 640);
  if (d7 < 100) {
   s[7] = 6;
   o[7] = 300;
  }
  else {
    s[7] = 0;
    o[7] = 150; }
  pop();

  strokeWeight(s[7]);
  stroke(r[6], g[6], b[6]);
  fill(r[6], g[6], b[6], o[7]);
  ellipse(360, 640, 200, 200);

  push();
  let d8 = dist(mouseX, mouseY, 580, 640);
  if (d8 < 100) {
   s[8] = 6;
   o[8] = 300;
  }
  else {
    s[8] = 0;
    o[8] = 150; }
  pop();

  strokeWeight(s[8]);
  stroke(r[7], g[7], b[7]);
  fill(r[7], g[7], b[7], o[8]);
  ellipse(580, 640, 200, 200);

  push();
  let d9 = dist(mouseX, mouseY, 800, 640);
  if (d9 < 100) {
   s[9] = 6;
   o[9] = 300;
  }
  else {
    s[9] = 0;
    o[9] = 150; }
  pop();

  strokeWeight(s[9]);
  stroke(r[8], g[8], b[8]);
  fill(r[8], g[8], b[8], o[9]);
  ellipse(800, 640, 200, 200);

  textSize(80);
  strokeWeight(0);
  fill(r[9], g[9], b[9], f[0]);
  textAlign(CENTER, CENTER);
  text('YOU WIN!', 580, 440);



  push();
  if (r[0] + r[1] + r[2] + r[3] + r[4] + r[5] + r[6] + r[7] + r[8] > 800) {
    f[0] = 500;
  }

  else {
    f[0] = 0;
 }
pop();

push();
if (r[0] + r[1] + r[2] + r[3] + r[4] + r[5] + r[6] + r[7] + r[8] > 800) {
  h[0] = 5000;
}

else {
   h[0] = 0;
}
pop();


textSize(80);
strokeWeight(0);
fill(r[9], g[9], b[9], f[1]);
textAlign(CENTER);
text('YOU WIN!', 580, 440);

push();
  if (b[0] + b[1] + b[2] + b[3] + b[4] + b[5] + b[6] + b[7] + b[8] > 800) {
    f[1] = 500;
  }

  else {
     f[1] = 0;
  }
  pop();


//winreset
  push();
  if (b[0] + b[1] + b[2] + b[3] + b[4] + b[5] + b[6] + b[7] + b[8] > 800) {
    h[1] = 5000;
  }

  else {
     h[1] = 0;
  }
  pop();

}

// When the user clicks the mouse
function mousePressed() {
  if (mouseButton === LEFT){
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r[0] = 0;
    g[0] = 0;
    b[0] = 100;
    r[3] = 0;
    g[3] = 0;
    b[3] = 100;
  }}

   if (mouseButton === RIGHT){
  // Check if mouse is inside the circle
   let d = dist(mouseX, mouseY, 360, 200);
   if (d < 100) {
   // Pick new random color values
   r[0] = 100;
   g[0] = 0;
   b[0] = 0;
   r[2] = 100;
   g[2] = 0;
   b[2] = 0;
   r[4] = 0;
   g[4] = 100;
   b[4] = 0;
  }}



 if (mouseButton === LEFT){
 // Check if mouse is inside the circle
let d = dist(mouseX, mouseY, 580, 200);
if (d < 100) {
 // Pick new random color values
 r[1] = 0;
 g[1] = 0;
 b[1] = 100;
 r[3] = 0;
 g[3] = 0;
 b[3] = 100;
 r[6] = 0;
 g[6] = 0;
 b[6] = 100;
 r[7] = 100;
 g[7] = 0;
 b[7] = 0;

}}

 if (mouseButton === RIGHT){
 // Check if mouse is inside the circle
let d = dist(mouseX, mouseY, 580, 200);
 if (d < 100) {
 // Pick new random color values
r[1] = 100;
g[1] = 0;
b[1] = 0;
r[3] = 0;
g[3] = 100;
b[3] = 0;
r[8] = 100;
g[8] = 0;
b[8] = 0;



}}



  if (mouseButton === LEFT){
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 800, 200);
  if (d < 100) {
    // Pick new random color values
    r[2] = 0;
    g[2] = 0;
    b[2] = 100;
  }}

   if (mouseButton === RIGHT){
  // Check if mouse is inside the circle
   let d = dist(mouseX, mouseY, 800, 200);
   if (d < 100) {
   // Pick new random color values
   r[2] = 100;
   g[2] = 0;
   b[2] = 0;
   r[4] = 0;
   g[4] = 100;
   b[4] = 0;
   r[8] = 100;
   g[8] = 0;
   b[8] = 0;
  }}



   if (mouseButton === LEFT){
    // Check if mouse is inside the circle
    let d = dist(mouseX, mouseY, 360, 420);
    if (d < 100) {
      // Pick new random color values
      r[3] = 0;
      g[3] = 0;
      b[3] = 100;
      r[5] = 0;
      g[5] = 100;
      b[5] = 0;
      r[7] = 0;
      g[7] = 0;
      b[7] = 100;

    }}

     if (mouseButton === RIGHT){
    // Check if mouse is inside the circle
     let d = dist(mouseX, mouseY, 360, 420);
     if (d < 100) {
     // Pick new random color values
     r[3] = 100;
     g[3] = 0;
     b[3] = 0;
    }}



     if (mouseButton === LEFT){
      // Check if mouse is inside the circle
      let d = dist(mouseX, mouseY, 580, 420);
      if (d < 100) {
        // Pick new random color values
        r[4] = 0;
        g[4] = 0;
        b[4] = 100;
        r[5] = 0;
        g[5] = 0;
        b[5] = 100;
        r[6] = 0;
        g[6] = 0;
        b[6] = 100;
        r[0] = 100;
        g[0] = 0;
        b[0] = 0;

      }}

       if (mouseButton === RIGHT){
      // Check if mouse is inside the circle
       let d = dist(mouseX, mouseY, 580, 420);
       if (d < 100) {
       // Pick new random color values
       r[4] = 100;
       g[4] = 0;
       b[4] = 0;
       r[1] = 100;
       g[1] = 0;
       b[1] = 0;
       r[3] = 0;
       g[3] = 100;
       b[3] = 0;
      }}



       if (mouseButton === LEFT){
        // Check if mouse is inside the circle
        let d = dist(mouseX, mouseY, 800, 420);
        if (d < 100) {
          // Pick new random color values
          r[5] = 0;
          g[5] = 0;
          b[5] = 100;
          r[8] = 0;
          g[8] = 0;
          b[8] = 100;
          r[1] = 0;
          g[1] = 100;
          b[1] = 0;
          r[4] = 100;
          g[4] = 0;
          b[4] = 0;





        }}

         if (mouseButton === RIGHT){
        // Check if mouse is inside the circle
         let d = dist(mouseX, mouseY, 800, 420);
         if (d < 100) {
         // Pick new random color values
         r[5] = 100;
         g[5] = 0;
         b[5] = 0;
         r[6] = 100;
         g[6] = 0;
         b[6] = 0;
         r[7] = 100;
         g[7] = 0;
         b[7] = 0;
        }}



         if (mouseButton === LEFT){
          // Check if mouse is inside the circle
          let d = dist(mouseX, mouseY, 360, 640);
          if (d < 100) {
            // Pick new random color values
            r[6] = 0;
            g[6] = 0;
            b[6] = 100;
          }}

           if (mouseButton === RIGHT){
          // Check if mouse is inside the circle
           let d = dist(mouseX, mouseY, 360, 640);
           if (d < 100) {
           // Pick new random color values
           r[6] = 100;
           g[6] = 0;
           b[6] = 0;
          }}



       if (mouseButton === LEFT){
        // Check if mouse is inside the circle
        let d = dist(mouseX, mouseY, 580, 640);
        if (d < 100) {
          // Pick new random color values
          r[7] = 0;
          g[7] = 0;
          b[7] = 100;
          r[1] = 0;
          g[1] = 0;
          b[1] = 100;
          r[2] = 0;
          g[2] = 100;
          b[2] = 0;


        }}

         if (mouseButton === RIGHT){
        // Check if mouse is inside the circle
         let d = dist(mouseX, mouseY, 580, 640);
         if (d < 100) {
         // Pick new random color values
         r[7] = 100;
         g[7] = 0;
         b[7] = 0;
         r[0] = 0;
         g[0] = 0;
         b[0] = 100;
         r[5] = 0;
         g[5] = 100;
         b[5] = 0;
        }}



         if (mouseButton === LEFT){
          // Check if mouse is inside the circle
          let d = dist(mouseX, mouseY, 800, 640);
          if (d < 100) {
            // Pick new random color values
            r[8] = 0;
            g[8] = 0;
            b[8] = 100;
            r[2] = 0;
            g[2] = 100;
            b[2] = 0;
            r[4] = 0;
            g[4] = 100;
            b[4] = 0;

          }}

           if (mouseButton === RIGHT){
          // Check if mouse is inside the circle
           let d = dist(mouseX, mouseY, 800, 640);
           if (d < 100) {
           // Pick new random color values
           r[8] = 100;
           g[8] = 0;
           b[8] = 0;
           r[6] = 100;
           g[6] = 0;
           b[6] = 0;
            }}






//resetbutton
     if (mouseButton === LEFT){
      // Check if mouse is inside the circle
      let d = dist(mouseX, mouseY, 1000, 200);
      if (d < 50) {
        // Pick new random color values
        r[0] = 0;
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 0;
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;

        g[0] = 100;
        g[1] = 100;
        g[2] = 100;
        g[3] = 100;
        g[4] = 100;
        g[5] = 100;
        g[6] = 100;
        g[7] = 100;
        g[8] = 100;
        
        b[0] = 0;
        b[1] = 0;
        b[2] = 0;
        b[3] = 0;
        b[4] = 0;
        b[5] = 0;
        b[6] = 0;
        b[7] = 0;
        b[8] = 0;
}}

if (mouseButton === RIGHT){
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 1000, 200);
  if (d < 50) {
    // Pick new random color values
    r[0] = 0;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 0;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;

    g[0] = 100;
    g[1] = 100;
    g[2] = 100;
    g[3] = 100;
    g[4] = 100;
    g[5] = 100;
    g[6] = 100;
    g[7] = 100;
    g[8] = 100;
    
    b[0] = 0;
    b[1] = 0;
    b[2] = 0;
    b[3] = 0;
    b[4] = 0;
    b[5] = 0;
    b[6] = 0;
    b[7] = 0;
    b[8] = 0;
}}


//winresetbuttonRED
if (mouseButton === LEFT){
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 580, 440);
  if (d < h[0]) {
    // Pick new random color values
    r[0] = 0;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 0;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;

    g[0] = 100;
    g[1] = 100;
    g[2] = 100;
    g[3] = 100;
    g[4] = 100;
    g[5] = 100;
    g[6] = 100;
    g[7] = 100;
    g[8] = 100;
    
    b[0] = 0;
    b[1] = 0;
    b[2] = 0;
    b[3] = 0;
    b[4] = 0;
    b[5] = 0;
    b[6] = 0;
    b[7] = 0;
    b[8] = 0;
}}

if (mouseButton === RIGHT){
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 580, 440);
  if (d < h[0]) {
    // Pick new random color values
    r[0] = 0;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 0;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;

    g[0] = 100;
    g[1] = 100;
    g[2] = 100;
    g[3] = 100;
    g[4] = 100;
    g[5] = 100;
    g[6] = 100;
    g[7] = 100;
    g[8] = 100;
    
    b[0] = 0;
    b[1] = 0;
    b[2] = 0;
    b[3] = 0;
    b[4] = 0;
    b[5] = 0;
    b[6] = 0;
    b[7] = 0;
    b[8] = 0;
}}

//winresetbuttonBLUE
if (mouseButton === LEFT){
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 580, 440);
  if (d < h[1]) {
    // Pick new random color values
    r[0] = 0;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 0;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;

    g[0] = 100;
    g[1] = 100;
    g[2] = 100;
    g[3] = 100;
    g[4] = 100;
    g[5] = 100;
    g[6] = 100;
    g[7] = 100;
    g[8] = 100;
    
    b[0] = 0;
    b[1] = 0;
    b[2] = 0;
    b[3] = 0;
    b[4] = 0;
    b[5] = 0;
    b[6] = 0;
    b[7] = 0;
    b[8] = 0;
}}

//winresetbuttonBLUE
if (mouseButton === RIGHT){
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 580, 440);
  if (d < h[1]) {
    // Pick new random color values
    r[0] = 0;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 0;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;

    g[0] = 100;
    g[1] = 100;
    g[2] = 100;
    g[3] = 100;
    g[4] = 100;
    g[5] = 100;
    g[6] = 100;
    g[7] = 100;
    g[8] = 100;
    
    b[0] = 0;
    b[1] = 0;
    b[2] = 0;
    b[3] = 0;
    b[4] = 0;
    b[5] = 0;
    b[6] = 0;
    b[7] = 0;
    b[8] = 0;
}}




if (mouseButton === RIGHT){
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 1000) {
    // Pick new random color values
    seed = random(255);
    
  }
}


if (mouseButton === LEFT){
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 1000) {
    // Pick new random color values
    seed = random(255);
    
  }
}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


