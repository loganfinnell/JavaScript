var img;
function preload() {
img = loadImage("https://github.com/creativeCodingART2210Fall2019Section2/Finnell_Logan_ART2210/raw/master/InClassexercise/Exercise_10_2_19_Media/download.jpg");
}


function setup(){
 
    createCanvas(windowWidth,windowHeight);
  
 }
  
 function draw(){// three-digit hexadecimal RGB notation
    background('#fae');


 
    image(img, 0, 0);
    
      



 }
 
  
 function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
 }
 

 

 