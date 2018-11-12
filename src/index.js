

import Vue from 'vue';
import app from './tpl/index.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
	el: '#app',
	render: function (h) {
		return h(app)
	}
})

module.hot.accept();
