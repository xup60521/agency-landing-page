# Frontend Mentor Challenge - Sunnyside Agency Landing Page

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef).

## Table of Contents

- [Overview](#overview)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
    - [Setup Project](#setup-project)
    - [SVG Asset](#svg-asset)
    - [GSAP](#gsap)
- [Resources](#resources)

## Overview

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

Links:

- GitHub Repo: https://github.com/xup60521/agency-landing-page
- Website: https://xup60521.github.io/agency-landing-page/

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My Process

### Built With

- Vite
- GSAP
- TailwindCSS

### What I Learned

#### Setup Project

When starting this project, I had a hard time deciding which tech stack to use. Usually, I would choose Vite + React + TypeScript, but this time, I wanted to make some changes.

Mostly because this challenge is to build a static site, so a frontend framework like React felt too overkill. But vanilla HTML lacks some convenient features, such as asset bundling, package management, and TypeScript support.

The most important one is, I still wanted to use TailwindCSS.

Manually setting up these things is horrible.

Luckily, tools like `vite` and `rspack` already have those functionalities built-in. I used `vite` to scaffold the project.

```bash
pnpm create vite@latest project-name --template=vanilla-ts
```

Following the TailwindCSS setup guide, the utility classes worked as expected.

After that, I created `vite.config.ts` to further configure the project.

Changing to a relative import path made it easier to host on GitHub Pages.

```ts
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
})
```

#### SVG Asset

When using vite + react, `vite-plugin-svgr` allows us to directly import SVGs. But since I didn't use a framework, I needed to come up with a new solution to deal with SVG files.

Unfortunately, after some failures, I decided to look into `logo.svg`, copying the `<svg>` component, and straightforwardly pasted it into index.html.

To change the color, adjust the value in the `fill` attribute.

```html
<svg width="124" height="24" xmlns="http://www.w3.org/2000/svg">
    <path
        d="..."
        fill="hsl(167, 40%, 24%)" 
     >
    </path>
</svg>
```

#### GSAP

```ts
import gsap from "gsap";

const menu = document.getElementById("menu");
function toggleMenuOpen() {
    if (!menu) return;
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
      // entrance animation
        gsap.fromTo(
            menu,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    } else {
      // exit animation
        gsap.to(menu, {
            opacity: 0,
            y: -50,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                menu.style.display = "none";
            },
        });
    }
}
```

When the user clicks the button, the menu should show up. When clicking outside the menu anywhere, it should automatically close.

Clicking the menu itself should not trigger `toggleMenuOpen()`.

```ts
// click the button to open menu
document.getElementById("menuButton")?.addEventListener("click", (e) => {
    // stopPropagation() to prevent
    // `toggleMenuOpen` from executing twice
    e.stopPropagation();
    toggleMenuOpen();
});
// click anywhere else to close the menu
window.addEventListener("click", () => {
  // When the menu is open, 
  // click anywhere else to close it.
    if (menu?.style.display === "none" || menu?.style.display === "") return;
    toggleMenuOpen()
})
// However, when clicking the menu,
// it should not close itself.
document
    .getElementById("menu")
    ?.addEventListener("click", (e) => e.stopPropagation());
```

## Resources

- TailwindCSS Docs - https://tailwindcss.com/docs
- Google Fonts - https://fonts.google.com
- GSAP docs - https://gsap.com/docs/v3/