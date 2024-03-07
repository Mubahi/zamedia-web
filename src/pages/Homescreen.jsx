// import ShopCard from "./components/ShopCard";
import Aos from "aos";
import 'aos/dist/aos.css'
import React from "react";
import { useEffect } from "react";
const Homescreen = ({shops,Countries ,ViewShop}) => {
    useEffect(() => {
        Aos.init({duration:2000});
      })
    return (
        <>
            <div className="h-screen flex items-center justify-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
                    {/* {
                        shops.map(function(shop,index){
                            return(
                            <ShopCard key={shop.shop_id} shop={shop} Countries={Countries} ViewShop={ViewShop}/>
                            );
                        })
                    } */}
                <div className="text-center">
                    <h1 className="text-8xl font-bold font-serif text-white" data-aos="zoom-in">Welcome To  
                        <span className="text-black ml-2" >
                            Za:Media
                        </span>
                    </h1>
                </div>
            </div>
       </>
    );
}
export default Homescreen;