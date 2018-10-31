import React, { Component } from 'react';
import { PublicHeader } from '@/components';
import { connect } from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';
import PropTypes from 'prop-types';
import axios from 'axios';
import store from '@/store/store';
import './production.less'


export default class Production extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proData: {}
        }
        // console.log(this.props);
        
        
    }
    togSelect(index){
        console.log(index);
        store.dispatch(togSelectPro(index));
    }
    handleEdit(index,selectNum){
        
        if(this.state.proData.dataList[index].selectNum < 1 && selectNum === -1) return;
        // console.log(this.state.dataList)
        store.dispatch(editPro(index, selectNum));
    }

    componentDidMount() {
         console.log(store.getState());
         let _this = this;
        store.dispatch(getProData());
        store.subscribe(res=>{
            _this.setState({
                proData: store.getState().proData,
            });
            console.log(_this.state);
        })
    }

    render() {
        return (
            <div className='production'>
                <PublicHeader title='产品' confirm />
                <section className='pro-list-con'>
                    <ul className='pro-list-ul'>
                        {
                            this.state.proData.dataList && this.state.proData.dataList.map((item, index) => {
                                return <li className='pro-item' key={index}>
                                    <div className='pro-item-select' onClick={this.togSelect.bind(this,index)}>
                                        <span className={`icon-xuanze1 pro-select-status ${item.selectStatus? 'pro-selected': ''}`}></span>
                                        <span className="pro-name">{item.product_name}</span>
                                    </div>
                                    <div className="pro-item-edit">
                                        <span className={`icon-jian ${item.selectNum > 0? 'edit-active':''}`} onClick={this.handleEdit.bind(this, index, -1)}></span>
                                        <span className="pro-num" >{item.selectNum}</span>
                                        <span className={`icon-jia`} onClick={this.handleEdit.bind(this, index, 1)} ></span>
                                    </div>
                                </li>
                            })
                            
                        }
                    </ul>
                </section>
            </div>
        )
    }
}

// export default connect(state => {
//     console.log(state)
//     return ({
//     proData: state.proData,
//     })
// }, {
//         getProData,
//         togSelectPro,
//         editPro
//     })(Production);
