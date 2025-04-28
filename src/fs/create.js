import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const create = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filepath = join(__dirname, "files", "fresh.txt");

  try {
    await writeFile(filepath, "I am fresh and young", { flag: "wx" });
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await create();
