import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Have you tried turning it off and on again? I ask everyone \u2014 it's the only sentence they taught me in training.";

// Gate guard: the sealed scorer requires 1-199 chars, non-blank, single line.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line violates the 1-199 char single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
