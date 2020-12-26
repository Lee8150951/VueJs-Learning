import Vue from 'vue'

// 通过app.js抽离vue文件至其他文件夹
import App from './vue/App.vue'

new Vue({
    el: '#app',
    template: `<App/>`,
    components: {
        App
    }
})