export default class {
    constructor(canvas, content) {
        this.canvas = canvas
        this.content = content
    }
    run() {
        this.content.fillStyle = '#000'
        this.content.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.canvas.addEventListener('click', function(e) {
            console.log(e)
        })
    }
}