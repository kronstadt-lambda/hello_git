export function basic13Git() {
    console.log('This is a basic13 git');
}

/*
 All these commands are related to GitHub web platform:
 * fork: creates a personal copy of someone else's repository on GitHub and modify it without affecting the original project.
 * synchronize a fork: keeping your fork up to date with the original repository.
 * pull request: proposing changes from your forked repository to be merged into the original repository.

 Same but in local repository:
 git remote add upstream <original-repo-url>: adds the original repository as a remote named "upstream".
 - origin     https://github.com/tu-usuario/tu-repo.git (fetch)
 - origin     https://github.com/tu-usuario/tu-repo.git (push)
 - upstream   https://github.com/otro/repo.git (fetch)
 - upstream   https://github.com/otro/repo.git (push)
 git fetch upstream: fetches the changes from the original repository.
 git checkout main: switches to the main branch.
 git merge upstream/main: merges the changes from the original repository's main branch into your local main branch.
 git push origin main: pushes the updated main branch to your forked repository on GitHub.
 */