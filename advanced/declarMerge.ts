// 接口的合并 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型
// 合并的属性的类型必须是唯一的 即原有声明的类型跟后来的一定要相同
interface Father {
  age: number;
  eat: () => void;
}

interface Father {
  run: () => void;
}

interface Father {
  age: number;
  eat: () => void;
  run: () => void;
}

// 函数合并

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
