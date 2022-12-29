import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import VueSweetalert2 from 'vue-sweetalert2';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'

import UsuariosComponent from './pages/usuarios/UsuariosComponent'



const routes = [
  {path: '/', component: UsuariosComponent},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.use(VueSweetalert2);


app.mount('#app')
