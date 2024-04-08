let rectangle;
let value = 255;
function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background(0);
	stroke(255);
	strokeWeight(5);
}
function draw() {
	rectMode(CENTER);
	background(0, 0, 0, 2000);
	if (mouseY > 250) {
		rect(width / 2, height / 2, 2 * mouseX, 2 * mouseX);
	} else {
		ellipse(width / 2, height / 2, 2 * mouseX);
	}
	fill(value, 0, 0);
	value -= 1.2;
	if (value <= 0) {
		value = 255;
	}
}
