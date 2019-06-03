class Player {
    constructor(x, y, health) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 40; 
        this.health = health;
        this.xv = 0;
        this.yv = 0;
        this.onGround = false;
        this.onRight = false;
        this.onLeft = false;
    }
    hit(amount) {
        this.health += -amount;
    }
    draw() {
        fill("#FFF")
        rect(this.x, this.y, this.width, this.height);
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
    newton() {
        // GRAVITY
        if(this.onGround == false){
            this.yv += 0.4;
        }
        this.y += this.yv;

        // Friction
        if(this.xv < 0) {
            this.xv += 0.2;
            if(this.xv < 0 & this.xv > -0.2) {
                this.xv = 0;
            }
        } else if(this.xv > 0) {
            this.xv -= 0.2;
            if(this.xv > 0 & this.xv < 0.2) {
                this.xv = 0;
            }
        }

        //Movement
        this.x += this.xv;        
    }
    collideBottom(e) {
        if((this.y + this.height) > e.y) {
            this.y = e.y - this.height;
            this.onGround = true;
        }
        if(this.y == e.y - this.height) {
            this.onGround = true;
        } else {
            this.onGround = false;
        }
    }
    collideRight(e) {
        if((this.x + this.width) > e.x) {
            this.x = e.x - this.width;
            this.xv = 0;
            this.onRight = true;
        } else {
            this.onRight = false;
        }
    }
    collideLeft(e) {
        if(this.x < (e.x + e.width)) {
            this.x = e.x + e.width + 1;
            this.xv = 0;
            this.onLeft = true;
        } else {
            this.onLeft = false;
        }
    }
}