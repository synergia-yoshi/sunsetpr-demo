import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("TypeScript provider calls retain required payload fields", async () => {
  const openai = await readFile("src/openai.ts", "utf8");
  const gemini = await readFile("src/gemini.ts", "utf8");
  assert.match(openai, /responses\.create\(\{\s*model:/);
  assert.match(gemini, /generateContent\(\{[\s\S]*model:/);
  assert.match(gemini, /contents,/);
});

test("Python provider source remains syntactically valid", () => {
  const result = spawnSync("python3", ["-m", "py_compile", "src/anthropic.py"], {
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr);
});
