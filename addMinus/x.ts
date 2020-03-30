{
  class Person {
    public children: Person[] = [];
    constructor(public name: string) {}
    addChild(child: Person): void {
      this.children.push(child);
    }
    introudceFamily(): void {
      console.log(this.name);
      this.children.forEach((child) => {
        child.introudceFamily();
      });
    }
  }

  let grandPa = new Person("王麻子");
  let child1 = new Person("王子");
  let child2 = new Person("大锤");
  let child11 = new Person("王子1");
  let child12 = new Person("大锤1");
  let child21 = new Person("王子2");
  let child22 = new Person("大锤3");
  grandPa.addChild(child1);
  grandPa.addChild(child2);
  child1.addChild(child11);
  child1.addChild(child12);
  child2.addChild(child21);
  child2.addChild(child22);
  grandPa.introudceFamily();
}
