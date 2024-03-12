import StarrySky from "https://cdn.skypack.dev/-/@manufosela/starry-sky@v1.0.1-Z39gLXiSSVXgBKtMkc7f/dist=es2019,mode=imports/optimized/@manufosela/starry-sky.js";

import AnimationShootingstar from "https://cdn.skypack.dev/-/animation-shootingstar@v1.0.0-hU2c9voIq5xsQqc7MG1q/dist=es2019,mode=imports/optimized/animation-shootingstar.js";

import ConstellationSky from "https://cdn.skypack.dev/-/constellation-sky@v1.1.0-k66P3Bmv5rdtBbQmIh7e/dist=es2019,mode=imports/optimized/constellation-sky.js";

document.getElementById("togglelinesBtn").addEventListener("click", () => {
  const constellations = document.querySelectorAll("constellation-sky");
  constellations.forEach((constellation) => {
    const value = !constellation.drawLines;
    constellation.drawLines = value;
  });
});