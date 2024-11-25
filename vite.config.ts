import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,

} from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: 'src/auto-import.d.ts' // 路径下自动生成文件夹存放全局指令
        }),
        Components({
                dts: 'src/components.d.ts', // 路径下自动生成文件夹存放全局指令
           // 注意:按需引入，无法引入一些非组件模块，如：message,modal等，需要自定义手动导（src/plugin/antDesign）
            resolvers: [AntDesignVueResolver({
              importStyle: false ,//不单独导入样式，对样式进行全局引入
               resolveIcons: true
            })]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 3000,
    }
});
