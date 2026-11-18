// If a game's image file is missing or fails to load, hide the broken image
// so the placeholder frame behind it shows instead.
document.querySelectorAll('.thumb img').forEach(function (img) {
  function showPlaceholder() {
    img.closest('.thumb').classList.add('no-image');
  }

  // Covers images that already failed before this script ran
  if (img.complete && img.naturalWidth === 0) {
    showPlaceholder();
  }

  img.addEventListener('error', showPlaceholder);
});