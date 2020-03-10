import HomeSection1 from './home-section-1'
import HomeSection2 from './home-section-2'


const homeMain = {
    template: `<main>
                    <section-1></section-1>
                    <section-2></section-2>
                </main>`,
    components: {
        'section-1': HomeSection1,
        'section-2': HomeSection2,


    },
    created(){
        this.scrollMove()
    },
    data(){
        return{
        }
    },
    methods:{
     scrollMove(){
         window.addEventListener('scroll',console.log(123))
     }   
    }
}

export default homeMain;