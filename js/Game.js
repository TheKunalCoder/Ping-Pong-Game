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
    ball = createSprite(width / 2, height / 2)

  }

  play() {
    form.message.hide()
    form.img.hide()
    ball.setVelocity(3, 3)
    ball.update()
    drawSprites()
    player.getPlayerDetails()
  }

  handlePlayerControls() {
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 4
      player.update()
    }
    if (keyIsDown(DOWN_ARROW)) {
      player.positionY -= 4
      player.update()
    }
  }
}