class Form {
  constructor() {
    this.img = createImg("pingPongbg.jpg", "gameBackground")
    this.input = createInput("").attribute("placeHolder", "Enter the name")
    this.button = createButton("Play")
    this.message = createElement("h3")
    this.resetButton = createButton("reset")
  }

  setElementsByStyle() {
    this.input.class("customInput")
    this.button.class("customButton")
  }
  setElementsByPosition() {
    this.img.position(0, 0, width, height)
    this.input.position(width / 2, height / 2)
    this.button.position(width / 2, height / 2 + 100)
    this.message.position(width / 2 - 200, height / 2)
    this.resetButton.position(width / 2, height - 50)
  }
  handleMousePressed() {
    this.resetButton.mousePressed(() => {
      database.ref("/").update({
        gameState: 0,
        playerCount: 0,
        players: {}
      })
      location.reload()
    })
    this.button.mousePressed(() => {
      this.input.hide()
      this.button.hide()
      var message = `Hello ${this.input.value()} </br> Waiting for next player to join`
      this.message.html(message)
      playerCount += 1
      console.log(playerCount)
      player.updateCount(playerCount)
      player.name = this.input.value()
      player.index = playerCount
      player.addPlayer()

    })
  }
}