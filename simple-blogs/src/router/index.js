                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Posts from '@/views/posts/Posts'
import DetailsPost from '@/views/posts/DetailsPost'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/posts'
  },
  {
  	path: '/posts',
  	name: 'Posts',
  	component: Posts
  },
  {
  	path: '/details-post/:id',
  	name: 'DetailsPost',
  	component: DetailsPost,
  	props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router