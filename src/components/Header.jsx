import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = ({cart}) => {
  const [cartPop,setCartPop]=useState(false);

  const handleCartPop=()=>{
    setCartPop(!cartPop)
  }

  const filterPrice=cart.reduce((acc,item)=>acc+item.price,0)
  const fixPrice=filterPrice.toFixed(2)
  return (
    <div className="my-2 relative">
      <div className="navbar bg-base-100 shadow-2xl rounded mb-5  flex justify-between items-center">
        <div className="">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" className="w-24" />
           
          </a>
        </div>
        <div className="relative">
        <input type="text" placeholder="... products" className="input" />
        <CiSearch className="text-xl md:text-3xl absolute top-2 md:top-1 right-2 "/>
        </div>
        <div className="">
          <ul className="menu menu-horizontal   mt-2 md:mt-0">
            
            <li>
              <a>
              <CiUser className="text-2xl md:text-3xl"/>

              </a>
            </li>
            <li >
              <a>
              <CiShoppingCart className="text-2xl md:text-3xl" onClick={handleCartPop}/>

              </a>
              <div >

              {

                cart.length  > 0 ?  <p className=" absolute -right-2 bottom-9 md:bottom-10 text-sm  rounded-full bg-[#5CAF90] font-bold text-white px-3 ">{cart.length}</p>: null
              }
              </div>
              
               
               
                
             
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        {
          cartPop && <div className="bg-[#5CAF90] w-[400px] rounded px-5 py-10 absolute top-20 right-0 text-white h-screen z-30">
           <h2 className="capitalize font-bold">total products : {cart.length}</h2>
           <div className="  overflow-y-auto h-[400px]">
         {
          cart.map((item)=><div className="my-2 bg-white rounded-md text-black flex items-center  text-sm gap-4 py-2">
<img src={item.image} alt="" className="w-10 rounded-md px-2 py-3" />
<h2>{item.title}</h2>
<p>$ {item.price}</p>

          </div>)
         }
           </div>
           <div className="border border-t-white my-5">

           
           </div>
           <div className=" flex justify-center">

           
           <p className="font-bold capitalize">total price $ {fixPrice}</p>
           </div>
           <div className="text-center py-5">
            <button className="border border-white font-bold px-3 mb-20 capitalize rounded">check out</button>
           </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
