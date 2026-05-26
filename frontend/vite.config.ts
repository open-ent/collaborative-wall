/// <reference types="vitest/config" />
import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import {
  hashEdificeBootstrap,
  queryHashVersion,
} from './plugins/vite-plugin-edifice';

export default ({ mode }: { mode: string }) => {
  // Checking environement files
  const envFile = loadEnv(mode, process.cwd());
  const envs = { ...process.env, ...envFile };
  const hasEnvFile = Object.keys(envFile).length;

  // Proxy variables
  const headers = hasEnvFile
    ? {
        'set-cookie': [
          `oneSessionId=${envs.VITE_ONE_SESSION_ID}`,
          `XSRF-TOKEN=${envs.VITE_XSRF_TOKEN}`,
        ],
        'Cache-Control': 'public, max-age=300',
      }
    : {};

  const proxyObj = hasEnvFile
    ? {
        target: envs.VITE_RECETTE,
        changeOrigin: true,
        headers: {
          cookie: `oneSessionId=${envs.VITE_ONE_SESSION_ID};authenticated=true; XSRF-TOKEN=${envs.VITE_XSRF_TOKEN}`,
        },
      }
    : {
        target: 'http://localhost:8090',
        changeOrigin: false,
      };

  /* Replace "/" the name of your application (e.g : blog | mindmap | collaborativewall) */
  return defineConfig({
    base: mode === 'production' ? '/collaborativewall' : '',
    root: __dirname,
    cacheDir: './node_modules/.vite/collaborativewall',

    resolve: {
      alias: {
        '@images': resolve(
          __dirname,
          'node_modules/@edifice.io/bootstrap/dist/images',
        ),
        // Force single instance per singleton — prevents pnpm symlink duplication
        // from creating separate module contexts (same issue as React singletons)
        '@tanstack/react-query': resolve(
          __dirname,
          'node_modules/@tanstack/react-query',
        ),
        '@tanstack/react-query-devtools': resolve(
          __dirname,
          'node_modules/@tanstack/react-query-devtools',
        ),
      },
    },

    server: {
      fs: {
        /**
         * Allow the server to access the node_modules folder (for the images)
         * This is a solution to allow the server to access the images and fonts of the bootstrap package for 1D theme
         */
        allow: ['../../'],
      },
      proxy: {
        '/applications-list': proxyObj,
        '/conf/public': proxyObj,
        '^/(?=help-1d|help-2d)': proxyObj,
        '^/(?=assets)': proxyObj,
        '^/(?=theme|locale|i18n|skin)': proxyObj,
        '^/(?=auth|appregistry|archive|cas|userbook|directory|communication|conversation|portal|session|timeline|workspace|infra)':
          proxyObj,
        '/xiti': proxyObj,
        '/analyticsConf': proxyObj,
        '/explorer': proxyObj,
        '/collaborativewall': proxyObj,
      },
      port: 4200,
      headers,
      host: 'localhost',
    },

    preview: {
      port: 4300,
      headers,
      host: 'localhost',
    },

    plugins: [
      federation({
        name: 'collaborativewall',
        filename: 'public/remoteEntry.js',
        exposes: {
          './mount': './src/mount.ts',
        },
        shared: {},
      }),
      react(),
      tsconfigPaths(),
      hashEdificeBootstrap({
        hash: queryHashVersion,
      }),
    ],

    build: {
      target: 'esnext',
      outDir: './dist',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      assetsDir: 'public',
      chunkSizeWarningLimit: 5000,
      rollupOptions: {
        output: {
          // inlineDynamicImports removed: Module Federation requires code splitting
        },
      },
    },

    test: {
      watch: false,
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      setupFiles: ['./src/mocks/setup.ts'],
      reporters: ['default'],
      coverage: {
        reportsDirectory: './coverage/collaborativewall',
        provider: 'v8',
      },
      server: {
        deps: {
          inline: ['@edifice.io/react'],
        },
      },
    },
  });
};
