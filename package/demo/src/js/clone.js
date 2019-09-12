// 基本
function close(target) {
	let cloneTarget = {}

	for (const key in target) {
		cloneTarget[key] = target[key]
	}

	return cloneTarget
}

// 普通对象拷贝
function clone2(target) {
	if (typeof target === 'object') {
		let cloneTarget = {}
		for (const key in target) {
			cloneTarget[key] = close2(target[key])
		}
		return cloneTarget
	}
	return target
}

// 普通对象加数组
function clone3(target) {
	if (typeof target === 'object') {
		let cloneTarget = Array.isArray(target) ? [] : {}
		for (const key in target) {
			cloneTarget[key] = clone3(target[key])
		}
		return cloneTarget
	} else {
		return target
	}
}

// 解决循环引用
function clone4(target, map = new WeakMap()) {
	if (typeof target === 'object') {
		let cloneTarget = Array.isArray(target) ? [] : {}
		if (map.get(target)) {
			return map.get(target)
		}
		map.set(target, cloneTarget)
		for (const key in cloneTarget) {
			cloneTarget[key] = clone4(target[key], map)
		}
		return cloneTarget
	}
	return target
}

function isObject(target) {
	const type = typeof target
	return type !== 'null' && (type === 'function' || type === 'object')
}

// 可以复制普通对象、array、set、map
function clone5(target, map = new WeakMap()) {
	if (!isObject(target)) {
		return target
	}

	const type = getType(target)

	let cloneTarget = new target.constructor()

	if (map.get(target)) {
		return target
	}

	map.set(target, cloneTarget)

	if (type === 'map') {
		target.forEach((value, key) => {
			cloneTarget.set(key, clone5(value, map))
		})
		return cloneTarget
	}

	if (type === 'set') {
		target.forEach(value => {
			cloneTarget.add(clone5(value, map))
		})
		return cloneTarget
	}

	const keys = type === 'array' ? undefined : Object.keys(target)
	const values = keys || target
	const index = values.length
	while (--index > 0) {
		const value = values[index]
		const key = index
		if (keys) key = value
		cloneTarget[key] = clone5(value, map)
	}
	return cloneTarget
}
