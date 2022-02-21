var bounces = [];
var ball;
var ball1;
var ball2;
var pipes = [];
var pipesCleared
var gravity = .5;
var FC = 200







//yeet
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	pipesCleared = 0

	ball1 = new Ball(150, windowHeight/2, 25);
	pipes.push(new Pipe());
	bounces.push(new Bounce());
}

function draw() {
	background('#10042d');

	fill('#fdc418')
circle(width/2, height-height/4, width-width/2)

	strokeWeight(1);
	stroke('#5ca6ce');
	for (var y = height-height/4; y <= height; y += 40) {
	for (var x = 0; x <= width; x += 40) {
	fill('#0a031a');
	square(x, y, 40);
	}
	}




	
	for (var i = bounces.length-1; i >= 0; i--){
		bounces[i].show();
		bounces[i].update();

		if (bounces[i].hits(ball1)){

			gravity = -15;
					}
else {gravity = .5}



		if(bounces[i].offscreen()){
			bounces.splice(i, 1);
		
		}
	}

	ball1.display();

	ball1.update();

	
	for (var i = pipes.length-1; i >= 0; i--){
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].hits(ball1)){
console.log("HIT");
pipesCleared--
		}

		if(pipes[i].offscreen()){
			pipes.splice(i, 1);
			pipesCleared += 2
		}
	}



	if(pipesCleared > 1){
		FC = 150;
	}
	
	if(pipesCleared > 25){
		FC = 100;
	}
	
	if(pipesCleared > 35){
		FC = 75;
	}

	if(pipesCleared > 50){
		FC = 50;
	}









	fill(255)
	textSize(40)
	text('SCORE: ' + pipesCleared, 50, 50)

	
	if (frameCount % FC == 0){
		pipes.push(new Pipe());
		
			}
			let RFs = ['425', '650', '775', '825'];
let RF = random(RFs);
			if (frameCount % RF == 0){
				bounces.push(new Bounce());
				
					}		

}



