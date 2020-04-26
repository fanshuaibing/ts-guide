/**
 * 类型别名
 */

// 类型别名 就是给类型起个新名字
type Name = string;

// 字符串字面量类型
{
  type EventNames = "click" | "scroll" | "mousemove";
  function handleEvent(ele: Element, event: EventNames) {
    // do something
  }

  handleEvent(document.getElementById("hello"), "scroll"); // 只能是 EventNames 中的一个
}

// 类型别名与字符串字面量类型都是使用 type 进行定义

// 元组 Tuple
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

{
  let tom: [string, number] = ["Tom", 25];
}

//直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项

// 对元组类型中添加值时， 一定是联合类型中的一种
{
  let Tom: [string, number];
  Tom = ["Tom", 25];
  Tom.push("male");
}

// 枚举 Enum

{
  enum Days {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
  }

  console.log(Days["Sun"] === 0); // true
  console.log(Days["Mon"] === 1); // true
  console.log(Days["Tue"] === 2); // true
  console.log(Days["Sat"] === 6); // true

  console.log(Days[0] === "Sun"); // true
  console.log(Days[1] === "Mon"); // true
  console.log(Days[2] === "Tue"); // true
  console.log(Days[6] === "Sat"); // true
}
// 会被编译为
{
  var Days;
  (function (Days) {
    Days[(Days["Sun"] = 0)] = "Sun";
    Days[(Days["Mon"] = 1)] = "Mon";
    Days[(Days["Tue"] = 2)] = "Tue";
    Days[(Days["Wed"] = 3)] = "Wed";
    Days[(Days["Thu"] = 4)] = "Thu";
    Days[(Days["Fri"] = 5)] = "Fri";
    Days[(Days["Sat"] = 6)] = "Sat";
  })(Days || (Days = {}));
}

// 常数枚举  使用 const enum 定义的枚举类型
{
  const enum Directions {
    Up,
    Down,
    Left,
    Right,
  }

  let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right,
  ];

  // 编译结果
  // var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
}

// 外部枚举  declare enum
{
  const enum Directions {
    Up,
    Down,
    Left,
    Right,
  }

  let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right,
  ];
  //var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
}
