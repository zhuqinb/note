const path = require('path')

console.log(
    path.join('/foo', 'bar', 'baz/asdf', '', '12412')
)

console.log(path.resolve(''))
console.log(

    path.resolve('/foo', '/bar', 'baz')
)

const EventEmitter = require('events')

class MyEvent extends EventEmitter {}

const myEvent = new MyEvent()

myEvent.on('event', _ => {
    console.log(Math.random())
})
myEvent.on('event', _ => {
    console.log(Math.random())
})

myEvent.emit('event')