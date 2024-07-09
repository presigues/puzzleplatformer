window.addEventListener('keydown', (event) =>{
    console.log(event)
    
    switch(event.key){
      case 'w': // jump 
        console.log("w")
        if (player.velocity.y === 0) player.velocity.y = -17
    
        break
        case 'a': // left
        keys.a.pressed = true
    
        break
        case 'd': // right 
        
        keys.d.pressed = true
    
        break
    }
    })
    
    window.addEventListener('keyup', (event) =>{
      console.log(event)
      
      switch(event.key){
           case 'a': // left
           keys.a.pressed = false
      
          break
          case 'd': // right 
          
          keys.d.pressed = false
         
         
      
          break
      }
      })