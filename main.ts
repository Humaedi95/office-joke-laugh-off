// Writes one original one-line office joke to a text file, one line only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const joke =
  "My standing desk is the only thing in this office that ever stands up for me.";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, joke + "\n", "utf8");
console.log(`Wrote ${joke.length} characters to ${outputPath}`);
