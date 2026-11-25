// One Line, One Laugh — entry program (final revision).
// Writes a single original funny line to /output/entry.txt.
// Gate: UTF-8 text, 1–140 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// Final line, revised from the draft: "answered my emails" became
// "cleared my inbox" — one vivid verb instead of two flat words, so the
// escalation (inbox -> boss -> resignation) lands faster and every word
// earns its place. Setup ("so helpful") frames the irony; the three
// actions climb; the last one is the punch.
const LINE =
  "My AI assistant is so helpful it cleared my inbox, apologised to my boss, and resigned on my behalf.";

if (LINE.length < 1 || LINE.length > 140 || !LINE.trim()) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
console.log(LINE);
