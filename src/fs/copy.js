import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const copy = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const srcpath = join(__dirname, "files");
  const destpath = join(__dirname, "files_copy");

  try {
    if (existsSync(destpath)) {
      throw new Error("FS operation failed");
    }

    await cp(srcpath, destpath, { recursive: true });
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await copy();
