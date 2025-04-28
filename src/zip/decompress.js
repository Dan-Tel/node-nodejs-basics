import { createReadStream, createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";
import { createGunzip, createGzip } from "node:zlib";

const decompress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const srcpath = join(__dirname, "files", "archive.gz");
  const destpath = join(__dirname, "files", "fileToCompress.txt");

  const rs = createReadStream(srcpath);
  const ws = createWriteStream(destpath);

  const gunzip = createGunzip();

  pipeline(rs, gunzip, ws, (err) => {
    if (err) {
      console.log("Decompression failed");
    }
  });
};

await decompress();
