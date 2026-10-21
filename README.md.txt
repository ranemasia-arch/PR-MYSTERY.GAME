# PR Mystery Game

A responsive, static mystery-game landing page designed for GitHub Pages.

## Files

- `index.html` — page content and video source
- `style.css` — dark cinematic responsive design
- `script.js` — small interaction for the Raneem name
- `assets/` — place your own video files here

## Replace the main video

1. Copy your video into `assets/` and name it `main-video.mp4`.
2. In `index.html`, replace the sample `<source>` URL with:
   ```html
   <source src="assets/main-video.mp4" type="video/mp4">
   ```

## Hidden video-download clue

Near the bottom of `index.html`, find the `HIDDEN GAME CLUE — VIDEO DOWNLOAD` HTML comment and replace `https://example.com/second-video.mp4` with the direct download URL for the second video. HTML comments are not displayed on the page but are visible in View Page Source / Inspect.

## Link on Raneem

Currently the name is styled as a link but does not navigate anywhere. When you decide what should happen on click, replace `href="#"` on `#raneem-link` in `index.html` with the intended URL, or update `script.js` for a different in-game action.

## Run locally

Open `index.html` in a browser. For a local development server, you can use the VS Code Live Server extension.

## Publish with GitHub Pages

1. Create a GitHub repository and upload the contents of this folder.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`, then save.
5. Wait for GitHub Pages to publish the site and open the URL it provides.

## Note

This is a static website. Any URL placed in the HTML comment is public to anyone who can view the source; do not use it for confidential files.
