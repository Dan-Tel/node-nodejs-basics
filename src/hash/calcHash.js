import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const calculateHash = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filepath = join(__dirname, "files", "fileToCalculateHashFor.txt");

  const hash = createHash("sha256");
  const stream = createReadStream(filepath);

  stream.on("data", (chunk) => hash.update(chunk));
  stream.on("end", () => console.log(hash.digest("hex")));
};

await calculateHash();
