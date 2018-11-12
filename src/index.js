
//var Vue = require('vue').default;

import Vue from 'vue';
import app from './tpl/index.vue'

new Vue({
	el: '#app',
	render: function (h) {
		return h(app)
	}
})


module.hot.accept();
