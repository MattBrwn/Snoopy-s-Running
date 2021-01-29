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

# index.html / main

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# index.js

- Game () {}
- startLoop () {}
- checkCollisions () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

- Snoopy () {
   img
   x, y, incrX
}
fct drawSnoopy
- draw () {}
- move () {}

# CharlieBrown
- CharlieBrown
    img
   start position rdm(x), rdm(y)
}
fct drawSnoopy
- draw () {}
- rdm pos

# balls (as seperate js-File)

- class balls () {
     img
   x, y, rdm(xvelo, yvelo) , rdm(incvelo)
}
fct generation of balls
- implement conditions
 
# Collision conditions
fct collison sidewalls (increased speed)
collision ball


## States Transitions
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
- [Slides Link](https://docs.google.com/presentation/d/1NBzJCHJGB4cTD7d-yAMv8Ach2O4YxGPbIY1lvpq8GA8/edit?usp=sharing)
- [Github repository Link](https://github.com/MattBrwn/Snoopy-s-Running)
- [Deployment Link](http://github.com)''# Snoopy-s-Running
