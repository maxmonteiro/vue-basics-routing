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
    { path: '/users/:id', component: Users }
]

// creating router object with the routes to use in the vue application
const router = new VueRouter({
    routes,
    mode: 'history' // remove the # from the url
})

// adding the router to the vue instance
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

/* new Vue({
    render: h => h(App),
}).$mount('#app') */