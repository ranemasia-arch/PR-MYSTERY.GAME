// PR Mystery Game — small client-side interactions.

const raneemLink = document.querySelector("#raneem-link");

// Keep the name as a normal clickable link for now.
// When you have the intended destination, replace "#" in index.html with that URL.
// The hidden video-download clue belongs in the HTML comment in index.html.
raneemLink?.addEventListener("click", (event) => {
  event.preventDefault();
  // Intentionally no action until the game link/destination is decided.
});
