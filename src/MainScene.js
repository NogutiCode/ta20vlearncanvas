import { Scene } from "phaser";
import atlasJSON from '../tiles.json';
import atlas from './assets/0x72_DungeonTilesetII_v1.4.png';
import { Player } from "./Player";
export class MainScene extends Scene{
    preload(){
        this.load.atlas('atlas', atlas, atlasJSON);
    }
    create(){
        this.add.existing(new Player(this, 100, 100));
        
    }
    update(){
        
    }
}