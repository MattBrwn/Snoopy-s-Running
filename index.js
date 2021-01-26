let canvas = document.querySelector('canvas')
//canvas.style.backgroundColor = "white"
let ctx = canvas.getContext('2d')
//ctx.fillRect(10, 10, 780, 430);
canvas.style.border = "5px solid #77a352";
let charliebrownX = 250;
let charliebrownY = 2;
let snoopyX = 450;
let snoopyY = 435;
let incrementxSnoopy = 5;
let ballX = 290;
let ballY = 50;
let incrementY = 5;
let incrementX = 5;
let isLeftArrow = false;
let isRightArrow = false;
let score = 0;
let intervalID= 0;

let charliebrownImg = new Image();
charliebrownImg.src = './images/CharlieBrown.jpeg'

let ballImg = new Image();
ballImg.src = './images/ball.PNG'

let snoopyImg = new Image();
snoopyImg.src = './images/Kopie von Snoopy running left.png'

let startBtn = document.querySelector('#startgame')

document.addEventListener('keydown', (event) => {
     if (event.keyCode == 39 ||event.key == "ArrowRight") {
        isRightArrow = true;
        isLeftArrow = false;
     }
     else if (event.keyCode == 40 || event.key == "ArrowLeft") {
        isRightArrow = false;
        isLeftArrow = true;
     }
})

document.addEventListener('keyup', (event) => {
    isRightArrow = false;
    isLeftArrow = false;
})

// function gameOver(){
//     canvas.style.display = 'none'
//     startBtn.style.display = 'block'
// }

// function ballCollision(){
    
//     // check for right
//     if (circleX + circleRadius > canvas.width) {
//         // change this to a -ve num
//         incrementX = -incrementX
//     }  
    
//     //check for bottom
//     if (circleY + circleRadius > canvas.height) {
//         // something here 
//         if (circleX > paddleX && circleX < paddleX + paddleWidth) {
//             incrementY = -incrementY
//             score++
//         }
//         else {
//             clearInterval(intervalID)
//             gameOver()
//         }
        
//     }
//     // check for top
//     if (circleX - circleRadius < 0) {
//         // keep this to a +ve num
//         incrementX = 5
//     }

//     //check for left
//     if (circleY - circleRadius < 0) {
//         incrementY = 5
//     }
// }

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
    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCharliebrown()
    drawBall()
    drawSnoopy()
    // ballCollision()
    ctx.font = '24px Verdana'
    ctx.fillText('Score:' + score, 20, 20)

    if (isRightArrow && (snoopyX < canvas.width)) {
        snoopyX += incrementxSnoopy
    }
    else if (isLeftArrow && snoopyY > 0) {
        snoopyY -= incrementxSnoopy
    }
}

function startGame(){
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 10)
}


// // add your score text
// ctx.font = '20px Verdana'
// ctx.fillText('Score: ' + score, 10, canvas.height - 50)
 

window.addEventListener('load', () => {
    canvas.style.display = 'none'

startBtn.addEventListener('click', () => {
        startGame()
    })

})