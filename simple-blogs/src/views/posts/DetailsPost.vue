                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-10">
				<h3 class="text-cl-yellow mb-0">
			  	{{ post.title }}
			  </h3>
			  
			  <div class="mb-3">
				  <small class="text-cl-light-1">
				  	Writter By: {{ post.author }}
				  </small>
			  </div>
			  
			  <p v-for="index in 5" :key="index">{{ post.body }}</p>
			  
			  <router-link :to="{ name: 'Posts' }" class="btn btn-primary">
			  	Back to Home
			  </router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue'
	// composables
	import getPost from '@/composables/getPost'
	
	export default {
		name: 'DetailsPost',
		props: ['id'],
		setup(props) {
			const { post, error, load } = getPost(props.id)
			
			load()
			
			return { post, error }
		}
	}
</script>

<style lang="scss" scoped>
	/* _variables */
	/* @import '@/assets/scss/partials/_variables.scss'; */
	/* _mixin */
	/* @import '@/assets/scss/partials/_mixin.scss'; */
	/* _animations */
	/* @import '@/assets/scss/partials/_animations.scss'; */
	
</style>