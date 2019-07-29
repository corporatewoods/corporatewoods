# Welcome to Corporate Woods 

Corporate Woods is not affiliated with Corporate Woods or any other corporation. 
All views expressed are my own and do not belong to my employer. 

## About UI 

UI is a sub-folder inside Corporate Woods. 
It is a proof-of-concept project. 

capacity is the name of the game 


Git problems? 

```sh
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git fetch
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git push origin master
To https://github.com/corporatewoods/corporatewoods.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/corporatewoods/corporatewoods.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Everything up-to-date
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git remote show origin
* remote origin
  Fetch URL: https://gitlab.com/corporatewoods/corporatewoods.gitlab.io.git
  Push  URL: https://github.com/corporatewoods/corporatewoods.git
  Push  URL: https://gitlab.com/corporatewoods/corporatewoods.gitlab.io.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git fetch
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git pull origin master
From https://gitlab.com/corporatewoods/corporatewoods.gitlab.io
 * branch            master     -> FETCH_HEAD
Already up to date.
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git push origin master
To https://github.com/corporatewoods/corporatewoods.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/corporatewoods/corporatewoods.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Everything up-to-date
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> gitk --all
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git push origin master
To https://github.com/corporatewoods/corporatewoods.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/corporatewoods/corporatewoods.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Everything up-to-date
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git remote show
origin
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git remote show origin
* remote origin
  Fetch URL: https://gitlab.com/corporatewoods/corporatewoods.gitlab.io.git
  Push  URL: https://github.com/corporatewoods/corporatewoods.git
  Push  URL: https://gitlab.com/corporatewoods/corporatewoods.gitlab.io.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git remote origin --verbose
error: Unknown subcommand: origin
usage: git remote [-v | --verbose]
   or: git remote add [-t <branch>] [-m <master>] [-f] [--tags | --no-tags] [--mirror=<fetch|push>] <name> <url>
   or: git remote rename <old> <new>
   or: git remote remove <name>
   or: git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
   or: git remote [-v | --verbose] show [-n] <name>
   or: git remote prune [-n | --dry-run] <name>
   or: git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)...]
   or: git remote set-branches [--add] <name> <branch>...
   or: git remote get-url [--push] [--all] <name>
   or: git remote set-url [--push] <name> <newurl> [<oldurl>]
   or: git remote set-url --add <name> <newurl>
   or: git remote set-url --delete <name> <url>

    -v, --verbose         be verbose; must be placed before a subcommand

PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git remote o--verbose
error: Unknown subcommand: o--verbose
usage: git remote [-v | --verbose]
   or: git remote add [-t <branch>] [-m <master>] [-f] [--tags | --no-tags] [--mirror=<fetch|push>] <name> <url>
   or: git remote rename <old> <new>
   or: git remote remove <name>
   or: git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
   or: git remote [-v | --verbose] show [-n] <name>
   or: git remote prune [-n | --dry-run] <name>
   or: git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)...]
   or: git remote set-branches [--add] <name> <branch>...
   or: git remote get-url [--push] [--all] <name>
   or: git remote set-url [--push] <name> <newurl> [<oldurl>]
   or: git remote set-url --add <name> <newurl>
   or: git remote set-url --delete <name> <url>

    -v, --verbose         be verbose; must be placed before a subcommand

PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git remote --verbose
origin  https://gitlab.com/corporatewoods/corporatewoods.gitlab.io.git (fetch)
origin  https://github.com/corporatewoods/corporatewoods.git (push)
origin  https://gitlab.com/corporatewoods/corporatewoods.gitlab.io.git (push)
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git push origin masater
error: src refspec masater does not match any
error: failed to push some refs to 'https://github.com/corporatewoods/corporatewoods.git'
error: src refspec masater does not match any
error: failed to push some refs to 'https://gitlab.com/corporatewoods/corporatewoods.gitlab.io.git'
PS C:\Users\u1291341\Documents\src\personal\corporatewoods> git pull https://github.com/corporatewoods/corporatewoods.git master
From https://github.com/corporatewoods/corporatewoods
 * branch            master     -> FETCH_HEAD
Merge made by the 'recursive' strategy.
 UI/src/app/app.component.spec.ts           | 8 ++++++--
 UI/src/app/navbar/navbar.component.spec.ts | 4 ++++
 2 files changed, 10 insertions(+), 2 deletions(-)
PS C:\Users\u1291341\Documents\src\personal\corporatewoods>
```