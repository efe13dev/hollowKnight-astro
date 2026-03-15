function showSectionTransition(): void {
  const transition = document.getElementById("section-transition");
  if (!transition) return;

  transition.style.opacity = "1";
  transition.style.pointerEvents = "auto";
}

function hideSectionTransition(): void {
  const transition = document.getElementById("section-transition");
  if (!transition) return;

  transition.style.opacity = "0";
  window.setTimeout(() => {
    transition.style.pointerEvents = "none";
  }, 700);
}

function scrollToAnchor(targetId: string): void {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const headerOffset = 60;
  const top = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

export function initAnchorNavigation(): void {
  window.addEventListener("load", () => {
    window.setTimeout(hideSectionTransition, 350);
  });

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest("a[href^='#']") as HTMLAnchorElement | null;

    if (!anchor) return;

    const href = anchor.getAttribute("href") ?? "";
    if (href.length <= 1) return;

    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    event.preventDefault();
    showSectionTransition();

    window.setTimeout(() => {
      scrollToAnchor(targetId);
      hideSectionTransition();
    }, 250);
  });
}
