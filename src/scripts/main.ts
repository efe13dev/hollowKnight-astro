import { initCharactersInteractions } from "./characters.js";
import { initVisualEffects } from "./effects.js";
import { initFooter } from "./footer.js";
import { initHeaderInteractions } from "./header.js";
import { initHeroInteractions } from "./hero.js";
import { initAnchorNavigation } from "./navigation.js";
import { initStoryInteractions } from "./story.js";

export function initApp(): void {
  const boot = (): void => {
    initAnchorNavigation();
    initVisualEffects();
    initHeaderInteractions();
    initHeroInteractions();
    initStoryInteractions();
    initCharactersInteractions();
    initFooter();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
    return;
  }

  boot();
}
