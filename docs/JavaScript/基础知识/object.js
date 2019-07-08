/**
 * hasOwnProperty：
 * 所有继承了object的对象都会继承到hasOwnProperty方法， 这个方法可以用来检测一个对象是否含有
 * 特定的自身属性；和in运算符不同，该方法会忽略掉那些从原型链上继承到的属性。
 */

// 可以通过这个方法，来获取一个对象所有 `可枚举的属性`
var buz = {
    fog: 'stack'
}

for (const key in buz) {
    if (buz.hasOwnProperty(key)) {
        const value = buz[key];
    }
}

// JavaScript 并没有保护hasOwnProperty 属性名，因此某个对象可能会覆盖这个属性

var obj = {
    hasOwnProperty: function() {
        return false
    },

    bar: 'bar'
}

obj.hasOwnProperty('bar') // false

// 此时可以通过这种方法来调用真正的 `hasOwnProperty`
Object.prototype.hasOwnProperty.call(obj, 'bar') //true
// 或者
({}).hasOwnProperty.call(obj, 'bar')

// ----

/**
 *  for in
 *  for ... in语句以任意顺序遍历一个对象自有的、继承的、可枚举的、非Symbol的属性
 */