export default class AniBase {

    constructor(canvas) {
        this.canvas = canvas
        this.content = null
        this.renderFn = null
        this.requestFrame =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(cb) {
                setTimeout(cb, 1000 / 60)
            }

        // 初始化canvas
        this.init()
    }

    init() {
        this.content = this.canvas.getContext('2d')
        this.adjustCanvas()
        window.addEventListener('resize', e => {
            this.adjustCanvas()
        })
    }

    loop(fn) {
        this.renderFn = !this.renderFn ? fn : this.renderFn
        this.clearFrame()
        this.renderFn()
        this.requestFrame.call(window, this.loop.bind(this))
    }

    adjustCanvas() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    }

    clearFrame() {
        this.content.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    destroy() {
        console.log('destroy')
    }
}