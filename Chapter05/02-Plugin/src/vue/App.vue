<template>
    <div class="test">
        <h2>使用命令npm install vue --save下载vue</h2>
        <h3>注意在webpack使用vue时修改webpack.config.js</h3>
        <h3>{{message}}</h3>
        <h3>在index.html文件中，一般不进行修改只保留div id="app"标签即可</h3>
        <button @click="btnClick">Click Here</button>
        <h3>在直接使用.vue文件时应该配置对应的loader，命令：</h3>
        <h4>npm install vue-loader vue-template-compiler --save-dev</h4>
        <!-- 使用子组件 -->
        <Tempo/>
    </div>
</template>

<script>
// 导入组件2
import Tempo from "./Tempo.vue";
export default {
    name: "App",
    // 注册组件
    components: {
        Tempo
    },
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
    methods: {
        btnClick() {
            alert("Hello Vue!")
        }
    }
}
</script>

<style scoped>
.test {
    color: red;
}
</style>