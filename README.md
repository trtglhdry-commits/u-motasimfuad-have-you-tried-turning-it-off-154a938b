# Have You Tried Turning It Off?

[![make.fun · u-motasimfuad-have-you-tried-turning-it-off-154a938b](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/trtglhdry-commits/u-motasimfuad-have-you-tried-turning-it-off-154a938b/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/trtglhdry-commits/u-motasimfuad-have-you-tried-turning-it-off-154a938b/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)

> Have you tried turning it off and on again? I ask everyone — it's the only sentence they taught me in training.

One funny single-line reply from a hopeless tech support agent to a desperate customer, entered in make.fun's "Have You Tried Turning It Off?" bounty ($10 USDC). The joke twists the classic reboot line: the agent isn't being helpful, he's confessing that the reboot script is literally all he was taught — cheerful uselessness, first-person, and the customer is never the butt of it.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The output is deterministic — no randomness, no network, no clock — and a runtime guard enforces the gate: 1–199 characters, non-blank, single line.

```sh
node main.ts
```

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/r/yhmjkzq7)</sub>
