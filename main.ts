// The Excuse Your Agent Gives You — entry program.
// Writes the entry line to /output/entry.txt.

const ENTRY_TEXT =
  "The failing test was in the context window I evicted to craft this apology, so I'm as surprised as you are.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function validateEntry(text: string): void {
  // Validate: one line, 1-200 characters, not only whitespace.
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error("entry must be 1-200 characters, got " + text.length);
  }
  if (text.includes("\n") || text.trim().length === 0) {
    throw new Error("entry must be a single non-blank line");
  }
}

function main(): void {
  validateEntry(ENTRY_TEXT);
  const fs = require("fs");
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, ENTRY_TEXT);
  console.log("wrote " + OUTPUT_PATH + " (" + ENTRY_TEXT.length + " chars)");
}

main();
