{
	let [foo, [[bar], baz]] = [1, [[2], 3]]
	foo // 1
	bar // 2
	baz // 3

	let [, , third] = ['foo', 'bar', 'baz']
	third // "baz"

	let [x, , y] = [1, 2, 3]
	x // 1
	y // 3

	let [head, ...tail] = [1, 2, 3, 4]
	head // 1
	tail // [2, 3, 4]

	let [x, y, ...z] = ['a']
	x // "a"
	y // undefined
	z // []

	//解构不成功
	let [foo] = []
	let [bar, foo] = [1]

	// 不完全解构
	let [x, y] = [1, 2, 3]
	x // 1
	y // 2

	let [a, [b], d] = [1, [2, 3], 4]
	a // 1
	b // 2
	d // 4
}

// 默认值
{
	// 默认值只有当解构的值严格等于undefined时生效
	let [a = 2, b = 3] = [null, undefined]
	console.log(a, b)
}
// 注意点 报错情况
{
	// 报错
	let [foo] = 1
	let [foo] = false
	let [foo] = NaN
	let [foo] = undefined
	let [foo] = null
	let [foo] = {}
}

// 对象形式
{
	let { log, sin, cos } = Math
}

{
	const [a, b, c, d, e] = 'hello'
	const { toString: to } = 'world'
	console.log(to(''))
}

{
	const { toString: to } = [1, 2, 3]
	to.call({}, {})
}

{
	console.log(String.prototype.toString({}))
}
{
	let { toString: s } = 123
	s === Number.prototype.toString // true
	let { toString: s } = true
	s === Boolean.prototype.toString // true
}

{
	function add([x, y]) {
		return x + y
	}

	add([1, 2]) // 3
}
