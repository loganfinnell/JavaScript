function setup(){
 
    createCanvas(windowWidth,windowHeight);
    background('#fae');
    
 }
  
 function draw(){// three-digit hexadecimal RGB notation
   
   ellipse(mouseX, mouseY, 55, 55);
 }
 
  
 function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
    background('#fae');
    ellipse(mouseX, mouseY, 55, 55);
 }
 

 