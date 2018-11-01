import React from 'react';
import  './home.less';
import { PublicHeader } from '@/components';
import { Link } from 'react-router-dom';
import { uploadImg as upImg } from '@/api/api'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.uploadImg = this.uploadImg.bind(this);
    }
    async uploadImg(event) {
        let formdata = new FormData();
        formdata.append('file', event.target.files[0]);
        console.log(formdata);
        let result = await upImg({data:formdata});
        console.log(result);
    }
    render() {
        return (
            <div className='home'>
                <PublicHeader title = '首页' record />
                <form >
                    <p className='common-title'>请录入您的信息</p>
                    <label className='common-label'>
                        <span>销售金额:</span>
                        <input type="number" placeholder='请输入订单金额'/>
                    </label>
                    <label className='common-label'>
                        <span>客户姓名:</span>
                        <input type="text" placeholder='请输入客户姓名'/>
                    </label>
                    <label className='common-label'>
                        <span>客户电话:</span>
                        <input type="number" placeholder='请输入电话号码'/>
                    </label>
                    <p className='common-title'>请选择销售商品</p>
                    <Link to='/production' className='common-choose'>选择商品</Link>
                    <p className='common-title'>请上传发票凭证</p>
                    <section className='file-label'>
                        <button className='common-choose' >上传图片</button>
                        <input type="file" onChange={this.uploadImg}/>
                    </section>
                    <button className='commit'>提交</button>

                </form>
            </div>
        )
    }
}