// Declaration of Canvas
let canvas = document.querySelector('canvas')
canvas.style.backgroundColor = "white"
let ctx = canvas.getContext('2d')
// ctx.fillRect(10, 10, 780, 430);
canvas.style.border = "7px solid #77a352";

//Fetch body
let body = document.querySelector('body')

// Declaration of Variables
let charliebrownX = 20 + 550 * Math.random();
let charliebrownY = 2;
let charliebrownImg = new Image();
    charliebrownImg.src = './images/CBrown.png'
let balls = [];
let count = 0;

function createBall(){
    charliebrownX = 20 + 550 * Math.random();
    let ballincrementX = (Math.round(Math.random(1)) * 2 - 1) * (1 + (Math.random(0.8)));
    let ballincrementY = 2 + Math.random(1);
    console.log("create ball")
    balls.push(new Ball (charliebrownX + 40, charliebrownY + 48, ballincrementX, ballincrementY) )
}
createBall()
// let numbersofLostballs = 0;
// let numberofWonballs = 0;

let snoopyX = 100 + (canvas.width-150) * Math.random();
let snoopyY = (canvas.height-65);
let snoopyWidth = 60;
let incrementxSnoopy = 5;
let snoopyImg = new Image();
    snoopyImg.src = './images/SnoopyRunningLeft.png'
// let kickingSound = document.getElementById('sound')

let isLeftArrow = false;
let isRightArrow = false;
let score = 0;
let intervalID= 0;


// Def screens for transition
let startscreen = document.getElementById('startscreen')
let gameOverscreen = document.getElementById('gameoverscreen')
let gameWinscreen = document.getElementById('gamewinscreen')

// attributing buttons to DOM
let startBtn = document.querySelector('#startgame')
let restartBtnLose = document.querySelector('#restartgamelose')
let restartBtnWin = document.querySelector('#restartgamewin')

// Buttonevents
restartBtnLose.addEventListener('click', ()=>{
    restartgame()
})

restartBtnWin.addEventListener('click', ()=>{
    restartgame()
})




// attributing keys for Snoopy movement
document.addEventListener('keydown', (event) => {
    
    if (event.keyCode == 39 ||event.key == "ArrowRight") {
        snoopyImg.src = './images/SnoopyRunning Right.png'
        isRightArrow = true;
        isLeftArrow = false;
     }
     else if (event.keyCode == 37 || event.key == "ArrowLeft") {
        snoopyImg.src = './images/SnoopyRunningLeft.png'
        isRightArrow = false;
        isLeftArrow = true;
     }
})

document.addEventListener('keyup', (event) => {
    isRightArrow = false;
    isLeftArrow = false;
})

function drawSnoopy(){
    ctx.drawImage(snoopyImg, snoopyX, snoopyY, 60, 60)
}

function drawCharliebrown(){
    ctx.drawImage(charliebrownImg, charliebrownX, charliebrownY, 70, 70);
}

function drawBall(ball){  
    let ballImg = document.createElement('img');
    ballImg.src = './images/Ball2.png'
    ctx.drawImage(ballImg, ball.x, ball.y)
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height) 
    // ctx.font = '24px Verdana'
    // ctx.fillText('Score:' + score, 20, 20)
    
    drawCharliebrown()
    drawSnoopy()
    balls.forEach(ball=> { 
        if (!ball.isCatched) {
            drawBall(ball);
        
        ball.x += ball.velox;
        ball.y += ball.veloy;
        }
        ballCollision(ball);
    if (ball.y > canvas.height-200 && !ball.isNext) {
        ball.isNext = true;
        if (balls.length < 6) {
            createBall()
        }
    } 
    })
   
   
    
    
    // movement Snoopy
    if (isRightArrow && (snoopyX < canvas.width-60)) {
        snoopyX += incrementxSnoopy
    }
    else if (isLeftArrow && snoopyX > 0) {
        snoopyX -= incrementxSnoopy
    }
    // ball movement
    
}


function startGame(){

    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    startscreen.style.display = "none"
    gameOverscreen.style.display = "none"
    gameWinscreen.style.display = "none"
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 10)
}

function ballCollision(ball){
    
    // check for right side
    if (ball.x+15 > canvas.width) {
        // change balldirection
        ball.velox= (-1.2)*ball.velox;
    }  
    
    //check for left side
    if (ball.x < 0) {
        ball.velox = (-1.5)*ball.velox;
    }
    
    // check for bottom
    if (ball.y >= canvas.height-40 && !ball.isCatched) {
        // something here 
        if (ball.x + 20 > snoopyX && ball.x > snoopyX + snoopyWidth || 
            ball.x < snoopyX + snoopyWidth && ball.x + 20 < snoopyX) {
            clearInterval(intervalID)
            gameOver()
        }
        else {
         if (!ball.isCatched) {
             count ++;
             ball.isCatched = true;
         }   
            if (count == 6) {
                clearInterval(intervalID)
                gameWin()
            }
            
            }
        }
    }


function gameOver(){
    canvas.style.display = 'none'
    startscreen.style.display = "none"
    /*
    gameOverScreen = document.createElement('div')
    gameOverScreen.classList.add('gameOverScreen')
    gameOverScreen.innerHTML = `<h1>GAME OVER</h1>
    <button id="startgame">RESTART GAME</button> `
    body.appendChild(gameOverScreen)
    body.removeChild(header)
    body.removeChild(button)
    */
    gameOverscreen.style.display = "block"
    gameWinscreen.style.display = "none"
}

function restartgame(){
   
    canvas.style.display = "block"
     gameOverscreen.style.display = "none"
     charliebrownX = 20 + (canvas.width-50) * Math.random();
     charliebrownY = 2;

     balls= [];
     createBall()

     snoopyX = (canvas.width-50) * Math.random();
     snoopyY = 735;
     snoopyWidth = 60;
     incrementxSnoopy = 5;

     isLeftArrow = false;
     isRightArrow = false;
    //  score = 0;
     intervalID= 0;  
    startGame()
}



function gameWin(){
    canvas.style.display = 'none'
    startscreen.style.display = "none"
    gameOverscreen.style.display = "none"
    gameWinscreen.style.display = "block"
}


// add your score text
// ctx.font = '20px Verdana'
// ctx.fillText('Score: ' + score, 20, 20)

window.addEventListener('load', () => {
    canvas.style.display = 'none'
    startscreen.style.display = "block"
    gameOverscreen.style.display = "none"
    gameWinscreen.style.display = "none"

    startBtn.addEventListener('click', () => {
        startGame()
    })
})

window.addEventListener('reload', () => {
    canvas.style.display = 'block'
    startscreen.style.display = "none"
    gameOverscreen.style.display = "none"
    gameWinscreen.style.display = "none"

    restartBtn.addEventListener('click', () => {
        // restart()
        startGame()
    })
})