type EffectsApi = {
  createParticle: (x: number, y: number) => void;
  celebrate: (x: number, y: number, count?: number) => void;
};

declare global {
  interface Window {
    HKEffects?: EffectsApi;
  }
}

function isReducedMotionEnabled(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hidePreloader(): void {
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    preloader.style.opacity = "0";
    window.setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  });
}

function initRevealObserver(): void {
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right",
  );

  if (isReducedMotionEnabled()) {
    animatedElements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  animatedElements.forEach((el) => observer.observe(el));
}

function initBackToTop(): void {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener(
    "scroll",
    () => {
      const isVisible = window.scrollY > 300;
      backToTopBtn.style.opacity = isVisible ? "1" : "0";
      backToTopBtn.style.pointerEvents = isVisible ? "auto" : "none";
    },
    { passive: true },
  );

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function createParticle(x: number, y: number): void {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.width = `${Math.random() * 6 + 2}px`;
  particle.style.height = particle.style.width;
  particle.style.background = `rgba(138, 43, 226, ${Math.random() * 0.8 + 0.2})`;
  particle.style.borderRadius = "50%";
  particle.style.filter = "blur(1px)";

  document.body.appendChild(particle);

  window.setTimeout(() => particle.classList.add("active"), 10);
  window.setTimeout(() => particle.remove(), 4000);
}

function initParticleTrail(): void {
  if (isReducedMotionEnabled()) return;

  let particleTimer = 0;

  document.addEventListener(
    "mousemove",
    (e) => {
      window.clearTimeout(particleTimer);
      particleTimer = window.setTimeout(() => {
        if (Math.random() > 0.92) {
          createParticle(e.clientX, e.clientY);
        }
      }, 70);
    },
    { passive: true },
  );
}

function initParallax(): void {
  if (isReducedMotionEnabled()) return;

  let mouseX = 0;
  let mouseY = 0;
  let rafId = 0;

  const updateParallax = () => {
    rafId = 0;
    const parallaxElements = document.querySelectorAll<HTMLElement>(".parallax");

    parallaxElements.forEach((el) => {
      const speed = Number(el.dataset.speed ?? "0.5");
      const x = mouseX * speed * 50;
      const y = mouseY * speed * 50;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  document.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;

      if (!rafId) {
        rafId = window.requestAnimationFrame(updateParallax);
      }
    },
    { passive: true },
  );
}

export function initVisualEffects(): void {
  hidePreloader();
  initRevealObserver();
  initBackToTop();

  // Diferimos efectos no críticos para favorecer el render inicial del hero.
  window.setTimeout(() => {
    initParticleTrail();
    initParallax();
  }, 900);

  window.HKEffects = {
    createParticle,
    celebrate: (x: number, y: number, count = 10) => {
      for (let i = 0; i < count; i += 1) {
        window.setTimeout(() => createParticle(x, y), i * 45);
      }
    },
  };
}
