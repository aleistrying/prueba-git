# Git Team Lab

A tiny repository for a 30-minute, five-person Git and GitHub workshop.

## What this repository teaches

- Working tree → staging → local commit → remote push
- `main`, `develop`, feature, release, and hotfix branches
- Pull requests and code review
- A safe, intentional merge conflict
- Reading history with VS Code Source Control and Git Graph

## Branch model used in this lab

| Branch | Meaning | Normally created from | Merges into |
|---|---|---|---|
| `main` | Production-ready code | — | — |
| `develop` | Next shared version | `main` | `main` through a release |
| `feature/name-food` | One small change | `develop` | `develop` through a PR |
| `release/v1.1.0` | Final stabilization | `develop` | `main` and back to `develop` |
| `hotfix/title-copy` | Urgent production fix | `main` | `main` and back to `develop` |

This model is intentionally educational. Many small teams use only `main` plus short-lived feature branches.

## Start here

1. Open this folder in VS Code.
2. Install or enable **Git Graph**.
3. Open [LIVE_GUIDE.md](LIVE_GUIDE.md).
4. Keep [CHEATSHEET.md](CHEATSHEET.md) open in a second tab.
5. Run the site by opening `index.html` in a browser (or use Live Server if installed).

If this folder came from the downloadable ZIP, it already contains Git history and example branches. To publish it as a new GitHub repository, create an empty GitHub repo and follow the commands in `LIVE_GUIDE.md`.

## Never commit

Secrets, `.env` files, access tokens, passwords, generated dependency folders, or large datasets. If a secret was committed, adding it to `.gitignore` afterward does not remove it from history—rotate the secret.

