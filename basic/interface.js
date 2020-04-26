// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
var fat = {
    name: "1221",
    age: 12,
    run: function () {
        console.log("run");
    },
    id: 1,
    eat: function () {
        console.log("eat");
    },
    add: function () {
        console.log("add");
    }
};
fat.run();
fat.eat();
fat.add();
console.log(fat);
