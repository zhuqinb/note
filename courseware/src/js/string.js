{
	console.log(`<b>当前时间：${new Date().toLocaleString()}</b>`)
}

{
	console.log(`\`helloj\` world`)
}

{
	;`In JavaScript '\n' is a line-feed.`
}

{
	console.log`23`
}

{
	let sender = 'hello world'
	let message = SaferHTML`<p>${sender} has sent you a message.</p>`

	function SaferHTML(templateData) {
		let s = templateData[0]
		for (let i = 1; i < arguments.length; i++) {
			let arg = String(arguments[i])

			// Escape special characters in the substitution.
			s += arg
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')

			// Don't escape special characters in the template.
			s += templateData[i]
		}
		return s
	}
}

{
	let a = 5
	let b = 10

	tag`Hello ${a + b} world ${a * b}`
	// 等同于
	tag(['Hello ', ' world ', ''], 15, 50)
	function tag(stringArr, value1, value2) {
		// ...
	}
}

{
	console.log(String.raw`Hi//\\\n${2 + 3}!`)
}

{
	console.log(String.raw`Hi\\n`)
}
