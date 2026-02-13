export function initHeroInteractions(): void {
  const heroImage = document.getElementById("hero-knight-image");
  if (!heroImage) return;

  heroImage.addEventListener("click", () => {
    heroImage.classList.add("jump-animation");
    window.setTimeout(() => {
      heroImage.classList.remove("jump-animation");
    }, 500);
  });
}
