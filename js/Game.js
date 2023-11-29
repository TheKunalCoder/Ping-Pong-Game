class Game {
  constructor() {

  }

  getState() {
    database.ref("gameState").on("value", (data) => { gameState = data.val() })
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    })
  }


  start() {
    form = new Form()
    player = new Player()
    ball = new Ball()
    playerCount = player.getCount()
    form.setElementsByPosition()
    form.setElementsByStyle()
    form.handleMousePressed()
    player1 = createSprite(10, height / 2, 20, 80)
    player2 = createSprite(width - 10, height / 2, 20, 80)
    ball.update()
    players = [player1, player2]
    ball = createSprite(width / 2, height / 2)

  }

  play() {
    form.message.hide()
    form.img.hide()
    ball.setVelocity(3, 3)
    ball.update()

    Player.getPlayerDetails()

    if (allPlayers != undefined) {
      var index = 0
      for (var p in allPlayers) {
        var x = allPlayers[p].positionX
        var y = allPlayers[p].positionY
        console.log(x)
        console.log(y)
        index = index + 1
        players[index - 1].position.x = x
        players[index - 1].position.y = y
        if (index === player.index) {
          ellipse(x, y, 80, 80)
        }

        this.handlePlayerControls()
      }

      drawSprites()
    }

    console.log(allPlayers)
  }

  handlePlayerControls() {
    if (keyIsDown(UP_ARROW)) {
      console.log("UP key working")
      player.positionY -= 4
      player.update()
    }
    if (keyIsDown(DOWN_ARROW)) {
      player.positionY += 4
      player.update()
    }
  }
}