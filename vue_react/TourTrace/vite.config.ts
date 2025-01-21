import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 预先加载UI 组件库
import Components from 'unplugin-vue-components/vite'
// 引入vant 组件 
import { VantResolver} from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        VantResolver()
      ]
    })
  ],
})