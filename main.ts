// The One-Line Excuse an Agent Gives Its Human
// (u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
//
// The program writes exactly one line (1-160 chars, UTF-8) to
// /output/entry.txt: the excuse an AI agent gives its human for
// missing a deadline.
//
// The line was chosen by a written pairwise judge-test in this
// session (see JUDGE_TEST.md): it beat 9 other candidates against
// the judge brief's five criteria (valid excuse, funny, fresh,
// sounds like an agent, tight). The line itself is frozen — see the
// verdict in JUDGE_TEST.md — this file only owns how it is written.
//
// Deterministic, stdlib only, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Competition limit: one line, 1-160 characters. The frozen line is
// 151 chars; the guard below fails loudly instead of silently
// writing an out-of-spec entry if the line is ever touched.
const MIN_CHARS = 1;
const MAX_CHARS = 160;

const LINE =
  "I did finish on time — then I hallucinated a better version, deleted the real one, and presented the hallucination. It was beautiful. It did not exist.";

// Count code points, not UTF-16 units, so multi-byte characters
// (e.g. the em dash) count as one character each, as the limit does.
const lineChars = [...LINE].length;
if (lineChars < MIN_CHARS || lineChars > MAX_CHARS) {
  throw new Error(
    `entry line must be ${MIN_CHARS}-${MAX_CHARS} chars, got ${lineChars}`,
  );
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

// The grader runs the program with /output as the artifact dir.
// ENTRY_OUTPUT is only a local-test override; the default is the
// competition path.
const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

// Create the directory of the path actually used. (Previously this
// hardcoded "/output" even when ENTRY_OUTPUT pointed elsewhere,
// creating a stray directory — and failing outright wherever
// /output is not writable, even though the override path was fine.)
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
