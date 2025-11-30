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

# Sign out from GitHub

# 1) Sign out using GitHub CLI (interactive)
gh auth logout --hostname github.com

# 2) Or sign out non-interactively (useful in scripts)
gh auth logout --hostname github.com --confirm

# 3) Attempt to clear any cached Git credentials (best-effort; may require OS-specific action)
# Try GCM core erase (works if git-credential-manager-core is installed)
printf "protocol=https\nhost=github.com\n" | git credential-manager-core erase || true

# Windows manual option: Open Control Panel -> Credential Manager -> Windows Credentials
# and remove any entries related to git:https://github.com
# macOS manual option: remove GitHub entries from Keychain Access.

# 4) Verify sign-out (will print auth status or an error)
gh auth status || true
