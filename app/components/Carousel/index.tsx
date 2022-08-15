import React from 'react'
import { Carousel } from 'antd';
import Image from "next/image";
import img1 from "@../../../public/image/carousel/1.jpg";
import img2 from "@../../../public/image/carousel/2.jpg";
import img3 from "@../../../public/image/carousel/3.jpg";
import img4 from "@../../../public/image/carousel/4.jpg";


function Carousels() {
  return (
    <div className="w-3/5 justify-center mx-auto bg-white min-h-full">
        <Carousel autoplay className='bg-gradient-to-b from-[#B27310] via-[#F0D077] to-[#FAC54C] items-center'>
            
            <Image src={img1} alt="LogoImage" />
            <Image src={img2} alt="LogoImage" />
            <Image src={img3} alt="LogoImage" />
            <Image src={img4} alt="LogoImage" />
            
        </Carousel>
    </div>
  )
}

export default Carousels