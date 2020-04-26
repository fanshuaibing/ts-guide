/**
 * 原始数据类型 任意值 类型推断 联合类型
 */
// 布尔值 boolean
var isSignIn = true;
console.log(isSignIn);
// 数值 number
var count = 10;
console.log(count);
// 字符串 string
var myName = "fatfan";
console.log(myName);
// 空值 void
function add(a, b) {
    alert(a + b);
}
// null undefined
// undefined 和 null 是所有类型的子类型 void 不行
var u = undefined;
var n = null;
console.log(u, n);
/**
 * 任意值 any
 * 普通值类型是不允许被赋值其他类型的，但是 「 任意值 」 是被允许的
 */
var anyThing = "hello";
/**
 * 未声明类型的变量
 * 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
 */
var something;
something = "seven";
something = 7;
/**
 * 类型推断
 * 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型
 * 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any
 */
// let myFavoriteNumber = "seven";
// myFavoriteNumber = 7;  类型推断为 string,赋值为 number 时会报错
var myFavoriteNumber;
myFavoriteNumber = "7";
myFavoriteNumber = 7;
/**
 * 联合类型
 * 联合类型（Union Types）表示取值可以为多种类型中的一种
 * 只能赋值为多种类型其中的一种
 * 访问联合类型的属性或方法
    只能访问此联合类型的所有类型里共有的属性或方法
  联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
 只能访问这个类型的属性或方法
 */
var unionTypes;
unionTypes = 7;
unionTypes = "7";
var a = "BASIC";
var div = document.createElement("div");
div.innerText = a;
var body = document.querySelector("body");
body.appendChild(div);
