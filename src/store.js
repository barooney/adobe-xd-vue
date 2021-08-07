import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

const application = require('application')
const scenegraph = require('scenegraph')

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {},
	mutations: {},
	getters: {},
});

if (scenegraph.root.pluginData) {
	store.replaceState(scenegraph.root.pluginData)
}

store.subscribe(async (mutation, state) => {
	await application.editDocument((selection, root) => {
		scenegraph.root.pluginData = state
	})
})

export default store