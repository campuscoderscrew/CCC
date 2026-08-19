import fs from "fs";

fs.copyFileSync("dist/index.html", "dist/404.html");
console.log("Wrote dist/404.html (SPA fallback).");
