export class Scene {

    ctx;
    entities = [];
    keysDown = {};
    constructor(ctx){
        this.ctx = ctx;
        
    }

    beforeUpdate(){
        this.entities.forEach(entity => {
            entity.beforeUpdate(this.ctx);
        });
    }

    update(delta){
        this.entities.forEach(entity => {
            entity.update(delta, this.keysDown);
        });
    }

    draw(){
        this.entities.forEach(entity => {
            entity.draw(this.ctx);
        });
    }

    add(entity){
        this.entities.push(entity);
    }
    keyDown(evt) {
        this.keysDown[evt.code] = true;
    }
    keyUp(evt) {
        this.keysDown[evt.code] = false;
    }
}