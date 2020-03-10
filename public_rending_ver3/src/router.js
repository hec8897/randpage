import VueRouter from 'vue-router';
import Home from './component/main/home/home-main'
import GenMain from './component/main/gen/gen-main'
import CanMain from './component/main/can/can-main'
import ChildMain from './component/main/child/child-main'
import DisMain from './component/main/dis/dis-main'
import DemMain from './component/main/dem/dem-main'
import CarMain from './component/main/car/car-main'
import EventBus from './eventbus'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {name:'home', path: '/', component: Home },
        {name:'gen', path: '/gen', component: GenMain },
        {name:'child', path: '/child', component: ChildMain },
        {name:'can', path: '/can', component: CanMain },
        {name:'dis', path: '/dis', component: DisMain },
        {name:'dem', path: '/dem', component: DemMain },
        {name:'car', path: '/car', component: CarMain }
    ]
});

router.afterEach((to, from, next) => {
    EventBus.$emit('pathChange',to)
  })
export default router;