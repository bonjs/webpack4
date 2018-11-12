<template>
	<div>
	<h2>
		{{title}}
		<el-button @click="click">test</el-button>
	</h2>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				title: 'this is a'
			}
		},
		methods: {
			click() {
				alert('click')
			}
		}
	}
</script>
<style scoped>
</style>

