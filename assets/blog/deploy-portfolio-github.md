# create angular project

ng new portfolio --standalone --routing --style=css

# Install angular-cli-ghpages

npm install -g angular-cli-ghpages

# Create new repo on github

username.github.io  
Here username is your github username

- Then run github command to add repo in your project portfolio
- git init
- git add .
- git commit -m "Initial portfolio"
- git branch -m main
- git remote set-url origin https://<token>:x-oauth-basic@github.com/vkrntteotia/vkrntteotia.github.io.git
- git push -u origin main (if not work) or git push --force origin main
- git pull origin main

# Already Install angular-cli-ghpages Now Deploy to github

ng build --configuration production --base-href /
npx angular-cli-ghpages --dir=dist/portfolio --branch=gh-pages --no-silent --message="Deploy $(date +%s)"

# Visit url

https://username.github.io/#/
