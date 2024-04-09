function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background(0);
	stroke(255);
	strokeWeight(1.5);
	noFill();
}

let i = 0;
function draw() {
	let x = Math.random() * 400 + 100;
	let y = Math.random() * 400 + 100;
	if (i < 3) {
		circle(x, y, 50);
		circle(x, y, 100);
		ellipse(x, y, 50, 100);
		ellipse(x, y, 100, 50);
		i++;
	}
	// background(0);
	// circle(mouseX, mouseY, 50);
	// circle(mouseX, mouseY, 100);
	// ellipse(mouseX, mouseY, 50, 100);
	// ellipse(mouseX, mouseY, 100, 50);
}
