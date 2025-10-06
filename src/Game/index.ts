import Phaser from 'phaser';
import EscenaCocina from './scenes/level1/EscenaCocina';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import EscenarioPerchera from '../Game/scenes/level2/EscenarioPerchera'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-container',
    scene: [EscenarioPerchera,EscenaCocina],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    plugins: {
        scene: [{
            key: 'rexUI',
            plugin: RexUIPlugin,
            mapping: 'rexUI'
        }]
    }
};



export default new Phaser.Game(config);

