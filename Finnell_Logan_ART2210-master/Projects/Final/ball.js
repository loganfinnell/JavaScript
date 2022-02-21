
  function Ball() {
	this.x = 64;  
	this.y = height/2;  
	this.w = 20;  
	this.speed = 0;  
  
	this.display = function() {
	
	  fill(255); 
	  stroke(0); 

	  if (keyIsDown(LEFT_ARROW)) {
		this.x -= 5;
		this.speed = this.speed * +.97;
	  }

	  if (keyIsDown(RIGHT_ARROW)) {
		this.x += 5;
		this.speed = this.speed * +.97;
	  }

	  if (keyIsDown(DOWN_ARROW)) {
		this.y -= 3;
	  }

	  ellipse(this.x,this.y,this.w,this.w);
	};
  
	this.update = function() {
	 
	  this.y = this.y + this.speed; 
  
	  
	  this.speed = this.speed + gravity; 
  
	 
	  if (this.y > height) { 
		this.speed = this.speed * -.95;  
	  } 

	  if (this.x > width) { 
		this.x = this.x * -0.05;  
	  } 
	  if (this.x < 0) { 
		this.x = this.x * -0.95;  
	  } 

	}

	
  }
