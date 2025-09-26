import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import Curriculum from '../components/Curriculum.vue'
import Blog from '../components/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/curriculum',
    name: 'Curriculum',
    component: Curriculum,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router