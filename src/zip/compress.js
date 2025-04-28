import { createReadStream, createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";
import { createGzip } from "node:zlib";

const compress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const srcpath = join(__dirname, "files", "fileToCompress.txt");
  const destpath = join(__dirname, "files", "archive.gz");

  const rs = createReadStream(srcpath);
  const ws = createWriteStream(destpath);

  const gzip = createGzip();

  pipeline(rs, gzip, ws, (err) => {
    if (err) {
      console.log("Compression failed");
      process.exitCode = 1;
    }
  });
};

await compress();
