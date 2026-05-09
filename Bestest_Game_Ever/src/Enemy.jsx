  export default new class Enemy {
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
  move(playerx ,playery) {
    const sx = this.x - playerx
    const sy = this.y - playery 
    const direction = Math.atan2(sx, sy)
    const xd = Math.cos(direction)
    const yd = Math.sin(direction)
    

    this.x = this.x* this.speed*xd
    this.y = this.y* this.speed*yd

    
  }
  

    
}

