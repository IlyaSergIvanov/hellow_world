 
    
    function keyDownHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = true;
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
        }
    }
    function soundExpl(sound) {
      var audio = new Audio(); 
      audio.src = sound; 
      audio.autoplay = true; 
    }
    function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        }
    }
    function mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            paddleX = relativeX - paddleWidth/2;
        }
    }
   
    
    
    

    function drawScore() {
        ctx.font = "26px Arial";
        ctx.fillStyle = "#black";
        ctx.fillText("Счет: "+score, 14, 20);
    }
    function drawLives() {
        ctx.font = "26px Arial";
        ctx.fillStyle = "#black";
        ctx.fillText("Жизни: "+lives, canvas.width-110, 20);
    }
    
 