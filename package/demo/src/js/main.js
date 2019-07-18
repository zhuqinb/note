import "./../css/index.scss"

const box = document.createElement('div')
box.classList.add(...['light', 'red'])
document.body.appendChild(box)

class Light {
    constructor(color, defer) {
        this.color = color
        this.defer = defer
        this.timer = null
    }

    start() {
        this.updateState(this.color)
        this.countdown(this.defer)
        return new Promise((resolve, reject) => {
            setTimeout(resolve, this.defer)
        })
    }

    updateState(color) {
        const colors = ['red', 'green', 'yellow']
        const light = document.querySelector('.light')
        light.classList.remove(...colors)
        light.classList.add(color)
    }

    countdown(defer) {
        clearTimeout(this.timer)
        const light = document.querySelector('.light')
        let count = 0 | (defer / 1000)
        light.innerHTML = count--
        this.timer = setTimeout(() => {
            count > 0 && this.countdown(count * 1000)
        }, 1e3)
    }
}

let red = new Light('red', 3e4)
let yellow = new Light('yellow', 5e3)
let green = new Light('green', 2e4)

function main() {
    green.start().then(_ => yellow.start())
        .then(_ => red.start())
        .then(_ => { main() })
}

main()