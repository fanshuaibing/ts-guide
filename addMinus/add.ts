let a: number = parseInt(process.argv[2]);

let b: number = parseInt(process.argv[3]);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log("出错了");
  process.exit();
}

console.log(a + b);
