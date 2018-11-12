
<template>
	<div>
		<el-tabs ref="tabs" v-model="$router.name || 'a'" type="card" @tab-click="onTabClick">
			<el-tab-pane label="模板A" name="a"></el-tab-pane>
			<el-tab-pane label="模板B" name="b"></el-tab-pane>
		</el-tabs>

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
		{ path: '/a', alias: '/', component: modeA },
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
				title: 'index',
				options: [
					{name: 'a', route: '/a'},
					{name: 'b', route: '/b'}
				]
			}
		},
		methods: {
			onTabClick() {

				let currentName = this.$refs.tabs.currentName;

				var path = this.options.find(function(it, i) {
					return it.name == currentName;
				}).route;
				console.log(path)

				this.$router.push({path: path});
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

