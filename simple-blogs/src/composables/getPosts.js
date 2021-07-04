                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
import { ref } from 'vue'

const getPosts = () => {
	const posts = ref([])
	const error = ref(null)
	
	const load = async () => {
		try {
			let res = await fetch('http://localhost:8000/posts')
		
			if ( !res.ok )
			{
				throw Error('data is not available for request.')
			}
			
			posts.value = await res.json()
		} catch(err) {
			error.value = err.message
		}
	}
	
	return { posts, error, load }
}

export default getPosts