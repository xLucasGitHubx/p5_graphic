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
	let c1 = color(255, 0, 0);
	if (i % 3 == 0) {
		stroke(c1);
		circle(x - a, y - a, 50);
		stroke("white");
		circle(x - a, y - a, 100);
		ellipse(x - a, y - a, 50, 100);
		ellipse(x - a, y - a, 100, 50);
		i++;
	}
	if (i % 3 == 1) {
		stroke(c1);
		circle(x + b, y + b, 50);
		stroke("white");
		circle(x + b, y + b, 100);
		ellipse(x + b, y + b, 50, 100);
		ellipse(x + b, y + b, 100, 50);
		i++;
	}
	if (i % 3 == 2) {
		stroke(c1);
		circle(x - c, y + c, 50);
		stroke("white");
		circle(x - c, y + c, 100);
		ellipse(x - c, y + c, 50, 100);
		ellipse(x - c, y + c, 100, 50);
		i++;
	}
	stroke(c1);
	circle(mouseX, mouseY, 50);
	stroke("white");
	circle(mouseX, mouseY, 100);
	ellipse(mouseX, mouseY, 50, 100);
	ellipse(mouseX, mouseY, 100, 50);
}
