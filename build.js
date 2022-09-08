const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

esbuild.build({
    minify: true,
    minifyWhitespace: true,
    allowOverwrite: true,
    entryPoints: [
        'esbuild/index.js'
    ],
    outdir: 'public/es',
    platform: 'browser',
    bundle: true,
    plugins: [
        sassPlugin()
    ],
    watch: true
});
