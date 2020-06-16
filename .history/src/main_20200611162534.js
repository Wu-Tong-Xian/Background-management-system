import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vue-image-crop-upload  上传图片的引用


import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

import VCharts from 'v-charts'//引入v-chart图标库
Vue.use(VCharts)
//     // 引用animented 动画
// import from 'animate.css'
// Vue.use(animated)

// 引入element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')