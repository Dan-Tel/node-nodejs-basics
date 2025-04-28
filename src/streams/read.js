import { createReadStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filepath = join(__dirname, "files", "fileToRead.txt");

  const rs = createReadStream(filepath);

  rs.pipe(process.stdout);
};

await read();
