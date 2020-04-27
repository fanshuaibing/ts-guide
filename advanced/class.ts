/*
 * 类
 * 定义了一件事物的抽象特点，包含它的属性和方法
 *类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
对象（Object）：类的实例，通过 new 生成
面向对象（OOP）的三大特性：封装、继承、多态
封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。
外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，
同时也保证了外界无法任意更改对象内部的数据
继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。
比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。
此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
存取器（getter & setter）：用以改变属性的读取和赋值行为
修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
 */

// TypeScript 中类的用法
/**
 * public private 和 protected
 public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 private 修饰的属性或方法是私有的，不能在声明它的类的外部访问  子类和实例都不能访问
 protected 修饰的属性或方法是受保护的，它和 private 类似，在实例里不能被访问 区别是它在子类中也是允许被访问的
 */

class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal("Jack");
console.log(a.name); // Jack
a.name = "Tom";
console.log(a.name); // Tom

// 当构造函数修饰为 private 不能实例化和继承
// 当构造函数修饰为 protected 不能实例化,只能继承

// 抽象类
/**
 * abstract 用于定义抽象类和其中的抽象方法
 * 1. 抽象类是不允许被实例化的
 * 2. 抽象类中的抽象方法必须被子类实现
 */

// 类的类型

{
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHi(): string {
      return `My name is ${this.name}`;
    }
  }

  let a: Animal = new Animal("Jack");
  console.log(a.sayHi()); // My name is Jack
}
