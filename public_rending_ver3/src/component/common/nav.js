import './nav.less'
import EventBus from '../../eventbus'
const Nav = {
    template: `<nav>
        <ul class='gnb wrap'>
            <router-link tag='li' to='/' class='home_li'>
            <img src='images/nav-home-active.png' class='home' v-if="this.$route.path === '/'">
            <img src='images/nav-home.png' class='home' v-else>

        </router-link>
            <router-link tag='li' v-bind:to="'/'+tab.name" v-for="(tab,i) in tabs" v-bind:style="{width:ListWidth}">
            <img v-bind:src='tab.acitveimg' v-bind:class="tab.name" v-if="mode === tab.name">
            <img v-bind:src='tab.img' v-bind:class="tab.name" v-else>
            {{tab.title}}
        </router-link>
        </ul>
    </nav>`,
    data() {
        return {
            mode: '',
            ListWidth: "",
            tabs: [
                {
                    id: 1,
                    name: 'gen',
                    title: '유전자 보험',
                    img: 'images/nav-gen.png',
                    acitveimg: 'images/nav-gen-active.png'
                },
                {
                    id: 2,
                    name: 'child',
                    title: '어린이 보험',
                    img: 'images/nav-child.png',
                    acitveimg: 'images/nav-child-active.png'

                },
                {
                    id: 3,
                    name: 'can',
                    title: '암 보험',
                    img: 'images/nav-can.png',
                    acitveimg: 'images/nav-can-active.png'

                },
                {
                    id: 4,
                    name: 'dis',
                    title: '2대중대질병',
                    img: 'images/nav-dis.png',
                    acitveimg: 'images/nav-dis-active.png'

                },
                {
                    id: 5,
                    name: 'dem',
                    title: '치매 보험',
                    img: 'images/nav-dem.png',
                    acitveimg: 'images/nav-dem-active.png'

                },
                {
                    id: 6,
                    name: 'car',
                    title: '자동차 보험',
                    img: 'images/nav-car.png',
                    acitveimg: 'images/nav-car-active.png'
                }
            ]
        }
    },
    created() {
        this.mode = (this.$route.path).substring(1)
        EventBus.$on('pathChange', (Data) => {
            this.mode = Data.name
        })
    },
    mounted() {
        window.addEventListener('resize',this.NavSize);
        this.NavSize()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.NavSize);
      },
    methods: {
        NavSize() {
            const UlGnb = document.querySelectorAll('.gnb')
            const HomeGnb = document.querySelectorAll('.home_li')
            if(UlGnb[0].offsetWidth < 1024 && 767 < UlGnb[0].offsetWidth){
                this.ListWidth =UlGnb[0].offsetWidth/this.tabs.length+'px'
                
            }
            else if(UlGnb[0].offsetWidth < 767){
                this.ListWidth = '50%'
            }
            else{
                this.ListWidth = (UlGnb[0].offsetWidth - HomeGnb[0].offsetWidth) / this.tabs.length +'px'
            }
        }
    },

}

export default Nav;