let a = 4;

function printPattern1(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // process.stdout.write(n.toString() + ' ');
      //   process.stdout.write("*");
    //   process.stdout.write(j.toString());
      process.stdout.write(i.toString());
    }
    console.log("");
  }
}
printPattern1(a);
