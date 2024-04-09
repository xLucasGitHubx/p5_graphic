let RGB = 0;
let value = 1;
function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background(0);
	stroke(255);
	strokeWeight(5);
}

function mouseClicked() {
	RGB++;
}

function draw() {
	value -= 0.01;
	if (value <= 0) {
		value = 1;
	}
	if (RGB % 3 == 0) {
		fill(255 * value, 0, 0);
	} else if (RGB % 3 == 1) {
		fill(0, 255 * value, 0);
	} else {
		fill(0, 0, 255 * value);
	}

	rectMode(CENTER);
	background(0, 0, 0, 2000);
	if (mouseY > 250) {
		rect(width / 2, height / 2, 2 * mouseX, 2 * mouseX);
	} else {
		ellipse(width / 2, height / 2, 2 * mouseX);
	}
}
