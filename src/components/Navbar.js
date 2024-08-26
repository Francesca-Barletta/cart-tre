import React from 'react'
import { HiShoppingCart} from 'react-icons/hi';
import { useGlobalContext } from '../context/context';
const Navbar = () => {
    const {itemCounter} = useGlobalContext();
  return (
    <section className='bg-primary text-light'>
        <div className='container'>
            <div className='row align-items-center justify-content-between '>
                <div className='col-auto'>
                    <h6>CartShop</h6>
                </div>
                <div className='col-auto cart-icon-box'>
                    <div className='counter'>{itemCounter}</div>
                    <HiShoppingCart className='fw-bold text-white'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar