import Drawing from './../../../utils/Drawing'
import Ball from './Ball'
class Bg{

    constructor(canvas) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.drawing = new Drawing(this.canvas, this.ctx)
    }

    init() {
        this.initWH()
        let ball = new Ball(5)
        ball.x = 0
        ball.y = 300
        

        let vx = 1, yx = 1, ax = 0.07, ay = 0.003

        this.drawing.loop(_ => {
            
            vx += ax
            yx += ay
            ball.x += vx
            ball.y -= yx

            if(ball.x > this.canvas.width || ball.y < 0) {
                ball.x = 0
                ball.y = 300
                vx = 1
                yx = 1
            }
            this.drawBG()
            this.drawLine()
            ball.draw(this.ctx)
        })
    }

    initWH() {
        this.canvas.width = document.body.clientWidth || document.documentElement.clientWidth
        this.canvas.height = document.body.clientHeight || document.documentElement.clientHeight
    }

    drawLine() {
        let linegrad = this.ctx.createLinearGradient(0, 0, 300, 700)
        linegrad.addColorStop(1, 'rgba(255,255,255,0.4)');
        linegrad.addColorStop(0.7, 'rgba(255,255,255,0.2)');
        linegrad.addColorStop(0.3, 'rgba(255,255,255,0.1)');
        linegrad.addColorStop(0, 'rgba(255,255,255,0)');
        let position = {x: 700, y: this.canvas.height-100}
        for(let i = 0, len = 8; i< len; i++) {
          this.ctx.beginPath()
          this.ctx.moveTo(0, position.y)
          this.ctx.lineTo(position.x, 0)
          this.ctx.lineWidth = 2
          this.ctx.strokeStyle = linegrad
          this.ctx.stroke()
          this.ctx.closePath()
  
          position.x -= 15
          position.y -= 20 
        }
    }

    drawBG() {
      this.ctx.beginPath()
      let lingrad = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height)
      lingrad.addColorStop(0, '#96acdc')
      lingrad.addColorStop(1, '#99aed7')
      
      this.ctx.fillStyle = lingrad
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.closePath()
    }

}

export default Bg