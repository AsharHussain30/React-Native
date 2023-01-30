import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/CartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productid) => {
    dispatch(remove(productid))
  }
  return (
    <div>
      {
        products.map(product =>(
          <div className='cartsc'>
            <img className='imgalls' src={product.image}/>
            <button className='removetocart' onClick={(() => handleRemove(product.id))}>Remove</button>
            <h5 className='titlepro'>{product.title}</h5>
            <h3 className='titlepro2'>{product.price}$</h3>
          </div>
        
          ))
      }

    </div>
  )
}

export default Cart