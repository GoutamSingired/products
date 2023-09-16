import React, {useState} from 'react';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
import './App.css'
import axios from 'axios'

function App(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        //console.log(res.data)
        setProducts(res.data)
      })
      .catch(err => console.log(err))
    },[]
    )

  if (products.length == 0){
    return (<h1>Fetching Data...</h1>)
  }
  return(
    <>
      <div className='product-list'>
        {
          products.map( (p) =>  <ProductCard {...p} key={p.id} />)
        }
      </div>
    </>
  )
}
export default App;