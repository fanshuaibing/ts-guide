let c: number = parseInt(process.argv[2]);
let d: number = parseInt(process.argv[3]);

if (Number.isNaN(c) || Number.isNaN(d)) {
  console.log("出错了");
  process.exit();
}

console.log(c - d);
