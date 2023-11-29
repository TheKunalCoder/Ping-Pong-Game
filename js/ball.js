class Ball {
    constructor() {
        this.positionX = width / 2
        this.positionY = height / 2
    }
    getBall() {
        database.ref("ball").on("value", data => {
            var position = data.val()
            this.positionX = position.positionX
            this.positionY = position.positionY
        })

    }
    update() {
        database.ref("ball").update({
            positionX: this.positionX,
            positionY: this.positionY
        })
    }

}
