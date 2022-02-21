var x = [20, 40, 60, 20, 40, 60, 30];
function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
}
function draw() {
background(0);
x[0] += 0.5; // Increase the first element
x[1] += 1; // Increase the second element
x[2] += 2;

x[6] += 10;


fill(x[6]);

ellipse(x[0], 46, x[3], x[3]);
ellipse(x[1], 46, x[4], x[4]);

ellipse(x[2], 46, x[5], x[5]);




}
