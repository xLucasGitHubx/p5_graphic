// Le code à l'intérieur de la fonction setup est automatiquement exécuté par p5 au démarrage du dessin (quand on clique sur la flèche en haut).
// function setup() {
// 	// Créer la zone de dessin. 600 px de large, et 400px de haut.
// 	createCanvas(2000, 2000);
// 	background(1);

// 	// Changer la couleur du remplissage des formes. Même chose pour la couleur. Pour la couleur, voir le "background" plus bas.
// 	fill(0);
// 	stroke("white");
// 	// Désactiver le remplissage des formes.
// 	noFill();
// }
// function mouseClicked() {
// 	ellipse(mouseX, mouseY, 50, 50);
// }

// function mouseMoved() {
// 	ellipse(mouseX, mouseY, 50, 50);
// }

function setup() {
	createCanvas(400, 400);
	fill(1);
}
// function draw() {
// 	for (let i = 10; i < 400; i += 40) {
// 		square(i, 0, 25);
// 	}
// }
function draw() {
	for (let i = 10; i < 400; i += 40) {
		for (let j = 10; j < 400; j += 40) {
			square(i, j, 25);
		}
	}
}
