const esbuild = require('esbuild');
const envFilePlugin = require('esbuild-envfile-plugin');

async function buildAndRun() {

  let ctx = await esbuild.context({
    bundle: true,
    logLevel: "info",
    entryPoints: ["src/index.tsx"],
    outfile: "www/index.js",
    loader: { '.js': 'jsx' },
    plugins: [envFilePlugin]
  })

  await ctx.watch()

  await ctx.serve({
    fallback: "www/index.html",
    servedir: 'www',
  });
}

buildAndRun();

// TODO tsc --noEmit in parallel