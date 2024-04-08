let R = -10;
let G = -10;
let B = -10;
function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background(0);
	stroke(255);
	strokeWeight(5);
}

function mouseClicked() {
	fill(0, 0, 0, 100);
	if (R == -10 && G == -10 && B == -10) {
		R = 255;
	} else if (B == -10) {
		R = -10;
		G = 255;
		B = -10;
	} else if (R == -10) {
		R = -10;
		G = -10;
		B = 255;
	} else if (G == -10) {
		R = 255;
		G = -10;
		B = -10;
	}
}

function draw() {
	rectMode(CENTER);
	background(0, 0, 0, 2000);
	if (mouseY > 250) {
		rect(width / 2, height / 2, 2 * mouseX, 2 * mouseX);
	} else {
		ellipse(width / 2, height / 2, 2 * mouseX);
	}
	fill(R, G, B);
	if (G == -10 && B == -10) {
		R -= 1;
	}
	if (G == -10 && R == -10) {
		R = 255;
	}
	if (R == -10 && B == -10) {
		G -= 1;
	}
	if (R == -10 && G == 0) {
		G = 255;
	}
	if (R == -10 && G == -10) {
		B -= 1;
	}
	if (R == -10 && B == 0) {
		B = 255;
	}
	console.log(R, G, B);
}
