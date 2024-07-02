const sentence = "hello there from lighthouse labs";

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);

  if (delay === 0) {
    setTimeout(() => {
      process.stdout.write('\n');
    }, 1650);
  }
  
  delay += 50;
}