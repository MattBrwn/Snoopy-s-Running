## Project's name
Snoopy's Running

## Description
Snoopy's running is a game, where the player (Snoopy) has to catch the ball.
Charlie Brown is kicking the ball into the fied.
Snoopy is moved horizontally by cursor.


## MVP
- ball is kicked under random angel at random position with random speed from the top.
- When the ball touches the sides, he will be reflected by double speed.
- Score is within the screen.
- Number of balls per game to be defined in player screen

## Backlog
- introducing different/increasing levels within the : (higher speed, varying angle, (smaller ball?)
- Snoopy alternatively as skateboarder or rollerblades (changig direction acc. to -> or <_ movement)  

 ## Data structure

# main

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game

- Game () {}
- startLoop () {}
- checkCollisions () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# snoopy 

- Snoopy () {
   img
   x, y, incrX
}
- draw () {}
- move () {}


# Charliebrown 

- CharlieBrown
    img
   rdm(x), rdm(y)
}

- draw () {}
- rdm pos

# Soccerball

- ball () {
     img
   x, y, rdm(incrX) , rdm(incrY)
}
- draw () {}
- move () {}
- 
# Collision conditions
sidewalls (double speed and change direction)
collision ball - snoopy -> increse score


## States y States Transitions
- splashScreen
- gameScreen
- gameOverScreen

## Task
- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- CharlieBrown - draw
- CharlieBrown - move
- Snoopy - draw
- Snoopy - move
- game - checkCollision
- game - GameOver
- game - addEventListener

## Links

- [Trello Link]https://docs.google.com/document/d/12G5tHbEu6s--BN-zE7DA7JGM7Z60e39XyNXbCdl5waE/edit?usp=sharing
- [Slides Link](http://slides.com)
- [Github repository Link](https://github.com/MattBrwn/Snoopy-s-Running)
- [Deployment Link](http://github.com)''# Snoopy-s-Running
