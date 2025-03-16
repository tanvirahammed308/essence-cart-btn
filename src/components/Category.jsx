import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { CiHeart } from 'react-icons/ci';

const Category = ({products,handleAddToCart}) => {
    const [categories,setCategories]=useState([]);
    const [selectedCat,setSelectedCat]=useState("All")
    console.log(selectedCat)
    useEffect(()=>{
        fetch("category.json")
        .then(res=>res.json())
        .then(data=>{
            setCategories(data)
        })
    },[])

    const filterCate=selectedCat === "All" ? products : products.filter((item)=>item.category === selectedCat)

   
  return (
    <div className='my-5'>
      <h1 className='text-2xl text-center md:text-left font-semibold my-8 text-[#4F5C69] capitalize 
     '><span className='text-[#5CAF90]'>Category</span>  products </h1>
        <div className='flex  flex-wrap justify-center gap-5 my-6'>
          {  categories.map((item)=><button className={`btn ${
              selectedCat === item.name
                ? "bg-[#5CAF90] text-white"
                : "btn-outline border-[#5CAF90] text-[#5CAF90]"
            }`} onClick={()=>setSelectedCat(item.name)} >{item.name}</button>)}
        </div>
        <div className='grid md:grid-cols-4 gap-7 justify-center   '>
                  {
                      filterCate.map((item)=><div className="card bg-base-100 w-72 shadow-sm ">
                      <figure>
                        <img
                          src={item.image} className='w-full '/>
                      </figure>
                      <div className='border border-[#5CAF90]'>
            
                      </div>
                      <div className="card-body ">
                        <h2 className="card-title text-[#75808A]">{item.title}</h2>
                        <p className='text-[#75808A]'>{item.description}</p>
                        <div className='flex justify-between text-xl items-center'>
                        <p className='font-bold text-xl text-[#75808A]'>$ {item.price}</p>
                        <CiHeart className='font-bold text-2xl cursor-pointer'/>
            
            
                        
                        </div>
                        <div className="card-actions ">
                          <button className="btn bg-[#5CAF90] btn-sm text-white" onClick={()=>{
                            handleAddToCart(item)
                            toast.success('Added Successfully !')
                            }}>Add to cart</button>
                        </div>
                        
                        <div className='bg-[#5CAF90] text-white text-sm font-bold absolute top-2 right-3 px-2 py-1 rounded-md'>
                          {item.category}
                        </div>
                      </div>
                    </div>)
                  }
                </div>
      
    </div>
  )
}

export default Category
