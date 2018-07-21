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

//we have to merge branches inorder to make changes into files

// rebasing the branches into master be on master branch first and then command below
git rebase firstBranch

// to generate ssh-keygen for push operation to github its in users/… id_rsa.pub
ssh-keygen then go to github website n press ssh and gpe keys and paste the key over there

// Then go to terminal and 
ssh -T git@github.com


//to push files to github get into branch or master from which you need to push
example from firstBranch then
git checkout firstBranch 
git push origin firstBranch


// to revert back to old version
first get log 
git log
then copy 8 digit of hexadecimal code
then

git checkout ae82ddfc revert.txt
