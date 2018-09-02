## Git Notes

#### What do certain commands mean?
git status - state of the index
git log - show all of the changes that have been made
git pull origin master - pull all of updates from origin
git branch -d mybranch - Once complete remove branch

#### Git Hub Workflow
git pull
git checkout -b <your-branch-name>
git add git commit {repeat as necessary}
git fetch
git rebase origin/master OR git merge origin/master
If conflicts detected:
    Edit affected files — be sure to remove all conflict markers <<<<<< —————- >>>>>
    git add editedFile1 editedFile2 …
    git rebase —continue OR git commit followed by :wq
git push origin your-branch-name // creates tracking branch
git branch -D your-branch-name

#### Git Links
https://git-school.github.io/visualizing-git/
http://rogerdudler.github.io/git-guide/
