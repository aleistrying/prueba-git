# Git Cheat Sheet

## The mental model

`edit → stage → commit → push → pull request → merge`

| Action | VS Code | Terminal equivalent |
|---|---|---|
| See changes | Source Control panel | `git status` / `git diff` |
| Stage a file | Click `+` beside it | `git add <file>` |
| Commit | Type message, click Commit | `git commit -m "message"` |
| Create/switch branch | Status-bar branch name | `git switch -c feature/name` |
| Send commits | Sync/Push | `git push -u origin feature/name` |
| Get remote work | Pull/Sync | `git pull` |
| Inspect history | Git Graph | `git log --oneline --graph --all` |

## The three places beginners mix up

| Place | Meaning |
|---|---|
| Working tree | Edited but not necessarily saved in Git |
| Staging area | Exact changes selected for the next commit |
| Local repository | Commits saved on your computer |
| GitHub remote | Commits pushed and shared online |

## Good habits

- Pull before starting work; create a branch from the correct base.
- Make one logical change per commit.
- Read the diff before staging and again before committing.
- Use clear imperative messages: `Add Lili's team card`.
- Push your branch and open a pull request; do not work directly on `main`.
- Commit source and useful configuration, not secrets or generated clutter.

## When to commit

Commit when one small idea is complete and the project still makes sense. Good: `Add team member card`, `Fix empty name validation`, `Update setup instructions`. Avoid `stuff`, `changes`, `final final`, or one commit mixing unrelated work.

## Pull, fetch, and push

- `fetch`: learn what changed remotely without integrating it.
- `pull`: fetch and integrate remote changes into your current branch.
- `push`: send your local commits to the remote.

## Conflict survival steps

1. Stop and read the conflict; nothing has been lost.
2. In VS Code choose **Accept Current**, **Accept Incoming**, **Accept Both**, or edit manually.
3. Remove all `<<<<<<<`, `=======`, and `>>>>>>>` markers.
4. Save and test the final result.
5. Stage the resolved file and commit the resolution.

Useful escape hatch: if you started a merge and should not continue, use `git merge --abort` before committing.

