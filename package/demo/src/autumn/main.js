import render from './render'
import AniBase from './AniBase'
import Background from './Background'
import Music from './Music'

export default class Autumn extends AniBase {

    constructor(canvas) {
        // 开始初始化canvas
        super(canvas)

        this.resource = new Map()
        // 加载资源
        this.loading()

        // 运行
        this.run()
    }

    loading() {
        let background = new Background(this.canvas, this.content)
        let music = new Music()
        this.resource.set('background', background)
        this.resource.set('music', music)
    }

    run() {
        this.loop(render.bind(window, this.resource))
    }

}