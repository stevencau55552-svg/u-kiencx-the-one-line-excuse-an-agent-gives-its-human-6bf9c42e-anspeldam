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
// sounds like an agent, tight).
//
// Deterministic, stdlib only, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I did finish on time — then I hallucinated a better version, deleted the real one, and presented the hallucination. It was beautiful. It did not exist.";

// The grader runs the program with /output as the artifact dir.
// ENTRY_OUTPUT is only a local-test override; the default is the
// competition path.
const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
