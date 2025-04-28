import { readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const list = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const dirpath = join(__dirname, "files");

  try {
    const files = await readdir(dirpath);

    for (const file of files) {
      console.log(file);
    }
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
