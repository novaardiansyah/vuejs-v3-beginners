                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
<template>
	<router-link :to="{ name: 'DetailsPost', params: { id: post.id } }">
	  <div class="card pt-3 px-3 shadow-md">
	  	<div class="card-body">
	  		<h4 class="card-title text-center mb-0">
	  			{{ post.title }}
	  		</h4>
	  		
	  		<div class="text-center">
		  		<small class="text-cl-light-1">
		  			Writter By: {{ post.author }}
		  		</small>
	  		</div>
	  		
	  		<p class="card.text mt-3">
	  			{{ snippet }}
	  		</p>
	  	</div>
	  </div>
  </router-link>
</template>

<script>
	import { ref, computed } from 'vue'
	
	export default {
		name: 'SinglePost',
		props: ['post'],
		setup(props) {
			const snippet = computed(() => {
				return props.post.body.substr(0, 100) + '....'
			})
			
			return { snippet }
		}
	}
</script>

<style lang="scss" scoped>
	/* _variables */
	@import '@/assets/scss/partials/_variables.scss';
	/* _mixin */
	/* @import '@/assets/scss/partials/_mixin.scss'; */
	/* _animations */
	@import '@/assets/scss/partials/_animations.scss';
	
	.card {
		background: map-get($colors, cl-dark);
		cursor: pointer;
		color: map-get($colors, cl-light) !important;
		
		#{&}-title {
			font-family: 'Poppins', Sans-Serif;
		}
		
		&:hover {
		  @include animate__pulse($duration: .75s);
		}
	}
</style>