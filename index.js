const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 119 * 16
canvas.height = 64 * 9



const player = new Player()


// let bottom = y +100

const keys = {
  w: {
     pressed: false,
  },
  a: {
pressed: false, 
  },
  d: {
pressed: false,
  },
}

function animation(){
 window.requestAnimationFrame(animation)

 c.textRendering

c.fillStyle = "white"
c.fillRect(0, 0, canvas.width, canvas.height)



player.velocity.x = 0
if(keys.d.pressed) {
  player.velocity.x = 5
}  else if (keys.a.pressed){
  player.velocity.x = -5
}            

player.draw()
player.update()

}



animation()


