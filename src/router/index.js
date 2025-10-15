import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Início | Portfólio' },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'Sobre | Portfólio' },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { title: 'Projetos | Portfólio' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contato | Portfólio' },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router