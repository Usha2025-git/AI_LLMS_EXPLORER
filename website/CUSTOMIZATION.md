# Website Customization Guide

## Quick Setup - Update Your Information

All your personal information is stored in **`config/site.ts`**. Simply edit this file with your details:

### Step 1: Update Your Name and Author Information

```typescript
author: {
  name: "Your Full Name",        // Change to your name
  nameShort: "Your Name",        // Short version
  contributors: 1,                // Number of contributors
},
```

### Step 2: Update Social Media Links

```typescript
social: {
  twitter: "https://twitter.com/yourusername",     // Your Twitter
  linkedin: "https://www.linkedin.com/in/yourusername",  // Your LinkedIn
  github: "https://github.com/yourusername",       // Your GitHub profile
  githubRepo: "https://github.com/yourusername/awesome-llm-apps",  // Your repo
  rss: "/rss.xml",
},
```

### Step 3: Update Sponsorship Information

```typescript
sponsors: {
  githubSponsors: "https://github.com/sponsors/yourusername",  // Your GitHub Sponsors
  email: "sponsor@yourdomain.com",  // Your sponsorship email
},
```

### Step 4: Update Site Information (Optional)

```typescript
site: {
  name: "Awesome LLM Apps",  // Site name (appears in logo/nav)
  title: "AI Agents | RAG | LLMs",  // Main hero title
  subtitle: "Open-source Ecosystem for High-Leverage AI Builders",  // Subtitle
  description: "Open-source Ecosystem for High-Leverage AI Builders",  // Meta description
  url: "https://yourwebsite.com",  // Your website URL
},
```

## After Updating

1. Save the `config/site.ts` file
2. The website will automatically reload (if running with `npm run dev`)
3. All components will use your updated information!

## What Gets Updated Automatically

Once you update `config/site.ts`, these components automatically use your information:
- ✅ Author name and contributor count
- ✅ Social media links (Twitter, LinkedIn, GitHub)
- ✅ Navigation links
- ✅ Footer information
- ✅ Sponsor page
- ✅ Meta tags and SEO information

## Example

**Before:**
```typescript
author: {
  name: "Your Name",
}
```

**After:**
```typescript
author: {
  name: "John Doe",
}
```

That's it! The website will now display "John Doe" everywhere instead of "Your Name".

## Need Help?

If you need to customize more than what's in the config file, you can directly edit:
- `components/` - For UI changes
- `app/page.tsx` - For homepage layout
- `app/about/page.tsx` - For About page content
- `app/sponsor/page.tsx` - For Sponsor page content
