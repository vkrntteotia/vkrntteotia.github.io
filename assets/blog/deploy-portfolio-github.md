---
title: Deploy Angular Apps to GitHub Pages with angular-cli-ghpages
description: Easily deploy your Angular applications to GitHub Pages using angular-cli-ghpages. Automate the build and deployment process directly from the Angular CLI, making it simple to host your app online with a single command...
date: 2026-02-01
tags: angular, pagination, markdown
slug: deploy-portfolio-github
---

## 📦 Prerequisites

- Node.js installed<br>
- Angular CLI installed<br>
- A GitHub account<br>
- An existing Angular project<br>

# create angular project

ng new portfolio --standalone --routing --style=css<br>
cd portfolio

# Install angular-cli-ghpages

npm install -g angular-cli-ghpages

# Create new repo on github

username.github.io<br>
Here username is your github username<br>

- Then run github command to add repo in your project portfolio<br>
- git init<br>
- git add .<br>
- git commit -m "Initial portfolio"<br>
- git branch -m main<br>
- git remote set-url origin https://token:x-oauth-basic@github.com/vkrntteotia/vkrntteotia.github.io.git<br>
- git push -u origin main (if not work) or git push --force origin main<br>
- git pull origin main<br>

# Already Install angular-cli-ghpages Now Deploy to github

ng build --configuration production --base-href /
npx angular-cli-ghpages --dir=dist/portfolio --branch=gh-pages --no-silent --message="Deploy $(date +%s)"

# Visit url

https://username.github.io/#/
