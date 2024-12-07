import { defineConfig } from "vite";
    export default defineConfig({
      plugins: [
        // Add your plugins here, if any
      ],
      build: {
        outDir: "../dist",
        assetsDir: ".",
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              return `${assetInfo.name}.${assetInfo.extname}`;
            },
          },
        },
      },
    });
