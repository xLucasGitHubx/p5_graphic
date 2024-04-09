function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background(0);
	strokeWeight(5);
}
function draw() {
	for (let i = 0; i < 100; i++) {
		let x = Math.random() * 600;
		let y = Math.random() * 600;
		stroke((255 * x) / 600, 0, (255 * y) / 600);
		point(x, y);
	}
}
