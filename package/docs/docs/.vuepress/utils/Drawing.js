class Drawing {
    constructor(canvas, ctx) {
        this.canvas = canvas
        this.ctx = ctx
        this.renderFn = null
        this.requestFrame = window.requestAnimationFrame || 
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        
    }

    loop(fn) {
        this.renderFn = !this.renderFn ? fn : this.renderFn
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.renderFn()
        this.requestFrame.call(window, this.loop.bind(this))
    }

}

export default Drawing