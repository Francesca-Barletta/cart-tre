import {
DATA_START,
DATA_SUCCESS,
DATA_FAILED,
DELETE_CART,
DELETE_ITEM,
ADD_ITEM,
SUB_ITEM,
CART_TOTAL,
ITEM_COUNTER
} from './actions';

const reducer = (state, {type, payload})=>{
if (type === DATA_START) {
    return {...state, isloading: true}
}
if (type === DATA_SUCCESS) {
    return {...state, isLoading:false, isError: false, products: payload.map((el) => {
        return {...el, qty: 1}
    })}
}
if (type === DATA_FAILED) {
    return {...state, isLoading:false, isError: true}
}
if (type === DELETE_CART) {
    return {...state, products: []}
}
if (type === DELETE_ITEM) {
    return {...state, products: state.products.filter((el) => el._id !== payload)}
}
if (type === ADD_ITEM) {
    return {...state, products: state.products.map((el) => {
        if(payload === el._id){
            return{...el, qty: el.qty + 1}
        } else {
            return {...el}
        }
    })}
}
if (type === SUB_ITEM) {
    return {...state, products: state.products.map((el) => {
        if(payload === el._id){
            return{...el, qty: el.qty - 1}
        } else {
            return {...el}
        }
    })}
}
if (type === CART_TOTAL) {
    return {
        ...state,
        total: state.products.reduce((total, item) =>{
        return total + item.qty * item.price
    },0)}
}
if (type === ITEM_COUNTER) {
    return {...state,
        itemCounter: state.products.reduce((total, item) =>{
        return total + item.qty
    },0)}
}
return state
}
export default reducer