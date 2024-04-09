function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background("blue");
	strokeWeight(5);
	noStroke();
	fill("red");
}
let x = -25;
let y = -25;
function draw() {
	background(0, 0, 255, 100);
	x += 2;
	y += 1.5;
	circle(x, y, 25);
	if (x > 625) {
		x = -25;
	} else if (y > 625) {
		y = -25;
	}
}
