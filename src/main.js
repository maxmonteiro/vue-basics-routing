import Vue from 'vue'
// importing vue router
import VueRouter from 'vue-router'
import App from './App.vue'
// importing components to use in routes
import Home from './components/Home.vue'
import Users from './components/Users.vue'

Vue.config.productionTip = false

// registering vue router to make it enabled
Vue.use(VueRouter)

// list of routes
const routes = [
    { path: '/', component: Home },
    { path: '/users', component: Users }
]


new Vue({
    render: h => h(App),
}).$mount('#app')