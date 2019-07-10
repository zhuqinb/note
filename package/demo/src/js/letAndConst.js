// 传统方式 for 异步计数
{
	/**
	 * 存在问题:
	 * 1. 无法正确的输出变量序号
	 * 2. 容易导致变量泄漏
	 */
	for (var i = 0, len = 10; i < len; i++) {
		setTimeout(function() {
			console.log(i)
		})
	}
	console.log(i)
}

// 解决第一个问题，使用函数作用域
{
	for (var i = 0, len = 10; i < len; i++) {
		;(function(j) {
			setTimeout(function() {
				console.log('--------' + i)
				console.log(j)
			})
		})(i)
	}
	console.log(i)
}

// 同时解决两个问题， 使用两个函数作用域
{
	;(function() {
		for (var i = 0, len = 10; i < len; i++) {
			;(function(i) {
				setTimeout(function() {
					console.log(i)
				})
			})(i)
		}
	})()
	console.log(i) //ReferenceError: i is not defined
}
