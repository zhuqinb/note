export default class MapBase {
    constructor() {
        this.map = '123'
        console.log('this is my mapBase..')
    }

    getMap() {
        return this.map
    }

    setMap() {
        this.map = arguments[0]
        return this
    }
}