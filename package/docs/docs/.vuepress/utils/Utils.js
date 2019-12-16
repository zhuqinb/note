class Utils {
    loop(callback) {
        let cb = callback
        callback && callback()
        console.log(this.getRequestAnimationFrame())
        requestAnimationFrame(this.loop.bind(cb))
    }
    
    getRequestAnimationFrame() {
        return requestAnimationFrame
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
              return window.setTimeout(callback, 17 /*~ 1000/60*/);
            });
    }
}

export default new Utils()