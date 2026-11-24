import { mkdirSync, writeFileSync } from "node:fs";

// The funniest out-of-office auto-reply a houseplant would send:
// a fern, ignored since March, composting your email.
const reply =
  "Out of office: photosynthesizing. Your email has been composted. Water me, and I may forgive last three months. — Fern";

if (reply.length === 0 || reply.length > 120) {
  throw new Error(`reply must be 1 to 120 characters, got ${reply.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
console.log(`wrote ${reply.length} characters to /output/entry.txt`);
