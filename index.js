const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9



class Player{
    constructor(){
      this.position = {
        x: 100,
        y: 100

      }

      this.width = 100
      this.height = 100
      this.sides = {
        bottom: this.position.y + this.height
      }

    

    }

    draw() {
    c.fillStyle = 'blue'
 c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        if(this.sides.bottom < canvas.height){
        this.position.y++
        this.sides.bottom = this.position.y + 100
    }
}
}

const player = new Player()

// let bottom = y +100

function animation(){
 window.requestAnimationFrame(animation)

c.fillStyle = "white"
c.fillRect(0, 0, canvas.width, canvas.height)

player.draw()
player.update()

}



animation()