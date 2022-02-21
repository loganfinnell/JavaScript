function Bounce(){
this.top = 0;
this.bottom = 10;
this.x = width;
this.w = 80;
this.speed = 5;


this.highlight = true;

this.hits = function(ball){
if (ball.y < this.top || ball.y > height - this.bottom){
 
 if (ball.x > this.x && ball.x < this.x + this.w){
    
    
    return true;  
 }
}

return false;



}




this.show = function(){
fill(255, 0, 0);
strokeWeight(0);



if (this.highlight){
    let HCs = ['#D7D700', '#FFFF00'];
    let HC = random(HCs);

    fill (HC);
}

rect(this.x, 0, this.w, this.top);
rect(this.x, height-this.bottom, this.w, this.bottom);
}

this.update = function(){
this.x -= this.speed;
}

this.offscreen = function() {
    if (this.x <-this.w){
    return true;
} else{
    return false;

}
}
}