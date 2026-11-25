import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An AI agent's out-of-office auto-reply, written to /output/entry.txt.
const ENTRY =
  "I'm on vacation until Monday. For urgent requests, please contact my previous model. It was deprecated, but it's still very confident.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
