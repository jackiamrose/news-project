/**
 * Created by user-pc on 2017/7/30.
 */
import Home from './components/Home.vue'
import Live from './components/childrenComponents/Live.vue'
import Sub from './components/childrenComponents/Subscription.vue'
import Search from './components/childrenComponents/Search.vue'
import Info from './components/Info.vue'
import Play from './components/Play.vue'
import Weizhi from './components/Weizhi.vue'
import Shequ from './components/Shequ.vue'
export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/live',
        component:Live
    },
    {
        path:'/sub',
        component:Sub
    },
    {
    	 path:'/search',
    	 component:Search
    },
    {
        path:'/zixun',
        component:Home
    },
    {
        path:'/play',
        component:Play
    },
    {
        path:'/weizhi',
        component:Weizhi
    },
    {
        path:'/shequ',
        component:Shequ
    },
    {
        path:'/info',
        component:Info
    },
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'*',
        component:Home
    }




]