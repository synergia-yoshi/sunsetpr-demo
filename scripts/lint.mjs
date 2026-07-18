import { readFile } from "node:fs/promises";
import process from "node:process";

for (const file of ["src/openai.ts", "src/gemini.ts", "src/anthropic.py"]) {
  const source = await readFile(file, "utf8");
  if (source.includes("\t") || / +$/m.test(source)) {
    process.stderr.write(`${file}: tabs or trailing whitespace found\n`);
    process.exitCode = 1;
  }
}
