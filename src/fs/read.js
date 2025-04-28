import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filepath = join(__dirname, "files", "fileToRead.txt");

  try {
    const content = await readFile(filepath, { encoding: "utf8" });
    console.log(content);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();
