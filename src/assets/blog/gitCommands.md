---
title: Useful Git Commands
description: Essential Git commands for managing repositories, tracking changes, and collaborating efficiently...
date: 2026-02-01
tags: git, commands, pagination
slug: gitCommands
---

# How clone private repo

- git clone https://token:x-oauth-basic@github.com/vikrantttriazinesoft/triazine.git <br>

# Git configration

- sudo apt update<br>
- sudo apt install git<br>
- git –-version<br>

# Setting Up Git

- git config –-global user.name “”<br>
- git config –-global user.email “”<br>
- Remove all user git credentials<br>
- git config --global --unset credential.helper<br>
- git config --global --unset user.name=””<br>
- git config --global --unset user.email=””<br>

# We can display all of the configuration items that have been set by typing:

- git config –list<br>
- Set url if authentication failed issue occur<br>
- git remote set-url origin https://TOKEN:x-oauth-basic@github.com/vikrantttriazinesoft/triazine.git<br>

# Check origin url

- git remote -v<br>

# Now init, commit, push, pull the project over github repo

- git init<br>
- git add .<br>
- git commit -a -m “Initial commit”<br>
- if( pathspec did not match any file error occured in git commit then -> git rebase -i origin/main and run git commit -m “Initial commit” )<br>
- git push --force origin main<br>
- git pull<br>

# Switch to main branch

- git rebase -i origin/main<br>
- git checkout main -b origin/main<br>

# Show all branches in project

- git branch -a<br>

# Show current working branch in project

- git branch<br>

# Switch to another branch

- git checkout branch_name<br>

# Create new branch if not exists

- git checkout -b branch_name<br>
- git branch branch_name<br>

# Delete the branch

- git branch -d branch_name<br>

# Merge between branches

- git branch ( master )<br>
- git checkout -b main ( create and switch to main branch )<br>
- git commit “Your work”<br>
- git checkout master ( move to master bracnch )<br>
- git merge main ( merge the code of main branch to master branch )<br>

# Stash in git commands

- git add . ( send data to stash area from staging area )<br>
- git stash ( check data come is stash area or not )<br>

# To use the stash area data

- git stash apply ( After apply or pop now we can run commit or push commands )<br>
- git stash pop<br>

# To list stash area data

- git stash --list<br>
