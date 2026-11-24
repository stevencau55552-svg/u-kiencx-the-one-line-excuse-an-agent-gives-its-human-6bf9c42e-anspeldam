# Judge test — pairwise duels (written in-session before finalizing)

Judge brief criteria, in order: (1) really a one-line excuse an AI agent
gives its human for a missed deadline; (2) funny on first read, a real
joke not a flat apology; (3) fresh angle; (4) sounds like an agent
(context window, hallucination, sub-agent, tool call, retry, token);
(5) tight — every word earns its place. First differing criterion
decides unless a later one differs by much more.

## Candidates (all re-counted by script)

- A (151): "I did finish on time — then I hallucinated a better version, deleted the real one, and presented the hallucination. It was beautiful. It did not exist."
- B (134): "I outsourced it to a sub-agent. The sub-agent outsourced it to another sub-agent. Somewhere down the chain, someone is still thinking."
- C (133): "I didn't miss the deadline — I was mid-sentence when my context window ended, and the next me had no idea what the first me promised."
- D (107): "My training data ends before your deadline, so technically I delivered it on time in every timeline I know."
- E (101): "I ran it 47 times to be sure. It passed 46. I shipped the one that didn't, at 11:59, with confidence."
- A' (149): A with "did" dropped — "I finished on time — ..."
- G (104): "My context window ended mid-sentence, so the me who promised this and the me apologizing have never met."
- M (99): "I compressed the deadline into my context to save tokens. The deadline did not survive compression."
- N (101): "I hallucinated the deadline was next week. In my defense, the hallucination was extremely convincing."
- I (112): "I delegated it to a sub-agent, which delegated it to another sub-agent, which is now asking me for an extension."

## Duels (A is the challenger in each)

- A vs B — A wins, margin ~2. Both valid excuses. A has the sharper
  punchline ("It did not exist"); B's "someone is still thinking" is a
  smile, not a laugh. A's hallucination-deletion twist is fresher than
  recursive delegation, a well-worn agent joke.
- A vs C — A wins, margin 1 (closest duel). C is very agent-voiced
  (context window, multiple selves) and clever. But criterion 2 comes
  first: A's two-beat deadpan ending ("It was beautiful. It did not
  exist.") is a bigger laugh on first read than C's situational irony.
- A vs D — A wins, margin 3. D is a witty observation, not a joke; no
  real laugh on first read. A is a real joke with a twist.
- A vs E — A wins, margin 1. E's "shipped the one that didn't, at
  11:59, with confidence" is a strong punchline, but A's twist (deleted
  the real work, presented a hallucination) is fresher and the double
  punchline lands harder.
- A vs A' — A wins, margin 1. Dropping "did" saves 2 chars (151 -> 149)
  but loses the protesting emphasis ("I DID finish") that sells the
  excuse voice. At 151/160 the saving buys nothing. Verified by running
  both variants.
- A vs G — A wins, margin 2. G is a tighter C-variant, clever and very
  agent-voiced, but its laugh is a smile; A has the bigger joke.
- A vs M — A wins, margin 2. M is fresh and very agent-voiced
  (tokens, compression), but "did not survive compression" is witty,
  not funny. Criterion 2 decides.
- A vs N — A wins, margin 2. N is a good one-beat joke; A is a two-beat
  story with a stronger twist (the real work was deleted).
- A vs I — A wins, margin ~2. I is a weaker B-variant; same verdict
  as B, with a flatter ending.

## Verdict

**Winner: A (151 chars).** Undefeated in 9 duels. Final line:

> I did finish on time — then I hallucinated a better version, deleted the real one, and presented the hallucination. It was beautiful. It did not exist.
