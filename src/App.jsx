import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import NewArrival from './components/NewArrival'
import Category from './components/Category'
import AllProducts from './components/AllProducts'
import PopularProduct from './components/PopularProduct'
import Footer from './components/Footer'

const App = () => {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState([])
  console.log(cart);
  
  
  useEffect(()=>{
    fetch("product.json")
    .then(res=>res.json())
    .then(data=>{
      setProducts(data)
    })
  },[]);
  const handleAddToCart=cart=>{
    setCart((preData)=>[...preData,cart])
   
  }

  return (
    <div className='w-11/12 mx-auto'>
      <Header cart={cart}/>
      <Hero/>
      <PopularProduct products={products} handleAddToCart={handleAddToCart}/>
      <AllProducts products={products}  handleAddToCart={handleAddToCart}/>
     
      <Category products={products}  handleAddToCart={handleAddToCart}/>
      <NewArrival products={products}  handleAddToCart={handleAddToCart}/>
      <Footer/>
    </div>
  )
}

export default App
