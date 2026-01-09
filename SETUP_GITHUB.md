# Setting Up Your Own GitHub Repository

## Why You're Getting a 404 Error

The repository is currently pointing to the original owner's GitHub:
```
https://github.com/Shubhamsaboo/awesome-llm-apps.git
```

You need to create your own repository and update the remote URL.

## Step-by-Step Instructions

### Step 1: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in:
   - **Repository name**: `awesome-llm-apps` (or your preferred name)
   - **Description**: "Open-source Ecosystem for High-Leverage AI Builders"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 2: Update Your Local Repository Remote

After creating your repository, GitHub will show you commands. Use these:

```bash
# Option A: If you want to keep the original as upstream (for updates)
git remote rename origin upstream
git remote add origin https://github.com/YOUR_USERNAME/awesome-llm-apps.git

# Option B: If you want to completely replace the remote
git remote set-url origin https://github.com/YOUR_USERNAME/awesome-llm-apps.git
```

Replace `YOUR_USERNAME` with your actual GitHub username!

### Step 3: Update the Website Configuration

After creating your repository, update `website/config/site.ts`:

```typescript
social: {
  githubRepo: "https://github.com/YOUR_USERNAME/awesome-llm-apps",
  // ... other links
}
```

### Step 4: Push Your Code

```bash
# Add all files (except .env - that should stay local)
git add .
git commit -m "Initial commit: Add website and customizations"
git push -u origin main
```

## Current Status

- ✅ You have a local repository with all the code
- ✅ Website is created and running
- ✅ CodeRabbit configuration is set up
- ❌ You need to create your own GitHub repository
- ❌ You need to update the remote URL

## Important Notes

**DO NOT commit these files:**
- `.env` files (contains API keys)
- `node_modules/` (dependencies)
- `.next/` (build files)

They should already be in `.gitignore`, but double-check before committing!

## After Setup

Once your repository is created and pushed:
- CodeRabbit will automatically review your PRs
- The website links will work correctly
- You'll have your own repository under your name
