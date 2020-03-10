import './section1.less'
const HomeSection1 = {
    template: `<section class='wrap section1 home'>
        <h3>LIFE NEW CARE's</h3>
        <h2>프로세스 4단계</h2>
        <div class='panels'>
            <div class='panel panel1' v-if='show == true'>
                <div>
                    <h5>STEP 1</h5>
                    <h4>유전자검사</h4>
                    <p>정확도 높은</p>
                    <p>유전자검사를 실시합니다.</p>
                    <p>(타액체취 2초 소요)</p>
                </div>
                <img src='images/home-section1-panel1.png'>
            </div> 
            <div class='panel panel2' v-if='show == true'>
                <div>
                    <h5>STEP 2</h5>
                    <h4>결과 검토</h4>
                    <p>앞으로 발병하게 될 질병을</p>
                    <p>예측합니다.</p>
                    <p>(소변, 내시경검사보다 정확도 ↑)</p>
                </div>
                <img src='images/home-section1-panel2.png'></div>
            <div class='panel panel3' v-if='show == true'>
                <div>
                    <h5>STEP 3</h5>
                    <h4><span>현재보험</span>보장내역 확인</h4>
                    <p>정확도 높은</p>
                    <p>유전자검사를 실시합니다.</p>
                    <p>(타액체취 2초 소요)</p>

                </div>
                <img src='images/home-section1-panel3.png'></div>
            <div class='panel panel4' v-if='show == true'>
                <div>
                    <h5>STEP 4</h5>
                    <h4>유전자검사</h4>
                    <p>정확도 높은</p>
                    <p>유전자검사를 실시합니다.</p>
                    <p>(타액체취 2초 소요)</p>
                </div>
            </div>
        </div>
    </section>`,
    data(){
        return{
            show:true
        }
    }
}

export default HomeSection1;