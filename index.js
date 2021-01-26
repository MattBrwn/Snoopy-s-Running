let canvas = document.querySelector('canvas')
canvas.style.backgroundColor = "white"
let ctx = canvas.getContext('2d')
// ctx.fillRect(10, 10, 780, 430);
canvas.style.border = "7px solid #77a352";
//Fetch body
let body = document.querySelector('body')

let charliebrownX = 20 + 550 * Math.random();
let charliebrownY = 2;

let ballX = charliebrownX + 40;
let ballY = charliebrownY + 48;
let ballWidth = 20;
let ballincrementX = (Math.round(Math.random(1)) * 2 - 1) * (1.5 + (Math.random(2)));
let ballincrementY = 2 + Math.random(2.5);

let snoopyX = 400 * Math.random();
let snoopyY = 735;
let snoopyWidth = 40;
let incrementxSnoopy = 5;

let isLeftArrow = false;
let isRightArrow = false;
let score = 0;
let intervalID= 0;

let charliebrownImg = new Image();
charliebrownImg.src = './images/CBrown.png'

let ballImg = new Image();
ballImg.src = './images/ball_.PNG'

let snoopyImg = new Image();
    snoopyImg.src = './images/Kopie von Snoopy running left.png'


let kickingSound = document.getElementById('sound')

let startBtn = document.querySelector('#startgame')
let restartBtn = document.querySelector('#restartgame')

document.addEventListener('keydown', (event) => {
    
    if (event.keyCode == 39 ||event.key == "ArrowRight") {
        //snoopyImg.src = './images/snoopy running right.png'
        isRightArrow = true;
        isLeftArrow = false;
     }
     else if (event.keyCode == 37 || event.key == "ArrowLeft") {
        //snoopyImg.src = './images/Kopie von Snoopy running left.png'
        isRightArrow = false;
        isLeftArrow = true;
     }
})

document.addEventListener('keyup', (event) => {
    isRightArrow = false;
    isLeftArrow = false;
})

function ballCollision(){
    
    // check for right
    if (ballX+20 > canvas.width) {
        // change balldirection
        ballincrementX = (-1.2)*ballincrementX;
    }  
    
    //check for left
    if (ballX < 0) {
        ballincrementX = (-1.5)*ballincrementX;
    }
    
    //check for bottom
    if (ballY > canvas.height-65) {
        // something here 
        if (ballX + ballWidth > snoopyX && ballX > snoopyX + snoopyWidth || ballX < snoopyX + snoopyWidth && ballX +ballwidth < snoopyX) {
            score++
        }
        else {
            clearInterval(intervalID)
            gameOver()
        }
    }

    
}

function drawSnoopy(){
    ctx.drawImage(snoopyImg, snoopyX, snoopyY, 60, 60)
}

function drawCharliebrown(){
    ctx.drawImage(charliebrownImg, charliebrownX, charliebrownY, 70, 70);
}

function drawBall(){
    ctx.drawImage(ballImg, ballX, ballY, 20, 20)
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height) 
    drawCharliebrown()
    drawBall()
    drawSnoopy()
    ballCollision()
    ctx.font = '24px Verdana'
    ctx.fillText('Score:' + score, 20, 20)
    
    // movement Snoopy
    if (isRightArrow && (snoopyX < canvas.width)) {
        snoopyX += incrementxSnoopy
    }
    else if (isLeftArrow && snoopyX > 0) {
        snoopyX -= incrementxSnoopy
    }
    // ball movement
    ballX += ballincrementX
    ballY += ballincrementY
}


function startGame(){
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 10)
}





function gameOver(){
    canvas.style.display = 'none'
    gameOverScreen = document.createElement('div')
    gameOverScreen.classList.add('gameOverScr')
    gameOverScreen.innerHTML = `<h1>GAME OVER</h1>
    <button id="startgame">RESTART GAME</button>   `
    body.appendChild(gameOverScreen)
    body.removeChild(button)
    body.removeChild(h1)
    // body.removeChild(button)
    startBtn.style.display = 'block'
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 10)
}

// add your score text
ctx.font = '20px Verdana'
ctx.fillText('Score: ' + score, 20, 20)
 

window.addEventListener('load', () => {
    canvas.style.display = 'none'
startBtn.addEventListener('click', () => {
        startGame()
    })

})

// window.addEventListener('load', () => {
//     canvas.style.display = 'none'

// startBtn.addEventListener('click', () => {
//         startGame()
//     })

// })