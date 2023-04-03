export class Box {
    x;
    y;
    size;
    speed = {
        x: 0,
        y: 0,
    }
    maxSpeed;

    constructor(x,y,size,maxSpeed){
        this.x = x;
        this.y = y;
        this.size = size;
        this.maxSpeed = maxSpeed;
    }

    beforeUpdate(ctx){
        ctx.clearRect(Math.floor(this.x), Math.floor(this.y), this.size, this.size);
    }

    update(delta, keysDown){
        if(keysDown.KeyD == true){
            
            if(keysDown.KeyS || keysDown.KeyW){
                this.x += Math.sqrt((this.maxSpeed * this.maxSpeed)/2)  / 1000 * delta;
            } else {
                this.x += this.maxSpeed / 1000 * delta;
            }
        }
        if(keysDown.KeyA == true){
            
            if(keysDown.KeyS || keysDown.KeyW){
                this.x -= Math.sqrt((this.maxSpeed * this.maxSpeed)/2)  / 1000 * delta;
            } else {
                this.x -= this.maxSpeed / 1000 * delta;
            }
        }
        if(keysDown.KeyW == true){
          
            if(keysDown.KeyA || keysDown.KeyD){
                this.y -= Math.sqrt((this.maxSpeed * this.maxSpeed)/2)  / 1000 * delta;
            } else {
                this.y -= this.maxSpeed / 1000 * delta;
            }
        }
        if(keysDown.KeyS == true){
            
            if(keysDown.KeyA || keysDown.KeyD){
                this.y += Math.sqrt((this.maxSpeed * this.maxSpeed)/2)  / 1000 * delta;
            } else {
                this.y += this.maxSpeed / 1000 * delta;
            }
        }
        
    }

    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.fillRect(Math.floor(this.x), Math.floor(this.y), this.size, this.size);
    }
}