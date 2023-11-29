var gameState, playerCount
var game, form, player
var player1, player2, ball
var database
var players = []
var allplayers;
function setup() {
  createCanvas(600, 600)
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  background("white")
  if (playerCount === 2) {
    game.update(1)
  }
  if (gameState === 1) {
    game.play()
  }
}


