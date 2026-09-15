# 30-Minute Live Guide

Keep VS Code Source Control on the left, `index.html` in the editor, and Git Graph visible when discussing history.

## 0:00–0:03 — Orient everyone

Say: **Git tracks versions locally; GitHub hosts and coordinates those versions.**

Show the four locations in `CHEATSHEET.md`. Ask repeatedly: “Where does this change exist right now?”

In Git Graph, point out:

- `main`: what users could receive in production
- `develop`: where the next version comes together
- short-lived `feature/*`, `release/*`, and `hotfix/*` examples

Do not teach every branch type deeply. The useful rule is: branch from a stable shared point, do one focused job, then merge through review.

## 0:03–0:08 — Alejandro demos the complete loop

Start from `develop` and create your branch using the branch name in VS Code’s bottom-left corner:

```bash
git switch develop
git switch -c feature/alejandro-food
```

Edit Alejandro’s `favoriteFood` in `data/team.json`, then show:

1. Source Control displays an unstaged file.
2. Click the file to inspect its diff.
3. Click `+` to stage it.
4. Enter `Update Alejandro's favorite food` and commit.
5. Push/Publish Branch.
6. On GitHub, open a pull request into `develop`, review the diff, and merge.

Ask: Was the change on GitHub before the push? No. Was it on `develop` before the PR was merged? No.

## 0:08–0:16 — Five-person synchronized lab

Everyone first switches to and updates `develop`:

```bash
git switch develop
git pull
```

Assign one person to each entry in `data/team.json`:

| Person | Branch | Commit message |
|---|---|---|
| Alejandro | `feature/alejandro-food` | `Update Alejandro's favorite food` |
| Carlos | `feature/carlos-food` | `Update Carlos's favorite food` |
| Lili | `feature/lili-food` | `Update Lili's favorite food` |
| Brayan | `feature/brayan-food` | `Update Brayan's favorite food` |
| David | `feature/david-food` | `Update David's favorite food` |

Each person creates their branch, edits only their own value, reviews the diff, stages, commits, pushes, and opens a PR into `develop`.

```bash
git switch -c feature/name-food
git status
git add data/team.json
git commit -m "Update Name's favorite food"
git push -u origin feature/name-food
```

Merge the PRs one by one. Because each person changes a different line, Git should normally combine them cleanly.

## 0:16–0:25 — Intentional merge-conflict lab

First, everyone updates `develop`. Then everyone creates a different branch **before anybody’s vote is merged**:

```bash
git switch develop
git pull
git switch -c conflict/name-language
```

Every person edits the same line in `data/vote.txt`, choosing a different language. Commit, push, and open a PR into `develop`.

Merge one PR first. The other PRs now disagree with the new `develop` branch. Pick one learner to resolve it locally:

```bash
git switch conflict/name-language
git pull origin develop
```

In VS Code, open `data/vote.txt`. Explain that Git preserved both versions because it cannot decide what humans intend. Use the Merge Editor or edit manually to produce one sensible final sentence, then:

```bash
git add data/vote.txt
git commit -m "Resolve team language vote conflict"
git push
```

Return to the PR, confirm it is mergeable, review, and merge it.

## 0:25–0:28 — Production-shaped branches

Use Git Graph to explain, without having everyone reproduce it:

- Feature work begins from and returns to `develop`.
- A `release/*` branch freezes a version for final fixes before `main`.
- A `hotfix/*` branch starts from `main` for an urgent production repair.
- Merged hotfixes should also return to `develop`, so the next release keeps the fix.

Mention that many real projects simplify this to `main` + feature branches + PRs. The team should follow its repository’s convention rather than blindly copying one model.

## 0:28–0:30 — Recap

Ask the room to answer these aloud:

1. Is a commit automatically on GitHub? **No.**
2. Why use a branch? **To isolate focused work.**
3. What does a PR do? **Proposes and reviews a merge.**
4. Is a conflict Git failing? **No—Git is asking for a human decision.**
5. What should you run/check when confused? **`git status`.**

## Publish this starter repo to GitHub

Create a new **empty** repository on GitHub (no generated README), then from this folder run:

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
git push origin develop release/v1.1.0 hotfix/title-copy feature/example-team-card
git push origin --tags
```

Set `main` as the default/protected production branch. For the live exercise, ask participants to create PRs into `develop`.

## If someone gets lost

Check, in this order:

1. Correct folder?
2. Correct branch shown in VS Code?
3. File saved?
4. What does Source Control / `git status` say?
5. Did they commit locally?
6. Did they push that exact branch?

