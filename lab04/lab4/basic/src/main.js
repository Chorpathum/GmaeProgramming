import Phaser from './lib/phaser.js';
import MenuScene from "./scenes/menu.js"
import GameScene from "./scenes/game.js"
import GameOver from './scenes/gameover.js'


var config = {
    type: Phaser.AUTO,
    width: 16*60,
    height: 8*60,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },
    scene: [MenuScene, GameScene,GameOver],
    parent: "gamecanvas",
    scale: {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
};

const game = new Phaser.Game(config);

export default game;