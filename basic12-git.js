export function basic12Git() {
    console.log('This is a basic12 git');
}

/*
 * git restore --staged <file>: restores the file from the staging area.
 * git fetch: fetches the changes from the remote repository.
 * git config pull.rebase false: configures git pull to use merge strategy.
 * (warning!) git config pull.rebase true: configures git pull to use rebase strategy (this suppose that all is ok).
 * git pull origin dev: fetches the changes from the remote repository and merges them to the current branch with the same name.
 */

basic12Git();