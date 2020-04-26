/**
 * 数组的类型
 */

//定义方式
let strArr: string[] = ["1", "2", "3"];

let num: Array<number> = [1, 2, 2];

interface Arr {
  [index: number]: number;
}

let n: Arr = [1, 2, 3];

//any 在数组中的应用： 允许出现任意值

let list: any[] = ["xcatliu", 25, { website: "http://xcatliu.com" }];
