import { Scene } from "phaser";
import atlasJSON from '../tiles.json';
import mapJSON from './assets/map.json';
import atlas from './assets/0x72_DungeonTilesetII_v1.4.png';
import { Player } from "./Player";
export class MainScene extends Scene{
    preload(){
        this.load.atlas('atlas', atlas, atlasJSON);
        this.load.tilemapTiledJSON('map', mapJSON);

    }
    create(){
        
        const map = this.make.tilemap({ key: 'map' });

        // The first parameter is the name of the tileset in Tiled and the second parameter is the key
        // of the tileset image used when loading the file in preload.
        const tiles = map.addTilesetImage('0x72_DungeonTilesetII_v1.4', 'atlas');

        // You can load a layer from the map using the layer name from Tiled, or by using the layer
        // index (0 in this case).
        const layer = map.createLayer(0, tiles, 0, 0);
        layer.setCollision(1);
        layer.setScale(4);
        console.log(this.physics);
        let player = this.add.existing(new Player(this, 100, 100));
        this.physics.add.existing(player);
        this.physics.add.collider(player, layer);

        const layer2 = map.createLayer(1, tiles, 0, 0);
        layer2.setScale(4);
       

    }
    update(){
        
    }
}