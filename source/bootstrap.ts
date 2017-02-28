import Game from "./content/game";

window.addEventListener('DOMContentLoaded', () => {
    // Create the game using the 'renderCanvas'
    let game = new Game('renderCanvas');

    // Create the scene
    game.createScene();

    // start animation
    game.animate();
});