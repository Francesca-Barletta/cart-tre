import React, {useContext, useReducer, useEffect} from 'react';
import axios from 'axios';
import reducer from './reducer'
import { ADD_ITEM, CART_TOTAL, DATA_FAILED, DATA_START, DATA_SUCCESS, DELETE_CART, DELETE_ITEM, ITEM_COUNTER, SUB_ITEM } from './actions';

const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

const initialState = {
    products: [],
    isLoading: true,
    isError: false,
    total: 0,
    itemCounter: 0
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState);

const deleteItem =(_id) => {
    dispatch({type: DELETE_ITEM, payload: _id})
}
const deleteCart =() => {
    dispatch({type: DELETE_CART})
}
const addQty =(_id) => {
    dispatch({type: ADD_ITEM, payload: _id})
}
const dimQty =(_id) => {
    dispatch({type: SUB_ITEM, payload: _id})
}

useEffect (() => {
    (async () => {
        dispatch({type: DATA_START})
        try {
            const response = await axios.get(url);
            dispatch({type: DATA_SUCCESS, payload: response.data.data})
            console.log(response.data.data)
        } catch (error) {
            dispatch({type: DATA_FAILED})
        }
    })()
}, [])


useEffect (() => {
dispatch({type: CART_TOTAL})
dispatch({type: ITEM_COUNTER})
},[state.products])


    return (
        <AppContext.Provider
        value={{
            ...state,
            deleteCart,
            deleteItem,
            addQty,
            dimQty
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppProvider, useGlobalContext}