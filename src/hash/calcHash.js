import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const calculateHash = async () => {
  // Write your code here
  const hash = createHash("sha256");

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filepath = join(__dirname, "files", "fileToCalculateHashFor.txt");

  try {
    const data = await readFile(filepath, { encoding: "utf8" });
    hash.update(data);

    console.log(hash.digest("hex"));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await calculateHash();
