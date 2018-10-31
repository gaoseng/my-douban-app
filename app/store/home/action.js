import * as home from './action-type';

//保存表单数据
export const saveFromData = (value, datatype) => {
    return {
        type: home.SAVEFORMDATA,
        value,
        datatype
    }
}

//保存图片地址
export const saveImg = path => {
    return {
        type: home.SAVEIMG,
        path,
    }
}

//清除数据
export const clearData = () => {
    return {
        type: home.CLAERDATA
    }
}