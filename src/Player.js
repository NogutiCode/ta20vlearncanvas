import Phaser from 'phaser';
export class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y){
        super(scene, x, y, 'player');
        this.setTexture('atlas', 'knight_m_idle_anim');
        this.setScale(4);
        this.maxSpeed = 300;
        this.keys = {
            a: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            s: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            d: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            w: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        }
    }
    move(key, delta){
        let oppositeCheck = key.keyCode == 65 || key.keyCode == 68 ? (this.keys.s.isDown || this.keys.w.isDown) : (this.keys.a.isDown || this.keys.d.isDown);
        let axis = key.keyCode == 65 || key.keyCode == 68 ? 'x' : 'y';
        let direction = key.keyCode == 83 || key.keyCode == 68 ? 1 : -1;
        if(key.isDown){
            if(oppositeCheck){
                this[axis] += direction * Math.sqrt((this.maxSpeed * this.maxSpeed)/2)  / 1000 * delta;
            } else {
                this[axis] += direction * this.maxSpeed / 1000 * delta;
            }
        }
    }
    preUpdate(time, delta){
        super.preUpdate(time, delta);
        this.move(this.keys.a, delta);
        this.move(this.keys.d, delta);
        this.move(this.keys.w, delta);
        this.move(this.keys.s, delta);
    }
}