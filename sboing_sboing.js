function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background("blue");
	strokeWeight(5);
	noStroke();
	fill("red");
}
let x = 0;
let y = 0;
let sensH = 0;
let sensV = 0;
function draw() {
	background(0, 0, 255, 100);
	circle(x, y, 25);
	if (x >= 587.5) {
		sensH++;
		x -= 3.6;
	} else if (x <= 12.5) {
		sensH++;
		x += 3.6;
	} else if (sensH % 2 == 0) {
		x += 3.6;
	} else if (sensH % 2 == 1) {
		x -= 3.6;
	}
	if (y >= 587.5) {
		sensV++;
		y -= 2.2;
	} else if (y <= 12.5) {
		sensV++;
		y += 2.2;
	} else if (sensV % 2 == 0) {
		y += 2.2;
	} else if (sensV % 2 == 1) {
		y -= 2.2;
	}
}
