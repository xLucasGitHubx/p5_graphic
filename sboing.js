function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background("blue");
	strokeWeight(5);
	noStroke();
	fill("red");
}
let i = 0;
let sens = 0;
function draw() {
	background(0, 0, 255, 100);
	circle(i, 300, 25);
	if (i >= 587.5) {
		sens++;
		i -= 2;
	} else if (i <= 12.5) {
		sens++;
		i += 2;
	} else if (sens % 2 == 0) {
		i += 2;
	} else if (sens % 2 == 1) {
		i -= 2;
	}
	console.log(i, sens);
}
