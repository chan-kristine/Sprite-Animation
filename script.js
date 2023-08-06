const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
canvas1.height = 350;
canvas1.width = 350;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.height = 300;
canvas2.weight = 300;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.height = 350;
canvas3.width = 350;

const Slide = new Image();
Slide.src = "./images/sliding.png"

const Run = new Image();
Run.src = "./images/running.png"

const Drop = new Image();
Drop.src = "./images/drop.png"

class Sprite {
    constructor(canvasHeight, canvasWidth, animation, spriteWidth, maxFrame){
        this.canvasHeight = canvasHeight;        
        this.canvasWidth = canvasWidth;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = 220.50;
        this.height = this.spriteHeight * 1;
        this.width = this.spriteWidth * 1;
        this.y = canvasHeight - this.height;
        this.x = canvasWidth * 0.5 - this.width * 0.5;
        this.frameX = 0;
        this.fps = 8.9;
        this.frameInterval = 800.50/this.fps;
        this.frameTimer = 0;
        this.image = animation;
        this.maxFrame = maxFrame;

    }

    draw(context){
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }

    update(deltaTime){
        if (this.frameTimer > this.frameInterval){
            if (this.frameX >= this.maxFrame) this.frameX = 0;
            else this.frameX++
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime
        } 
    }
}

const Running = new Sprite(canvas1.width, canvas1.height, Run, 135, 4);
const Sliding = new Sprite(canvas2.width, canvas2.height, Slide, 190, 4);
const Dropping = new Sprite(canvas3.width, canvas3.height, Drop, 190, 4);
let lastTime = 0;

function animate(timeStamp){
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx1.clearRect(0, 0, canvas1.height, canvas1.width);
    ctx2.clearRect(0, 0, canvas2.height, canvas2.width);
    ctx3.clearRect(0, 0, canvas3.height, canvas3.width);


    Running.draw(ctx1); 
    Running.update(deltaTime); 
    
    Sliding.draw(ctx2);
    Sliding.update(deltaTime);

    Dropping.draw(ctx3);
    Dropping.update(deltaTime);

    requestAnimationFrame(animate);
};

animate(0);