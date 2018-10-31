import React from 'react';
import  './home.less';
import { PublicHeader } from '@/components';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(PublicHeader);
    }
    render() {
        return (
            <div className='home'>
                <PublicHeader title = '首页' record />
                <form >
                    <p>请录入您的信息</p>
                    <label>
                        <span>销售金额</span>
                        <input type="number"/>
                    </label>
                    <label>
                        <span>客户姓名</span>
                        <input type="text"/>
                    </label>
                </form>
            </div>
        )
    }
}