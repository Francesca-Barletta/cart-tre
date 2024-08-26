import React from 'react';
import CartItem from './CartItem';
import { MdRemoveShoppingCart } from "react-icons/md";
import { useGlobalContext } from '../context/context';

const Cart = () => {

    const {products, deleteCart} = useGlobalContext();
    
  return (
    <section>
        <div className='container'>
            <div className='row pt-3'>
                <div className='col'>
                    <h6>Prodotto</h6>
                </div>
                <div className='col'>
                    <h6>Nome</h6>
                </div>
                <div className='col text-center'>
                    <h6>Qty</h6>
                </div>
                <div className='col text-center'>
                    <h6>Prezzo</h6>
                </div>
                <div className='col text-center'>
                    <button className='btn' onClick={deleteCart}>
                        <MdRemoveShoppingCart className='delete-icon' />
                    </button>
                </div>
            </div>
            <hr/>
            {
                products.map((el) => {
                    return <CartItem key={el._id} {...el}/>
                })
            }

        </div>
  
    </section>
  )
}

export default Cart