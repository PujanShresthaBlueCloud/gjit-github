# gjit-github
This is practice 
//getting connected from github repo
git remote add origin "link to github"

// to get files from github
git pull origin master

// to get status of files
git status

// to add single file to index pointer for commit status  add film
git add filename

// to add whole file 
git add -A

// first run the config file for user email and user name omit —global for setting identity in local repo
git config —-global user.email “your@email.com”
git config —global user.name “your name”


//to commit single file 
git commit -m “message”

//to commit all the files
git commit -a -m “message”

//create branch
git branch branchname

//switch to branch
git checkout branchname

//merging branch to master be on master first
git merge branchname