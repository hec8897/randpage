// import React from 'react';
import React, {Component} from 'react';
import Intor from './component/intro';
import Jemotest from './component/jemotest';


class App extends Component{

  state ={
    mode:'welcome',
    // mode:'testStart',
    totalPoint:0,
    qaNum:0,
    questions:[
      {id:0,point:0,qa:"당신의 직업군은?",an1:['개인사업/자영업',null],an2:['직장인 근로소득자',null],an3:['전문직',null],an4:['프리랜서',null],cateId:null},
      {id:1,point:0,qa:"당신의 연간 총소득은 얼마인가요?",an1:['1천만원~3천만원',10],an2:['3천만원~6천만원',8],an3:['6천만원~9천만원',6],an4:['1억이상',4],cateId:null},
      {id:2,point:0,qa:"당신의 한 달 생활비(기본 의식주,경조사비,교통비등)는 얼마인가요?",an1:['50만원 내외',10],an2:['100만원 내외',8],an3:['300만원 내외',6],an4:['500만원 이상',4],cateId:'out'},
      {id:3,point:0,qa:"당신은 얼마 정도 대출을 받고 있나요?",an1:['1천만원 이하',10],an2:['3천만원 이하',8],an3:['5천만원 이하',6],an4:['1억이상',4],cateId:null},
      {id:4,point:0,qa:"당신의 월 소득대비 저축률은 어느 정도 되시나요?",an1:['10% 이하',4],an2:['30% 이하',6],an3:['50% 이하',8],an4:['70% 이상',10],cateId:'save'},
      {id:5,point:0,qa:"비상시를 대비하여 통장에 두 달 생활비 정도의 자금이 있나요?",an1:['네',10],an2:['아니요',4],an3:null,an4:null,cateId:null},
      {id:6,point:0,qa:"대출을 했다면 당신은 계획대로 모두 상환할 수 있나요?",an1:['네',10],an2:['아니요',4],an3:null,an4:null,cateId:'loan'},
      {id:7,point:0,qa:"당신은 갑작스러운 질병, 상해, 사고, 사망 등에 대비해 보장성보험에 가입하고 계신가요?",an1:['네',10],an2:['아니요',4],an3:null,an4:null,cateId:'insual'},
      {id:8,point:0,qa:"뜻하지 않게 300만원이 급히 필요하다면 바로 마련하실 수 있나요?",an1:['네',10],an2:['아니요',4],an3:null,an4:null,cateId:'purpose'},
      {id:9,point:0,qa:"당신은 평소 공과금이나 납부고지서를 제때 납부하십니까?",an1:['네',10],an2:['아니요',4],an3:null,an4:null,cateId:null},
      {id:10,point:0,qa:"매월 정기적으로 발생되는 생활비, 이자, 보험료 등이 얼마인지 어렵지 않게 말할 수 있나요?",an1:['네',10],an2:['아니요',4],an3:null,an4:null,cateId:null},
      {id:11,point:0,qa:"당신은 어떤 방법으로 재테크를 하고 계신가요?",an1:['예적금',null],an2:['주식 or 펀드',null],an3:['채권',null],an4:['선물 옵션',null],cateId:null}
    ]
  }
  render(){
    var _section = null;
    if(this.state.mode ==='welcome'){
      _section =<Intor onClick={function(){
        this.setState({
          mode:'testStart'
        })
      }.bind(this)}></Intor>
    }
    else if(this.state.mode ==='testStart'){
      _section = <Jemotest qaNum={this.state.qaNum} total={this.state.totalPoint} qas={this.state.questions} testPro = {function(){
        const qa = this.state.questions[this.state.qaNum];
        console.log(qa)
          
        this.setState({
          qaNum:this.state.qaNum+1,
          totalPoint:this.state.totalPoint + qa.id
         
        })

        if(this.state.qaNum === 11){
          alert('테스트가완료되었습니다');
          this.setState({
            mode:"FnTest"
          })
        }
      }.bind(this)}></Jemotest>
    }
    else if(this.state.mode === 'FnTest'){
      _section =<div>완료화면</div>
    }



    return(
      <div className="App">
      <div id="wrap">
        {_section}
        {/* <Intor></Intor> */}
      </div>
    </div>
    )
  }
}


export default App;
