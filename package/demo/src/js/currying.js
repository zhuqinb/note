function add() {
    let _args = [...arguments]
    let _add = (...args) => {
        _args.push(...args)
        return _add
    }

    _add.toString = function() {
        return _args.reduce((total, v) => total + v)
    }

    return _add

}

export { add }