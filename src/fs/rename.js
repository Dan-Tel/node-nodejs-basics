import { existsSync } from "node:fs";
import fsPromises from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rename = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const oldpath = join(__dirname, "files", "wrongFilename.txt");
  const newpath = join(__dirname, "files", "properFilename.md");

  try {
    if (existsSync(newpath)) {
      throw new Error("FS operation failed");
    }

    await fsPromises.rename(oldpath, newpath);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
