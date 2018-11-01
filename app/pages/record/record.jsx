import React, { Component} from 'react';

import  './record.less';
import { PublicHeader } from '@/components';

export default class Record extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            flagBar: '4%'
        }
    }
    changeRoute(type) {
        console.log(type);
        switch(type) {
            case 'passed':
                this.setState({flagBar: '4%'});
                break;
            case 'audited':
                this.setState({flagBar: '37.33%'});
                break;
            case 'failed':
                this.setState({flagBar: '70.66%'});
                break;
            default:
                this.setState({flagBar: '4%'});
        }
        console.log(this.state);
    }
    clk(){
        console.log('test');
    }


    render() {
        return (
            <div className='record'>
                <PublicHeader title='记录'/>
                <section className='record-nav-con'>
                    <nav className='record-nav' >
                        <span onClick={this.changeRoute.bind(this,'passed')}>已审核</span>
                        <span onClick={this.changeRoute.bind(this,'audited')}>待审核</span>
                        <span onClick={this.changeRoute.bind(this,'failed')}>未通过</span>
                    </nav>
                    <i className='nav-flag-bar' style={{left: this.state.flagBar}}> </i>
                </section>
                <button onClick={this.clk.bind(this)}>test</button>
            </div>
        )
    }
}