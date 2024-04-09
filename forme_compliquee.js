function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background(0);
	stroke(255);
	strokeWeight(0.5);
	noFill();
}
function draw() {
	circle(300, 300, 50);
	circle(300, 300, 100);
	ellipse(300, 300, 50, 100);
	ellipse(300, 300, 100, 50);
}
