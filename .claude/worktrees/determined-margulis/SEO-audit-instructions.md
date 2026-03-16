# SEO Setup Instructions for Marketing Assistant
*Banyan Global Learning — New Website Launch Prep*

---

## 1. Add the New Site to Ahrefs

1. Log into Ahrefs at [ahrefs.com](https://ahrefs.com)
2. Go to **Site Audit** in the top navigation
3. Click **+ New Project**
4. Enter the new site URL (the Vercel preview URL, or `banyangloballearning.com` once DNS is switched)
5. Keep the old WordPress site as a separate project — don't replace it yet

---

## 2. Run a Site Audit on the New Site

Once the project is created, click **Start Audit**. Default settings are fine.

**What to look for when the audit is done:**

| Issue | Why it matters |
|---|---|
| Missing meta descriptions | Google uses these in search results |
| Missing OG image (social image) | See Task 3 below — this is expected for now |
| Broken links (4xx errors) | Any links pointing to pages that don't exist |
| Redirect chains | Old blog URLs should redirect cleanly to new `/blog/slug` URLs |
| Missing H1 tags | Every page should have exactly one H1 |
| Slow page load | Flag any pages with slow load time for Travis |

---

## 3. Create the Social Share Image (OG Image)

**Travis will design this** — he just needs to drop the file in the right place.

- **File name:** `og-blog-default.jpg`
- **Size:** 1200 × 630 pixels (standard social share size)
- **Content:** Banyan logo on a dark blue background works great
- **Where to save it:** Inside the `banyan-website/public/` folder on Travis's computer

Once the file is saved there, Travis will uncomment two lines in the code (he knows how to do this) and the OG image will automatically appear on every blog post and on the blog index page when links are shared on LinkedIn, Facebook, X, etc.

**How to check it's working:** After the site deploys, paste any blog post URL into the [OpenGraph.xyz preview tool](https://www.opengraph.xyz) — you'll see exactly what the social card looks like.

---

## 4. Compare Old Site vs. New Site Meta Data

This is the highest-value SEO task before DNS cutover.

1. In Ahrefs, go to **Site Explorer** → enter `banyangloballearning.com` (old WordPress site)
2. Go to **Pages → Best by Links** — export the top 20–30 pages by backlinks
3. For each of those pages, check:
   - Does the new site have an equivalent page?
   - Do the **title tags** and **meta descriptions** match or improve on the old ones?

The new site already has title tags and meta descriptions on all pages. If you want to update any of them, let Travis know the page and the suggested copy.

---

## 5. Blog Posts — Check Redirect Health

All 102 old WordPress blog posts have 301 redirects built in, mapping:

```
Old URL:  banyangloballearning.com/2025/11/20/ai-in-the-classroom/
New URL:  banyangloballearning.com/blog/ai-in-the-classroom/
```

**To verify these are working after DNS cutover:**

1. In Ahrefs **Site Explorer**, pull up the old site
2. Go to **Pages → Top Pages** and spot-check 5–10 blog post URLs
3. Paste each old URL into your browser — it should redirect automatically to the `/blog/slug` version
4. If any redirect goes to a 404 instead, note the URL and tell Travis

---

## 6. Things to Flag for Travis

Please note anything in Ahrefs that shows:
- Pages returning **404 errors** that should exist
- Any pages with **duplicate title tags** (two pages with the same title)
- The **OG image warning** — this will clear once Travis adds the image file (Task 3)
- Any **Core Web Vitals** issues under Site Audit → Performance

---

*Questions? Reach out to Travis — he's working with a developer on the technical side.*
