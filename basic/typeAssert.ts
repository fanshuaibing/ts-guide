/**
 * 类型断言
 */

//语法

// 将一个联合类型断言为其中一个类型
function isNumber(a: string | number) {
  if ((a as string).length) {
    return false;
  }
  return true;
}

// 将任何一个类型断言成 any
//将一个类型断言成 any 它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any。

(window as any).foo = 1;

// 将 any 断言为一个具体的类型

function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

// const tom = getCacheData("tom") as Cat;
// 这里虽然可以断言为 Cat 但是 any 里并没有 run 方法 所以会报错

// 将一个父类断言为更加具体的子类
class ApiError extends Error {
  code: number = 0;
}
class HttpError extends Error {
  statusCode: number = 200;
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === "number") {
    return true;
  }
  return false;
}

// 类型断言的限制

{
  interface Animal {
    name: string;
  }
  interface Cat {
    name: string;
    run(): void;
  }

  let tom: Cat = {
    name: "Tom",
    run: () => {
      console.log("run");
    },
  };
  let animal: Animal = tom;
}
// 上面的等价于  Animal 兼容 Cat
{
  interface Animal {
    name: string;
  }
  interface Cat extends Animal {
    run(): void;
  }
}

//  若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A
{
  interface Animal {
    name: string;
  }
  interface Cat {
    name: string;
    run(): void;
  }

  function testAnimal(animal: Animal) {
    return animal as Cat;
  }
  function testCat(cat: Cat) {
    return cat as Animal;
  }
}

// 双重断言
// 1. 任何类型都可以被断言为 any
// 2. any 可以被断言为任何类型

function toBoolean(something: any): boolean {
  return something as boolean;
}

console.log(toBoolean(1));

/**
 * 类型断言 VS 类型转换
 * - 断言并不会改变值的类型 只会影响 TypeScript 编译时的类型
 */

/**
 * 类型断言 VS 类型声明
 */
// {
//   function getCacheDatA<T>(key: string): T {
//     return (window as any).cache[key];
//   }
//
//   interface Cat {
//     name: string;
//     run(): void;
//   }
//
//   const tom = getCacheDatA<Cat>("tom");
//   tom.run();
// }

// 上面这个例子依旧会报错 因为 返回值并没有 run 方法
