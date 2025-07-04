import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read environment variables for minification and suffix
const isMinify = process.env.MINIFY === 'true';
const cssSuffix = process.env.CSS_SUFFIX || '';

export default defineConfig({
  build: {
    minify: isMinify,
    rollupOptions: {
      input: {
        'ebok': resolve(__dirname, 'src/scss/ebok.scss'),
        'epub': resolve(__dirname, 'src/scss/epub.scss'),
        'html': resolve(__dirname, 'src/scss/html.scss'),
        'ncc': resolve(__dirname, 'src/scss/ncc.scss'),
        'nettleserbok': resolve(__dirname, 'src/scss/nettleserbok.scss'),
        'docs': resolve(__dirname, 'src/scss/docs.scss')
      },
      output: {
        assetFileNames: ({ name = '' }) => {
          if (name.endsWith('.css')) {
            return `css/[name]${cssSuffix}.css`;
          }
          return 'js/[name].[ext]';
        },
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js'
      }
    },
    sourcemap: true,
    emptyOutDir: !process.env.NO_CLEAN // Only clean on first build
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        autoprefixer(),
        ...(isMinify ? [cssnano({ preset: 'default' })] : [])
      ]
    }
  },
  plugins: [
    {
      name: 'copy-js',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'js/rb_smil_emulator.js',
          source: fs.readFileSync('src/js/rb_smil_emulator.js', 'utf-8')
        });
      }
    },
    {
      name: 'copy-docs-css',
      generateBundle(options, bundle) {
        // Find the docs CSS file in the bundle
        const docsCssFile = Object.values(bundle).find(
          (file) => file.type === 'asset' && file.fileName && file.fileName.includes('docs.css')
        );
        
        if (docsCssFile) {
          // Create the docs/assets/css directory if it doesn't exist
          const docsCssDir = 'docs/assets/css';
          if (!fs.existsSync(docsCssDir)) {
            fs.mkdirSync(docsCssDir, { recursive: true });
          }
          
          // Write the docs CSS to the correct location
          const outputPath = `${docsCssDir}/styles${cssSuffix}.css`;
          fs.writeFileSync(outputPath, docsCssFile.source);
          
          // Also write the source map if it exists
          if (docsCssFile.sourcemap) {
            fs.writeFileSync(`${outputPath}.map`, JSON.stringify(docsCssFile.sourcemap));
          }
          
          console.log(`✓ Docs CSS compiled to: ${outputPath}`);
        }
      }
    }
  ]
}); 