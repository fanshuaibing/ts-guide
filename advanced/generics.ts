/**
 *  泛型
 */

// 简答例子
function Add<T>(a: T, b: T): T[] {
  let arr = [];
  arr.push(a);
  arr.push(b);
  return arr;
}

// 多个参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, "seven"]); // ['seven', 7]

//泛型约束

// {
//   function add<T>(a: T, b: T): T[] {
//     return a + b;
//   }
// }

// 上面的代码会报错 因为我们并不知道 具体传入的值能否用 + 来操作
// 所以要用到泛型约束

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 泛型接口

interface Push {
  <T>(length: number, value: T): T[];
}

let push: Push;
push = function <T>(length, value): T[] {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(value);
  }
  return arr;
};

push(4, "x");

// 泛型类

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 泛型参数的默认类型

function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
