import { Transform } from "node:stream";

const transform = async () => {
  // Write your code here
  const ts = new Transform({
    transform(chunk, enc, cb) {
      const trimmedChunk = chunk.toString().trim();
      const reversedChunk = trimmedChunk.split("").reverse().join("");

      this.push(`${reversedChunk}\n`);

      cb();
    },
  });
  process.stdin.pipe(ts).pipe(process.stdout);
};

await transform();
