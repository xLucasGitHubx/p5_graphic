function setup() {
	// Créer la zone de dessin. 600 px de large, et 400px de haut.
	createCanvas(600, 600);
	background("blue");
	strokeWeight(5);
	noStroke();
	fill("red");
}
let x = 0;
let y = 0;
let sensH = 0;
let sensV = 0;
let brake = 1;
function draw() {
	background(0, 0, 255, 100);
	circle(x * brake, y * brake, 25);
	// if (brake > 1) {
	// 	brake = 1;
	// }
	if (brake > 0.17) {
		if (x * brake >= 587.5) {
			sensH++;
			x -= 3.6;
		} else if (x * brake <= 12.5) {
			sensH++;
			x += 3.6;
		} else if (sensH % 2 == 0) {
			x += 3.6;
		} else if (sensH % 2 == 1) {
			x -= 3.6;
		}
		if (y * brake >= 587.5) {
			sensV++;
			y -= 2.2;
		} else if (y * brake <= 12.5) {
			sensV++;
			y += 2.2;
		} else if (sensV % 2 == 0) {
			y += 2.2;
		} else if (sensV % 2 == 1) {
			y -= 2.2;
		}
		brake /= 1.002;
	}
	console.log(brake);
}

function mouseClicked() {
	brake *= 1.5;
}
