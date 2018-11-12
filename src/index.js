
//var Vue = require('vue').default;

import Vue from 'vue/dist/vue.common.js'
import app from './tpl/index.vue'


new Vue({
	el: '#app',
	render: function (h) {
		return h(vueIndex)
	}
})


module.hot.accept();
