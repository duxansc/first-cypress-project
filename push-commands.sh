# Verify current branch and remotes
git branch --show-current
git remote -v

# Add remote if it doesn't exist (or change URL if needed)
git remote add origin https://github.com/duxank/first-cypress-automation-project.git
# OR update existing origin
git remote set-url origin https://github.com/duxank/first-cypress-automation-project.git

# Authenticate:
# Recommended: use GitHub CLI (interactive login)
gh auth login
# OR ensure your Git credential manager is configured / use a PAT via gh auth or OS credential manager

# Push current branch and set upstream (safe)
git push -u origin HEAD

# If you specifically want to push 'main'
# git push -u origin main

# If the remote has unrelated history and you intend to overwrite (DANGER: overwrites remote)
# git push -u --force origin HEAD

# Verify remote branch list
git fetch origin
git branch -r
