import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import TheMain from './../components/TheMain.vue'
import Table from './../components/Table.vue'
import Canvas from '../components/Canvas.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'TheMain',
        component: TheMain
    },
    {
        path: '/table',
        name: 'Table',
        component: Table
    },
    {
        path: '/canvas',
        name: 'Canvas',
        component: Canvas
    }
]

const router = new VueRouter({
    routes
})

export default router
