## Project's name
Snoopy's Running

## Description
Snoopy's running is a game, where the player (Snoopy) has to catch the ball.
Charlie Brown is kicking the ball into the fied.
Snoopy is moved horizontally by cursor.


## MVP
- ball is kicked under fixed angel at random position with random speed from the top.
- When the ball touches the sides, he will be reflected by double speed.
- Score is within the screen.
- Number of balls per game to be defined in player screen

## Backlog
- introducing different/increasing levels within the : (higher speed, varying angle, (smaller ball?)
- Snoopy alternatively as skateboarder or rollerblades (changig direction acc. to -> or <_ movement)  

 ## Data structure

# main.js

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game.js

- Game () {}
- startLoop () {}
- checkCollisions () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# snoopy.js 

- Snoopy () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkBootomCollision () {}

# CharlieAndSnoopy.js 

- CharlieBrown () {
    this.x;
    this.angle;
    this.startingspeed
}

- draw () {}
- move () {}

# Soccerball.js 

- Soccerball () {
    this.x;
    this.y;
    this.angle;
    this.size
}
- draw () {}
- move () {}
- checkCollisionSides () {}


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

- [Trello Link](https://trello.com)
- [Slides Link](http://slides.com)
- [Github repository Link](http://github.com)
- [Deployment Link](http://github.com)''# Snoopy-s-Running
Game Project Snoopy's Running
