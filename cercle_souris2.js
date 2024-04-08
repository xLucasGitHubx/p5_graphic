function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(2000, 2000);
	background(1);
	stroke("white");
	// Désactiver le remplissage des formes.
	noFill();
}
function mouseMoved() {
	ellipse(mouseX, mouseY, 50, 50);
}
