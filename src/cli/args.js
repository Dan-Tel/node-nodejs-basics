import { argv } from "node:process";

const parseArgs = () => {
  // Write your code here
  const cliArgs = [];
  for (let i = 2; i < argv.length; i += 2) {
    cliArgs.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
  }

  console.log(cliArgs.join(", "));
};

parseArgs();
