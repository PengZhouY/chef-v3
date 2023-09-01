import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
// 引入svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 引入px转vw插件
import pxtovw from 'postcss-px-to-viewport'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    }),
    // 注册svg插件
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  css: {
    postcss: {
      plugins: [pxtovw({ viewportWidth: 375 })]
    },
    // less全局变量
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/assets/styles/variable.less";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  // 解决在dist中点击index.html空白以及真机调试空白问题
  base: './'
})
