// import React from 'react';
import React, { Component } from 'react';
import './intro.css';

class Intro extends Component{
    render(){
        // alert(this.props.test)
    return(
        <div className="intro_wrap">
            <div className="upper">
                <h1></h1>
                <div className='upper_img'>
                </div>
            </div>
            <h2>재무 건강 테스트로 월급 순삭의</h2>
            <h2>원인을 파헤쳐 본다!!</h2>

            <div className='cartoon-container'>
                <div className='cartoon cartoon1'></div>
                <div className='cartoon cartoon2'></div>
                <div className='cartoon cartoon3'></div>
            </div>

            <div className='text-area'>
                <p>'늘 아끼고 아껴도 왜 이렇게 돈은 모이지 않는 걸까?'</p>
                <p>돈 걱정 없이, 남들처럼 여유롭게 살기 위해서는 <span>든든한 재무구조</span>가 필요합니다.</p>

                <p>나의 <span>재무 건강 테스트</span>를 해보고,</p>
                <p><span>재무 전문가</span>를 통해 <span>진단결과</span>를 받아보세요.</p>
                <p>(소득/저축/지출관리/재무목표 설정)</p>
            </div>

            <div className='start_btn' onClick={this.props.onClick}>
                재무 건강 테스트 시작하기
            </div>
            <footer></footer>
        </div>
    )
}

}

export default Intro;