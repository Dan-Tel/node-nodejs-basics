import { unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const remove = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filepath = join(__dirname, "files", "fileToRemove.txt");

  try {
    await unlink(filepath);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
