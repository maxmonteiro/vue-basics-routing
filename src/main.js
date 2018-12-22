import Vue from 'vue'
// importing vue router
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

// registering vue router to make it enabled
Vue.use(VueRouter)

new Vue({
    render: h => h(App),
}).$mount('#app')