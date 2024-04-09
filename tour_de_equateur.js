function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background("blue");
	strokeWeight(5);
	noStroke();
	fill("red");
}
let i = -25;
function draw() {
	background(0, 0, 255, 100);
	i += 2;
	circle(i, 300, 25);
	if (i > 625) {
		i = -25;
	}
}
