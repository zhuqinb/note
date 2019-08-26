export default class {
    constructor(canvas, content) {
        this.canvas = canvas
        this.content = content
        this.events()
    }

    events() {
        this.canvas.addEventListener('click', e => {
            console.log(e)
        })
    }
    run() {
        this.content.fillStyle = '#000'
        this.content.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }
}