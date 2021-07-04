                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
<template>
  <div class="container">
  	<div class="row" v-show="error">
  		<div class="col-md-10 error__message">
  			<div class="card pt-3 px-3">
  				<div class="card-body text-center">
  					<h5 class="card-title text-cl-red">
		  				{{ error }}
		  			</h5>
  				</div>
  			</div>
  			<!-- /.card -->
  		</div>
  	</div>
  	<!-- /.row -->
  	
  	<div class="row" v-show="posts.length >= 1">
  		<PostList :posts="posts" />
  	</div>
  	<!-- /.row -->
  	
  	<div class="row" v-show="!error && posts.length <= 0">
  		<div class="col-md-10 text-center">
  			<div class="card py-5 px-3 mb-3" v-for="index in 10" :key="index">
  				<div class="card-body text-center">
  					<div class="spinner-grow spinner-grow-sm me-3 text-cl-yellow" role="status" v-for="index in 3" :key="index"></div>
  				</div>
  			</div>
  			<!-- /.card -->
  		</div>
  	</div>
  	<!-- /.row -->
  </div>
</template>

<script>
	import PostList from './PostList'
	// composables
	import getPosts from '@/composables/getPosts'
	
	export default {
		name: 'Posts',
		components: { PostList },
		setup() {
			const { posts, error, load } = getPosts()
			
			load()
			
			return { posts, error }
		}
	}
</script>

<style lang="scss" scoped>
	/* _variables */
	@import '@/assets/scss/partials/_variables.scss';
	/* _mixin */
	@import '@/assets/scss/partials/_mixin.scss';
	/* _animations */
	/* @import '@/assets/scss/partials/_animations.scss'; */
	
	.error__message {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	
	.card {
		background: map-get($colors, cl-dark);
		color: map-get($colors, cl-light);
	}
</style>