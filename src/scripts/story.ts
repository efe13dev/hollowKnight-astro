type EraContent = {
  title: string;
  text1first: string;
  text1: string;
  text2first: string;
  text2: string;
  image: string;
};

const eraContent: Record<string, EraContent> = {
  past: {
    title: "El Origen de la Plaga",
    text1first: "H",
    text1:
      "ace mucho tiempo, Hallownest era un próspero reino bajo el sabio gobierno del Rey Pálido y la Reina Herrah. Los insectos vivían en armonía, construyendo ciudades magníficas y desarrollando una cultura rica.",
    text2first: "P",
    text2:
      "ero algo cambió. Una fuerza extraña y corruptora comenzó a extenderse por las profundidades. Los sabios la llamaron 'La Radiancia' — una luz cegadora que prometía unidad pero traía locura.",
    image: "/img/202310192349115_5.webp",
  },
  present: {
    title: "La Caída del Reino",
    text1first: "B",
    text1:
      "ajo el pueblo abandonado de Dirtmouth se extienden las ruinas de Hallownest, un otrora próspero reino de insectos que yace en ruinas tras una misteriosa plaga.",
    text2first: "C",
    text2:
      "omo el Caballero, un misterioso viajero sin nombre, te adentrarás en las profundidades de este reino olvidado. A medida que explores, descubrirás la trágica historia de Hallownest.",
    image: "/img/shadow.png",
  },
  future: {
    title: "La Esperanza de Renacimiento",
    text1first: "A",
    text1:
      " pesar de la corrupción, hay esperanza. Antiguas profecías hablan de un portador de luz que podrá purificar la Radiancia y restaurar el equilibrio.",
    text2first: "E",
    text2:
      "l futuro de Hallownest depende de aquellos valientes que se atreven a desafiar la oscuridad. Con cada enemigo vencido y cada secreto descubierto, el reino se acerca un paso más a la redención.",
    image: "/img/hornet.webp",
  },
};

function updateTimelinePoints(era: string): void {
  document.querySelectorAll<HTMLElement>(".timeline-point").forEach((point) => {
    const pointEra = point.dataset.era;
    const dot = point.querySelector<HTMLElement>("[data-dot]");
    if (!dot) return;

    if (pointEra === era) {
      dot.style.background = "#fff";
      dot.style.boxShadow =
        "0 0 0 4px var(--accent-color), 0 0 20px rgba(138,43,226,0.5)";
      return;
    }

    dot.style.boxShadow = "none";
    dot.style.background =
      pointEra === "present" ? "var(--secondary-color)" : "var(--accent-color)";
  });
}

function renderEraContent(era: string): void {
  const content = eraContent[era];
  const container = document.getElementById("era-content");
  if (!content || !container) return;

  container.style.opacity = "0";
  container.style.transform = "translateY(10px)";

  window.setTimeout(() => {
    container.innerHTML = `
      <div class="story-text text-lg leading-relaxed relative p-10 rounded-xl bg-[rgba(20,20,30,0.6)] shadow-xl border border-white/10 backdrop-blur-sm" style="opacity:1;transform:none;">
        <h3 class="text-2xl font-bold mb-6 font-cinzel" style="color:var(--accent-color);">${content.title}</h3>
        <p class="mb-8 pl-2 text-pretty" style="color:rgba(255,255,255,0.9);">
          <span style="float:left;font-size:3.5rem;font-weight:700;margin-right:0.5rem;margin-top:0.25rem;margin-bottom:-0.1em;background:linear-gradient(135deg,#8a2be2,#00bfff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-family:'Cinzel',serif;position:relative;z-index:10;filter:drop-shadow(0 0 15px rgba(138,43,226,0.7));">${content.text1first}</span>
          ${content.text1}
        </p>
        <p class="pl-2 text-pretty" style="color:rgba(255,255,255,0.9);">
          <span style="float:left;font-size:3.5rem;font-weight:700;margin-right:0.5rem;margin-top:0.25rem;margin-bottom:-0.1em;background:linear-gradient(135deg,#8a2be2,#00bfff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-family:'Cinzel',serif;position:relative;z-index:10;filter:drop-shadow(0 0 15px rgba(138,43,226,0.7));">${content.text2first}</span>
          ${content.text2}
        </p>
      </div>
      <div class="story-image flex justify-center items-center py-8" style="opacity:1;transform:none;">
        <img src="${content.image}" alt="${content.title}" style="width:80%;max-width:32rem;margin:0 auto;filter:drop-shadow(0 10px 20px rgba(0,0,0,0.5));cursor:pointer;transition:all 0.7s ease-in-out;" onmouseover="this.style.filter='drop-shadow(0 0 30px rgba(255,255,255,0.6))'" onmouseout="this.style.filter='drop-shadow(0 10px 20px rgba(0,0,0,0.5))'" />
      </div>
    `;

    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  }, 350);
}

function celebrateFromElement(element: HTMLElement, count = 15): void {
  const effects = window.HKEffects;
  if (!effects) return;

  const rect = element.getBoundingClientRect();
  effects.celebrate(rect.left + rect.width / 2, rect.top + rect.height / 2, count);
}

function openShadowModal(): void {
  const modal = document.getElementById("shadow-modal");
  if (!modal) return;

  modal.classList.add("active", "opacity-100", "pointer-events-auto");
  modal.classList.remove("opacity-0", "pointer-events-none");
}

function closeShadowModal(): void {
  const modal = document.getElementById("shadow-modal");
  if (!modal) return;

  modal.classList.remove("active", "opacity-100", "pointer-events-auto");
  modal.classList.add("opacity-0", "pointer-events-none");
}

export function initStoryInteractions(): void {
  document.querySelectorAll<HTMLElement>(".timeline-point").forEach((point) => {
    point.addEventListener("click", (event) => {
      const era = point.dataset.era;
      if (!era) return;

      updateTimelinePoints(era);
      renderEraContent(era);
      celebrateFromElement(point);
      event.preventDefault();
    });
  });

  window.addEventListener("load", () => {
    window.setTimeout(() => {
      const shadowImg = document.getElementById("shadow-img");
      if (shadowImg) shadowImg.style.opacity = "1";
    }, 4000);
  });

  const shadowImg = document.getElementById("shadow-img");
  const closeBtn = document.getElementById("close-shadow-modal");
  const modal = document.getElementById("shadow-modal");

  shadowImg?.addEventListener("click", openShadowModal);
  closeBtn?.addEventListener("click", closeShadowModal);

  modal?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement | null;
    if (target?.id === "shadow-modal") {
      closeShadowModal();
    }
  });
}
