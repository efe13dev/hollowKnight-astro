function selectCharacter(card: HTMLElement, characterName: string): void {
  document.querySelectorAll<HTMLElement>(".character-card").forEach((c) => {
    c.style.boxShadow = "none";
    const badge = c.querySelector<HTMLElement>(".selected-badge");
    if (badge) badge.style.opacity = "0";
  });

  card.style.boxShadow =
    "0 0 0 2px var(--accent-color), 0 0 20px rgba(155,109,255,0.3)";

  const badge = card.querySelector<HTMLElement>(".selected-badge");
  if (badge) badge.style.opacity = "1";

  const display = document.getElementById("selected-character");
  const nameSpan = document.getElementById("character-name");

  if (nameSpan) nameSpan.textContent = characterName;

  if (display) {
    display.style.opacity = "1";
    display.style.pointerEvents = "auto";
  }

  const effects = window.HKEffects;
  if (effects) {
    const rect = card.getBoundingClientRect();
    effects.celebrate(rect.left + rect.width / 2, rect.top + rect.height / 2, 10);
  }
}

function initCharacterSelection(): void {
  document.querySelectorAll<HTMLElement>(".character-card").forEach((card) => {
    card.addEventListener("click", () => {
      const characterName = card.dataset.characterName;
      if (!characterName) return;

      selectCharacter(card, characterName);
    });
  });
}

function initCharacterFilter(): void {
  const filterBtns = document.querySelectorAll<HTMLElement>(".filter-btn");
  const characterCards = document.querySelectorAll<HTMLElement>(".character-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      if (!filter) return;

      filterBtns.forEach((button) => {
        button.style.background = "transparent";
        button.style.color = "rgba(255,255,255,0.7)";
        button.style.boxShadow = "none";
        button.style.borderColor = "rgba(255,255,255,0.15)";
      });

      btn.style.background = "var(--accent-color)";
      btn.style.color = "white";
      btn.style.boxShadow = "0 2px 15px rgba(155,109,255,0.3)";
      btn.style.borderColor = "var(--accent-color)";

      characterCards.forEach((card) => {
        const kind = card.dataset.character;
        const matches =
          filter === "all" ||
          kind === filter ||
          (filter === "heroes" && kind === "hero") ||
          (filter === "allies" && kind === "ally") ||
          (filter === "enemies" && kind === "enemy");

        if (matches) {
          card.style.display = "block";
          window.setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          window.setTimeout(() => {
            card.style.display = "none";
          }, 350);
        }
      });
    });
  });
}

export function initCharactersInteractions(): void {
  initCharacterSelection();
  initCharacterFilter();
}
