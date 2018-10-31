import * as pro from './action-type';

let defaultState = {
    /**
     * 商品
     * @type {Array}
     * * example: [{
     *    product_id: 1, 商品ID 
     *    product_name: "PaiBot（2G/32G)", 商品名称
     *    product_price: 2999, 商品价格
     *    commission: 200, 佣金
     *    selectStatus: false, 是否选择
     *    selectNum: 0, 选择数量
     * }]
     */
    dataList: [],
};

export const proData = (state = defaultState, action) => {
    switch(action.type) {
        case pro.GETPRODUCTION: 
            console.log({...state, ...action});
            return {...state, ...action};
        case pro.TOGGLESELECT:
            state.dataList[action.index]['selectStatus'] = !state.dataList[action.index]['selectStatus'];
            return {...state};
        case pro.EDITPRODUCTION:
            console.log(action);
            state.dataList[action.index]['selectNum'] +=action.selectNum;
            return {...state};
        case pro.CLEARSELECTED:
            return {...state};
        default:
            return state;

    }
}