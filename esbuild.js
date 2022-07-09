const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: [
      "src/background.js",
      "src/inject.js"
    ],
    bundle: true,
    minify: false,
    target: ["chrome102", "firefox102"],
    outdir: "build"
  })
  .catch(() => process.exit(1));