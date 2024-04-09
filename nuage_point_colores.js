function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background(0);
	strokeWeight(5);
}
function draw() {
	for (let i = 0; i < 500; i++) {
		let x = Math.random() * 600;
		let y = Math.random() * 600;
		let x2 = Math.random() * 600;
		let y2 = Math.random() * 600;
		let x3 = Math.random() * 600;
		let y3 = Math.random() * 600;
		stroke("yellow");
		point(x, y);
		stroke("green");
		point(x2, y2);
		stroke("magenta");
		point(x3, y3);
	}
}
