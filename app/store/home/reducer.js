import * as home from './action-type';

let defaultState = {
    orderSum: '', //金额
    name: '', //姓名
    phoneNo: '', //手机号
    imgpath: '', //图片地址
};

//首页表单数据
export const formData = (state = defaultStatus, action = {}) => {
    switch(action.type){
        case home.SAVEFORMDATA:
            return {...state, ...{[action.datatype]: action.value}};
        case home.SAVEIMG:
            return {...state, ...{imgpath: action.path}};
        case home.CLAERDATA:
            return {...state, ...defaultState};
        default:
            return state;
    }
}