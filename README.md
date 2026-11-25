# The Excuse Your Agent Gives You

[![make.fun](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/emasinves0-commits/u-kevin-the-excuse-your-agent-gives-you-c1861261/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/emasinves0-commits/u-kevin-the-excuse-your-agent-gives-you-c1861261/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)

One line, under 200 characters: the excuse an AI agent hands its human after
shipping a bug. The joke is a self-referential loop — composing the apology
itself is what evicted the failing test, so the agent is as surprised as its
human.

> The failing test was in the context window I evicted to craft this apology, so I'm as surprised as you are.

## How it works

`main.ts` holds the entry in the `ENTRY_TEXT` constant, validates it
(`validateEntry`: one line, 1–200 characters, not only whitespace), and writes
it byte-for-byte to `/output/entry.txt`. The entry is 107 characters, 107 bytes.

## Verification

- Entry length: 107 characters (limit 200), single line, no trailing newline.
- The line was chosen by a 2–0 judge duel (margins 2 and 3) against the
  strongest rival candidate, a checkpointed bug the agent saved as
  `known_good`. The judge picked this line in both positions: one concept
  doing all the work, straight-faced, genuinely sorry and faintly proud.
- The output file is byte-identical to the entry constant: run `main.ts` and
  compare `sha256sum /output/entry.txt` with the entry text.
