                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
import { ref } from 'vue'

const getPost = (id) => {
	const post = ref([])
	const error = ref(null)
	
	const load = async () => {
		try {
			let res = await fetch('http://localhost:8000/posts/' + id)
		
			if ( !res.ok )
			{
				throw Error('data is not available for request.')
			}
			
			post.value = await res.json()
		} catch(err) {
			error.value = err.message
		}
	}
	
	return { post, error, load }
}

export default getPost