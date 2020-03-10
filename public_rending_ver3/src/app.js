import Header from './component/common/header'
import nav from './component/common/nav'
import router from './router'
new Vue({
    router,
    template: `<div>
        <app-header/>
        <app-nav/>
        <router-view></router-view>
    </div>`,

    components: {
        'app-header': Header,
        'app-nav': nav,

    }
}).$mount('#app')