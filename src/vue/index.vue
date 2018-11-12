
<template>
	<div>
		<top></top>
		{{title}}
	</div>
</template>
<script>
	import top from './top.vue';
	export default {
		data() {
			return {
				title: 'alex'
			}
		},
		components: {
			top
		}
	}
</script>
<style scoped>

</style>

