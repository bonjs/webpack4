
<template>
	<div>
		{{title}}
		<router-link name="a" to="/a">a</router-link>
      	<router-link name="a" to="/b">b</router-link>

		<router-view></router-view>   
	</div>
</template>
<script>

	import Vue from 'vue';
	import VueRouter from 'vue-router' 

	Vue.use(VueRouter);
	
	//import modeA from './modeA.vue';
	//import modeB from './modeB.vue';

	const modeA = r => require.ensure([], () => r(require('./modeA.vue')), 'a')
	const modeB = r => require.ensure([], () => r(require('./modeB.vue')), 'b')
	
	const routes = [
		{ path: '/a', component: modeA },
		{ path: '/b', component: modeB }
	]
	const router = new VueRouter({
		routes,
		mode: 'history'
	})
	export default {
		router,
		data() {
			return {
				title: 'index'
			}
		},
		methods: {
			click() {

			}
		},
		components: {
			modeA,
			modeB
		}
	}
</script>
<style scoped>

</style>

