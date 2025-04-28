import { createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const write = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filepath = join(__dirname, "files", "fileToWrite.txt");

  const ws = createWriteStream(filepath);

  process.stdin.pipe(ws);
};

await write();
