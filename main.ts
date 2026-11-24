import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "My smart fridge emailed me a grocery list based on my 2 AM snacks — and CC'd my doctor, my trainer, and the ghost of every salad I've ever thrown away.";

if (TEXT.length < 1 || TEXT.length > 280 || TEXT.includes("\n")) {
  throw new Error(`entry must be one line of 1-280 characters, got ${TEXT.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT + "\n", "utf8");
console.log(`wrote ${TEXT.length} characters to ${outDir}/entry.txt`);
