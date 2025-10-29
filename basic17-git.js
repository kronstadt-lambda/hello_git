export function basic17Git() {
    console.log('This is a basic17 git');
}

/*
 Others commands in Git:
 * git blame <file>: shows who modified each line in a file and when.
 * git revert <commit-hash>: creates a new commit that undoes the changes made in a specific commit.
 * git archive --format=zip --output=<file.zip> <branch-name/HEAD>: creates a zip archive of the specified branch.
 * git clean -fd: removes untracked files and directories from the working directory.
 * git diff --staged or git diff --cached: shows the differences between staged changes and the last commit.
 * git log --follow <file>: shows the commit history of a file, including renames.
 * git show <commit-hash>:<file-path>: shows the content of a file at a specific commit.
 * git log --grep="<search-term>": searches commit messages for a specific term.
 * git shortlog: summarizes commit history by author.
 * git bisect start <bad-commit> <good-commit>: helps find the commit that introduced a bug by performing a binary search.
 * git commit --amend: modifies the most recent commit, allowing you to change the commit message or add new changes.
 */