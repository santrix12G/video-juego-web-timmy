import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() { super('Preload'); }

  preload() {
    this.load.image('tiles', '/assets/tiles.png');
    this.load.tilemapTiledJSON('map', '/assets/map.json');
    this.load.spritesheet('player', '/assets/player.png', { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    this.scene.start('Main');
  }
}
