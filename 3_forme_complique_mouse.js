function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background(0);
	stroke(255);
	strokeWeight(1.5);
	noFill();
}

let i = 0;
let a = 25;
let b = 50;
let c = 100;
let x = Math.random() * 400 + 100;
let y = Math.random() * 400 + 100;
function draw() {
	background(0, 0, 0, 1000);
	if (i % 3 == 0) {
		circle(x - a, y - a, 50);
		circle(x - a, y - a, 100);
		ellipse(x - a, y - a, 50, 100);
		ellipse(x - a, y - a, 100, 50);
		i++;
	}
	if (i % 3 == 1) {
		circle(x + b, y + b, 50);
		circle(x + b, y + b, 100);
		ellipse(x + b, y + b, 50, 100);
		ellipse(x + b, y + b, 100, 50);
		i++;
	}
	if (i % 3 == 2) {
		circle(x - c, y + c, 50);
		circle(x - c, y + c, 100);
		ellipse(x - c, y + c, 50, 100);
		ellipse(x - c, y + c, 100, 50);
		i++;
	}
	circle(mouseX, mouseY, 50);
	circle(mouseX, mouseY, 100);
	ellipse(mouseX, mouseY, 50, 100);
	ellipse(mouseX, mouseY, 100, 50);
}
