function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background(0);
	strokeWeight(5);
	stroke(255);
}
function draw() {
	for (let i = 0; i < 600; i++) {
		let x = Math.random() * 600;
		let y = Math.random() * 600;
		point(x, y);
	}
}
