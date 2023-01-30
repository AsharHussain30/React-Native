import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {add} from "../store/CartSlice"
import { remove } from '../store/CartSlice';

const Products = () => {

  //const [products,setProducts] = useState([]); 

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');

      const data = await res.json();

      console.log(data);

    };
    fetchProducts();

  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  }

  const Data = [
    {
      title: "Chota Burger",
      id: 1
    },
    {
      title: "Bada Burger",
      id:2
    },
    {
      title: "Us se bhi Bada Burger",
      id:3
    },
    {
      title: "Sab Se Bada Burger",
      id:4
    }
  ];  
  return (
    <div className='Productcards'>
      {
        Data.map(product =>(
          <div className='card' key={product.id}>
            <div className='card2'>
            <img className='productimg' src={product.image} alt=""/>
            <h4 className='producttitle'>{product.title}</h4>
            <h5>Price: {product.price}</h5>
            </div>
            <button onClick={() => handleAdd(product)} className='btn'>Add To Cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products