import {React,useState,useEffect} from 'react'
import { GrNext } from "react-icons/gr";

const Hero = () => {
    const [currentIndex,setCurrentIndex]= useState(0)
    const slides =
    [{bgimage:"assets/images/image24.jpg",headline:"Let's Build Futures Together",subHeadline:"lorem dor sit aime"},
    {bgimage:"assets/images/bgimage3.jpg",headline:"Let's Secure, Grow And Prosper",subHeadline:"lorem dor sit aime"},
    {bgimage:"assets/images/bgimage2.jpg",headline:"Having Tomorrow's Financial Freedom",subHeadline:"lorem dor sit aime"}]
    const handleSlideChange = (index)=>{
      setCurrentIndex(index)

    }
  
    useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 7000);

      return () => clearInterval(interval);
  }, [currentIndex, slides.length]);


  return (
    <div className='flex flex-col  w-full h-[90vh] bg-[#0F0F0F] '>
        <div className="flex flex-col w-full justify-center h-full">
         <div className="flex my-[5px] w-full max-w-7xl mx-auto overflow-hidden rounded-md h-[768px]">
             {slides.map((slide, index) => (
                 <div
                     key={index}
                     className="flex flex-shrink-0 items-center w-full h-full duration-1000 transition-transform ease-in-out bg-cover bg-center bg-no-repeat"
                     style={{ backgroundImage: `url(${slide.bgimage})` ,
                     transform: `translateX(${-100 * currentIndex}%)` 
                 }}>
                  <div className="flex w-full h-full justify-center items-center bg-black/10 ">
                  <div className="flex flex-col justify-between w-full h-[300px] p-[10px]">

                    <div className="flex w-[80%] h-[70%] my-[5px] items-center justify-start">
                      <span className='flex w-[70%] text-[56px]'>
                      {slide.headline}
                      </span>
                      </div>
                    <div className="flex w-[80%] h-[30%] my-[5px] justify-end text-[22px] font-thin">
                      <span  className='flex w-[70%]'>
                      {slide.subHeadline}
                      </span>
                      </div>

                  </div>
                  </div>
                  

                 </div>
             ))}
         </div>
         <div className="flex justify-between py-[24px] items-start align-center my-[5px] w-full max-w-7xl mx-auto h-[72px] ">
         <div className="flex items-center py-[5px] my-[5px]">
          <button className='bg-primary rounded-sm hover:bg-secondary text-other text-[18px] py-[10px] px-[25px]'>Get Assurance</button>
          </div>
            <div className="flex">
            {
              slides.map((slide,index)=>{
                return <button key={index} className='mx-[5px] text-[22px] border-b duration-1000 ease-in-out font-thin hover:cursor-pointer' style={{borderBottom : currentIndex == index ? `2px solid white` : `none`}} onClick={()=>handleSlideChange(index)}>0{index+1}</button>
              })
            }           
              </div>
         
          
          </div>
         
        </div>
       
    </div>
  )
}

export default Hero