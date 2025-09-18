# 🏰 Hollow Knight - Hallownest Explorer (Astro)

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)

Bienvenido a **Hallownest Explorer**, una web estática construida con **Astro**, estilada con **Tailwind CSS** y tipada con **TypeScript**. Este proyecto es un tributo al universo de Hollow Knight con un enfoque en rendimiento, accesibilidad y una estética fiel al juego.

![Captura de pantalla](public/img/67ed144aba13e.webp)

## 🌟 Características

- **SSR/SSG con Astro**: Renderizado ultrarrápido y HTML mínimo por defecto.
- **Tailwind moderno**: Utilidades, variables CSS y estilos arbitrarios para un diseño preciso.
- **Componentización**: UI modular con componentes `.astro` reutilizables.
- **Interactividad progresiva**: JS solo donde hace falta (scripts `is:inline` y eventos del DOM).
- **Accesibilidad y rendimiento**: Buenas prácticas desde el diseño.

## 🧱 Stack

- `Astro`
- `Tailwind CSS`
- `TypeScript`
- `Bun` (gestor de paquetes y runtime)
- `Biome` (linter/formatter)

## 📁 Estructura del proyecto

```
hollowKnight-astro/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── public/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── biome.json
```

## 🚀 Empezar

### Requisitos

- Bun instalado: https://bun.sh

### Instalación

```bash
bun install
```

### Desarrollo

```bash
bun run dev
```

Esto ejecuta `astro dev` con recarga en caliente.

### Build de producción

```bash
bun run build
```

Genera la carpeta `dist/` usando `astro build`.

### Previsualización local

```bash
bun run preview
```

Sirve el build con `astro preview`.

## 🧩 Scripts útiles (package.json)

- `dev`: arranca el servidor de desarrollo.
- `build`: crea el build de producción.
- `preview`: sirve el build localmente.

## 🧭 Convenciones de desarrollo

- **Estilos**: Tailwind como base. Utilidades arbitrarias con `[]` cuando sea necesario.
- **Calidad de código**: Biome para formateo y lint.
- **Tipado**: TypeScript en modo estricto.
- **Rutas**: File-based routing bajo `src/pages/`.

## 🤝 Contribuir

1. Haz fork.
2. Crea una rama: `git checkout -b feat/nueva-feature`.
3. Commit: `git commit -m "feat: añade nueva feature"`.
4. Push: `git push origin feat/nueva-feature`.
5. Abre un PR.

## 📄 Licencia

MIT. Mira `LICENSE`.

## 🙏 Créditos

- Team Cherry por Hollow Knight.

---

<div align="center">
  Hecho con ❤️ con Astro, Tailwind y Bun
</div>
