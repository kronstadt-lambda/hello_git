export function helloGit() { return "Hello Git!" };
console.log(helloGit());

/*
 * Commands:
 * git --config --global user.name: shows the name of the user.
 * git --config --global user.email: shows the email of the user.
 * git config --local user.name "Tu Nombre de Trabajo": change the name of the user for local projects.
 * git config --local user.email "trabajo@empresa.com": change the email of the user for local projects.
 * git init: creates a new git repository.
 * git branch -m <name>: changes the name of the current branch. It can be named like master, main, dev, trunk.
 * git status: shows the status of the repository.
 * git add <file>: adds a specific file to the staging area.
 * git add .: adds all files in the current directory to the staging area.
 * git commit -m "<message>": commits the staged files with the message.
 * git log: shows the log of the repository (for exit press 'q').
 * git log -n 5: Shows the last 5 commits.
 */