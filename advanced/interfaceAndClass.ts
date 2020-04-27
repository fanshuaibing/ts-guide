/**
 * 类与接口
 *
 */

// 类实现接口
{
  interface Animal {
    run(): void;
  }

  class Dog {}

  class WhiteDog extends Dog implements Animal {
    run() {
      console.log("run");
    }
  }

  class Cat implements Animal {
    run() {
      console.log("cat run");
    }
  }
}

// 类可以继承多个接口
{
  interface Father {
    paint: () => void;
  }

  interface Mother {
    jump: () => void;
  }

  class Son implements Father, Mother {
    paint() {
      console.log("paint");
    }
    jump() {
      console.log("jump");
    }
  }
}

// 接口继承接口

interface Body {
  height: string;
}

interface Option extends Body {
  name: string;
  age: number;
}

// 接口继承类
{
  class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

  interface Point3d extends Point {
    z: number;
  }

  let point3d: Point3d = { x: 1, y: 2, z: 3 };
}

{
  class Point {
    /** 静态属性，坐标系原点 */
    static origin = new Point(0, 0);
    /** 静态方法，计算与原点距离 */
    static distanceToOrigin(p: Point) {
      return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    /** 实例属性，x 轴的值 */
    x: number;
    /** 实例属性，y 轴的值 */
    y: number;
    /** 构造函数 */
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    /** 实例方法，打印此点 */
    printPoint() {
      console.log(this.x, this.y);
    }
  }

  interface PointInstanceType {
    x: number;
    y: number;
    printPoint(): void;
  }

  let p1: Point;
  let p2: PointInstanceType;
}

//接口继承类的时候，也只会继承它的实例属性和实例方法
