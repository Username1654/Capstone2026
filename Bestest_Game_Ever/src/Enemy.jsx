  export default class Enemy {
    constructor(health,damage,img,size,x,y,speed) {
        this.health = health;
        this.damage = damage;
        this.img = img;
        this.size = size;
        this.x = x;
        this.y = y;
        this.speed = speed

    }
    draw() {
         ctx.drawImage(this.img,this.x,this.y,this,size,this,size,)
        
  }
 


    
}

