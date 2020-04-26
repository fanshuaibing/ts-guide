/**
 * 函数的类型
 */

//函数声明

// 函数声明（Function Declaration）
function sum(x: number, y: number): number {
  return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x: number, y: number): number {
  return x + y;
};

// 用接口定义函数的形状
interface Add {
  (a: number, b: number, c?: number): number;
}

let add: Add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));
//可选参数 可选参数后面不允许再出现必需参数

let addChoose: Add = (a, b) => {
  return a + b;
};

// 参数默认值

let addOne: Add = (c = 1, d) => {
  return c + d + 1;
};
// 使用参数默认值， 参数可填为 undefined
addOne(undefined, 1);

//剩余参数
//ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：

let addChoose1: Add = (a, ...items) => {
  return a + items[0] + items[1];
};

console.log(addChoose1(1, 2, 3));
