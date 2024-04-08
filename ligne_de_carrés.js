function setup() {
	createCanvas(400, 400);
	fill(1);
}
function draw() {
	for (let i = 10; i < 400; i += 40) {
		square(i, i, 25);
	}
}
