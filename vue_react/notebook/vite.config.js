// 从 vite 包中导入 defineConfig 函数
import { defineConfig } from 'vite';
// 导入 react 插件
import react from '@vitejs/plugin-react';
// 导入 createStyleImportPlugin 插件
import { createStyleImportPlugin } from 'vite-plugin-style-import';
// 导入 path 模块
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'zarm',
          esModule: true,
          resolveStyle: (name) => `zarm/es/${name}/style/css`,
        },
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: 'dashesOnly',
    },
    preprocessorOptions: {
      // 针对 Less 预处理器的配置
      less: {
        // 允许在 Less 文件中使用内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      // 项目的物理路径
      '@': path.resolve(__dirname, 'src'),
      'utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
