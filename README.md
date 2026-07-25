# Manda the Creative

Marketing site for face painting, glitter tattoos, nails, and hair tinsel.
Photography links out to [VanDammePhotography.com](https://VanDammePhotography.com).

Built as a static site so it can be hosted free on **GitHub Pages**.

## Connect to GitHub Pages

### 1. Create the GitHub repository

1. Go to [https://github.com/new](https://github.com/new)
2. Name it `manda-the-creative` (or similar)
3. Leave it **empty** (no README / .gitignore / license)
4. Click **Create repository**

### 2. Push this project

In Terminal, from this folder:

```bash
git add .
git commit -m "Launch Manda the Creative website"
git remote add origin https://github.com/YOUR_USERNAME/manda-the-creative.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Turn on GitHub Pages

1. Open the repo on GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment → Source**, choose **Deploy from a branch**
4. Branch: **main** · Folder: **/ (root)**
5. Click **Save**

After a minute or two, your site will be live at:

`https://YOUR_USERNAME.github.io/manda-the-creative/`

### 4. (Optional) Custom domain

In **Settings → Pages → Custom domain**, add something like `mandatethecreative.com`, then point your domain’s DNS to GitHub Pages using their instructions.

## Local preview

Open `index.html` in a browser, or from this folder run:

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

## Before you go live

- Update the email address in `script.js` and `index.html` to your real inbox
- Add your own photos when ready (hero / service imagery)
