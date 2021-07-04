                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
<template>
  <div class="col-md-6 mb-3" v-for="post in posts" :key="post.id">
  	<SinglePost :post="post" />
  </div>
</template>

<script>
	import { ref } from 'vue'
	import SinglePost from './SinglePost'
	
	export default {
		name: 'PostList',
		components: { SinglePost },
		props: ['posts']
	}
</script>

<style lang="scss" scoped></style>