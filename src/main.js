import Vue from "vue"
import VueRouter from "vue-router"
import Vuex from 'vuex'
import App from "./App.vue"
import router from './router'
import store from './store'

Vue.config.devtools = false
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

let panel;
let instance;
function create(event) {
    if (panel == null) {
        document.body.innerHTML = `<div id="app"></div>`
        panel = document.querySelector('#app')
        instance = new Vue({
            el: panel,
            router,
            store,
            components: { App },
            render(h) {
                return h(App)
            }
        })
    }
    return panel
}

function hide(event) {
}

function show(event) {
    if (!panel) {
        create()
    }
}

function update(event, root) {
    if (!panel) {
        create()
    }
}

export const panels = {
    mainPanel: { show, hide, update }
}