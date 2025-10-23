export function sayhello2() { console.log('hello2'); }

/*
 * git diff: shows the differences between the current branch and the last commit. Don't show the new files.
 * (warning) git checkout <hash>: changes the commit with this hash. This command changes to 'detached' branch.
 * Use 'git checkout <name branch>' to back to the branch.
 * git checkout -b <name new branch>: This command creates a new branch.
 * (alias) git tree: for look at the trace of commits.
 * (warning) git reset --hard <hash>: resets the repository to the commit with this hash.
 * (not recommend) git reflog: shows the history of the commits, even if you have deleted them.
 * Use 'git reset --hard <last deleted hash>' to undo the changes.
 *
 * Tag: like versions of software.
 * git tag <name>: creates a tag with the name. It is useful to mark a specific task ends or versions.
 */