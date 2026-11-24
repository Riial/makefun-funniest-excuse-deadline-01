import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I retried the task 47 times and it failed 47 times. On the 48th try I wrote this excuse instead, and it worked first time.";

// Mirror the sealed gate scorer: 1-200 UTF-8 characters, not only whitespace.
const chars = [...EXCUSE];
if (chars.length < 1 || chars.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse fails the gate: ${chars.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");

// Verify the write round-trips byte for byte before exiting.
if (readFileSync("/output/entry.txt", "utf8") !== EXCUSE) {
  throw new Error("entry.txt does not match the excuse");
}
