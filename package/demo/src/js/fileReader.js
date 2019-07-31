function read(el, imgEl) {
	el.addEventListener('change', e => {
		if(!FileReader){
			throw new Error('浏览器不支持读本地文件')
		}
		let reader = new FileReader()
		const file = e.target.files[0]
		// reader.readAsDataURL(file)
		imgEl.src = URL.createObjectURL(file)
		// reader.onload = event => {
		// 	imgEl.src = event.target.result
		// }
	})
}

export { read }