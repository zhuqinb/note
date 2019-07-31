const EventEmitter = require('events')

class MyEvent extends EventEmitter {}

const myEvent = new MyEvent()

myEvent.on('newListener', (event, listener) => {
	console.log(event)
	console.log(listener)
})
myEvent.on('start', function() {})
myEvent.emit('start')

var obj = {
	a: 2,
	get b() {
		return 345
	},
	set b(value) {
		this.value = '124'
	}
}
obj.b = 12312412
console.log(obj.b.name)
var obj2 = {
	a: 1,
	b: 2
}

for (let i = 0, keys = Object.keys(obj); i < keys.length; i++) {
	keys[i] in obj2 && (obj[keys[i]] = obj2[keys[i]])
}
console.log(obj)

export var foo = 'bar'
setTimeout(() => (foo = 'baz'), 500)
console.log(foo)
