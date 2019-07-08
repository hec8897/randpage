import React, {Component} from 'react';
import './jmtest.css';



class JemoTest extends Component{
    render(){
        const _Qa = this.props.qas[this.props.qaNum].qa
        // console.log(_Qa)
        // console.log(_Qa.qas[_Qa.qaNum])
        return(
            <div className='test_wrap'>
                <h1></h1>
                <div className='test-container'>
                </div>

                <a onClick={function(e){
                        e.preventDefault()
                        this.props.testPro()
                    }.bind(this)}>테스트</a>
                    <p>{_Qa}</p>
                    <p>{this.props.total}</p>
            </div>
        )
    }

}

export default JemoTest;