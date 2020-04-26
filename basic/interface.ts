interface People {
  readonly name: string; //只读属性
  age: number;
  run: () => void;
  id?: number; //可选属性
  [propName: string]: any; // 任意属性
}
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
let fat: People = {
  name: "1221",
  age: 12,
  run() {
    console.log("run");
  },
  id: 1,
  eat() {
    console.log("eat");
  },
  add() {
    console.log("add");
  },
};
fat.run();
fat.eat();
fat.add();
console.log(fat);
