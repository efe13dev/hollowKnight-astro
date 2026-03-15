export function initHeaderInteractions(): void {
  const menuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");
  const navMenu = document.querySelector<HTMLElement>(".nav-menu");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-menu a");
  const clothImage = document.getElementById("cloth-image");
  const header = document.querySelector<HTMLElement>(".header");

  let lastScroll = 0;

  const toggleMobileMenu = (): void => {
    if (!menuBtn || !navMenu) return;

    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    navMenu.style.right = navMenu.classList.contains("active") ? "0" : "-100%";
  };

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", toggleMobileMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu?.classList.contains("active")) {
        toggleMobileMenu();
      }
    });
  });

  if (clothImage) {
    clothImage.addEventListener("click", () => {
      clothImage.classList.add("jump-animation");
      clothImage.addEventListener(
        "animationend",
        () => clothImage.classList.remove("jump-animation"),
        { once: true },
      );
    });
  }

  if (!header) return;

  window.addEventListener(
    "scroll",
    () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.classList.remove("scroll-up");
        return;
      }

      if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        header.classList.contains("scroll-down")
      ) {
        header.classList.remove("scroll-down");
        header.classList.add("scroll-up");
      }

      if (currentScroll > 50) {
        header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
        header.style.background = "rgba(10, 10, 20, 0.95)";
      } else {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
        header.style.background = "rgba(10, 10, 20, 0.9)";
      }

      lastScroll = currentScroll;
    },
    { passive: true },
  );
}
