export function basic11Git() {
    console.log('This is a basic11 git');
}

/*
 * git clone git@github.com:kronstadt-lambda/l4b-git-github.git: clones the repository to the current directory.
 * git remote -v: shows the remote repository.
 * git remote remove: removes the remote repository settings.
 */

// Implementation of basic11Git with Sonnet model.
export function basic11GitWithSonnet() {
    console.log('This is a basic11 git');

    // Example git clone output
    console.log('$ git clone git@github.com:kronstadt-lambda/l4b-git-github.git');
    console.log('Cloning into \'l4b-git-github\'...');
    console.log('remote: Counting objects: 100, done.');
    console.log('remote: Compressing objects: 100% (80/80), done.');
    console.log('Receiving objects: 100% (100/100), 10.5 KiB | 5.2 MiB/s, done.');

    // Example git remote -v output
    console.log('\n$ git remote -v');
    console.log('origin  git@github.com:kronstadt-lambda/l4b-git-github.git (fetch)');
    console.log('origin  git@github.com:kronstadt-lambda/l4b-git-github.git (push)');

    // Example git remote remove output
    console.log('\n$ git remote remove origin');
    console.log('$ git remote -v');
    console.log(''); // Shows empty output after removal

    // Example git diff output
    console.log('\n$ git diff main');
    console.log('diff --git a/file.js b/file.js');
    console.log('index 1234567..89abcde 100644');
    console.log('--- a/file.js');
    console.log('+++ b/file.js');
    console.log('@@ -1,3 +1,4 @@');
    console.log(' const existing = true;');
    console.log('-const oldCode = false;');
    console.log('+const newCode = true;');

    // Example git merge output
    console.log('\n$ git merge feature-branch');
    console.log('Updating abc1234..def5678');
    console.log('Fast-forward');
    console.log(' src/file.js | 2 +-');
    console.log(' 1 file changed, 1 insertion(+), 1 deletion(-)');
}

basic11GitWithSonnet();