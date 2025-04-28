import { cpus } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads";

const createWorker = (data) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filepath = join(__dirname, "worker.js");

  return new Promise((resolve, reject) => {
    const worker = new Worker(filepath, { workerData: data });

    worker.on("message", resolve);
    worker.on("error", reject);
  });
};

const performCalculations = async () => {
  // Write your code here

  const numOfCores = cpus().length;
  const workers = [];
  for (let i = 0; i < numOfCores; i++) {
    workers.push(createWorker(10 + i));
  }

  let results = await Promise.allSettled(workers);

  results = results.map(({ status, value }) => {
    if (status == "fulfilled") {
      return { status: "resolved", data: value };
    } else {
      return { status: "error", data: null };
    }
  });

  console.log(results);
};

await performCalculations();
