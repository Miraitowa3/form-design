import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vite.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                // module: true,
            }
        }
    },
    plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
        AutoImport({
            imports: ['vue', 'vue-router'],
        }),
        // Components({
        //     include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/], // 自动引入组件的文件
        //     resolvers: [
        //         AntDesignVueResolver({
        //             importStyle: false, //不单独导入样式，对样式进行全局引入
        //             resolveIcons: true
        //         })
        //     ]
        // })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 3000
    }
});
