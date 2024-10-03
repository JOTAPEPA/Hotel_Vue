import Actividades from "../components/Actividades.vue"
import Contacto from "../components/Contacto.vue"
import Habitaciones from "../components/Habitaciones.vue"
import Inicio from "../components/Inicio.vue"
import Serivicios from "../components/Servicios.vue"
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {path: '/', component: Inicio},
    {path: '/habitaciones', component: Habitaciones},
    {path: '/actividades', component: Actividades},
    {path: '/servicios', component: Serivicios},
    {path: '/contacto', component: Contacto},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})