let disparition = 255;
function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(2000, 2000);
	background(0);
	stroke(255);
	// Désactiver le remplissage des formes.
	noFill();
}
function draw() {
	background(0, 0, 0, 50);
}
function mouseMoved() {
	ellipse(mouseX, mouseY, 50, 50);

	console.log(disparition);
}
