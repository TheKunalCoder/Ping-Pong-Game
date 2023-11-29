class Player {
    constructor() {
        this.name = null
        this.index = 0
        this.positionX = 0
        this.positionY = 0
        this.score = 0
    }
    getCount() {
        database.ref("playerCount").on("value", data => {
            playerCount = data.val()
        })
    }
    updateCount(count) {
        database.ref("/").update({ playerCount: count})
    }
    addPlayer() {
        if (this.index === 1) {
            this.positionX = 10
        }
        else {
            this.positionX = width - 10
        } 
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name: this.name,
            positionX: this.positionX,
            positionY: this.positionY,
            score: this.score
        })
    }
    update() {
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).update({
            positionY: this.positionY,
            score: this.score
        })
    }
    getPlayerDetails() {
        database.ref("players").on("value", data => {
            allplayers = data.val()
            console.log(allplayers)
        })
    }
}