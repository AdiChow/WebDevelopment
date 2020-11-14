let paintbox = document.getElementById("paintbox");
let ctx = paintbox.getContext("2d");
let gameOn = true
class Box {
    constructor(size, color) {
        this.size = size;
        this.color = color;
        this.x = 0;
        this.y = 0;
    }


}
class Player extends Box {
    constructor() {
        super(50, 'blue')
        this.y = 225;
        this.speed = 0
    }
    move() {
        this.x += this.speed
    }
}
class Enemy extends Box {
    constructor(speed) {
        super(50, 'red')
        this.speed = speed
    }
    move() {
        this.y += this.speed
        if (this.y + this.size > 500) {
            this.speed = -(Math.abs(this.speed))
        }
        if (this.y < 0) {
            this.speed = Math.abs(this.speed)
        }
    }
}
let player = new Player()
let e1 = new Enemy(4)
let e2 = new Enemy(8)
let e3 = new Enemy(12)
e1.x = 100
e2.x = 220
e3.x = 340

function isCollided(box1, box2) {
    if (Math.abs(box1.x-box2.x)<45 && Math.abs(box1.y-box2.y)<45)
    return true
    else
    return false
}
function isWon(box)
{
    if(box.x>=450)
      return true
      else 
      false
}
function drawBox(box) {
    ctx.fillStyle = box.color
    ctx.fillRect(box.x, box.y, box.size, box.size)

}
paintbox.addEventListener('mousedown', () => {
    player.speed = 10
    console.log('mousedown')
})
paintbox.addEventListener('mouseup', () => {
    player.speed = 0
})

function gameloop() {
    if(!gameOn)
    return
    console.log("+++")
    ctx.clearRect(0, 0, 500, 500)
    e1.move()
    e2.move()
    e3.move()
    player.move()
    if (isCollided(e1, player) || isCollided(e2, player) || isCollided(e3, player))
    {
        gameOn=false
        console.log('over')
        window.alert("GameOver")
       
        window.location.reload()
    }
    if(isWon(player))
    {
       gameOn=false
       window.alert("You have Won")
       window.location.reload()
    }
        drawBox(player)
    drawBox(e1)
    drawBox(e2)
    drawBox(e3)
    window.requestAnimationFrame(gameloop)
}
/*function updateGame() {
    window.requestAnimationFrame(() => {
        
        updateGame();
    })

}*/
gameloop()
