import React from 'react'
import { FaTrash } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { useGlobalContext } from '../context/context';
import formatNumber from '../utils/formatNumber';

const CartItem = ({_id, name, image, price, qty, countInStock}) => {
 const {deleteItem, addQty, dimQty} = useGlobalContext();

 const aumenta = (_id) => {
    if(qty + 1 > countInStock){
        return
    } else {
        return addQty(_id)
    }
 }

 const diminuisci =  (_id) => {
    if(qty - 1 <= 0){
        return deleteItem(_id)
    }else {
        return  dimQty(_id)    
    }
 }
  return (
    <section>
    <div className='container'>
        <div className='row align-items-center'>
            <div className='col'>
                <img src={image} alt={name} className='item-img'/>
            </div>
            <div className='col'>
                <h6>{name}</h6>
            </div>
            <div className='col text-center'>
                <button className='btn' onClick={() => {aumenta(_id)}}>
                    <IoIosAddCircle />
                </button>
                <h6 className='m-0'>{qty}</h6>
                <button className='btn' onClick={() => {diminuisci(_id)}}>
                    <AiFillMinusCircle />
                </button>
            </div>
            <div className='col text-center'>
                <h6>{formatNumber(price)}</h6>
            </div>
            <div className='col text-center'>
                <button className='btn' onClick={ () => {deleteItem(_id)}}>
                <FaTrash className='delete-icon' />
                </button>
            </div>
        </div>
        <hr/>
    </div>
  
</section>
  )
}

export default CartItem