/**
 * 函数的类型
 */
//函数声明
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}
// 函数表达式（Function Expression）
var mySum = function (x, y) {
    return x + y;
};
var add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
//可选参数 可选参数后面不允许再出现必需参数
var addChoose = function (a, b) {
    return a + b;
};
// 参数默认值
var addOne = function (c, d) {
    if (c === void 0) { c = 1; }
    return c + d + 1;
};
// 使用参数默认值， 参数可填为 undefined
addOne(undefined, 1);
//剩余参数
//ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
var addChoose1 = function (a) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    return a + items[0] + items[1];
};
console.log(addChoose1(1, 2, 3));
