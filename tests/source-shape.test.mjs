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

test("free scan proof pins the current reviewed SunsetPR Action release", async () => {
  const workflow = await readFile(".github/workflows/sunsetpr.yml", "utf8");
  assert.match(
    workflow,
    /uses: synergia-yoshi\/sunsetpr-action@e8a72099d7b398279cea7e1ae6ef4770b4a31e48 # v0\.3\.1/,
  );
});
