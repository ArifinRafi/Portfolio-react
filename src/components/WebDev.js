import React from 'react';
import webApp from '../images/Capture4.JPG'
import Arifin from '../images/mongol_tori.jpg'

const WebDev = () => {
    return (
        <div>
            <div className='lg:flex lg:flex-row my-10 px-10 lg:px-20'>
                <div className='basis-1/3'>
                <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='flex justify-center'>
    <img src={webApp} className="lg:w-full rounded-lg" />
    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    
    
  </div> 
  

  {/* <div id="slide2" className="carousel-item relative w-full">
    <img src={Arifin} className="lg:w-full lg:h-4/5 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>  */}

  {/* <div id="slide3" className="carousel-item relative w-full">
    <img src={webApp} className="lg:w-full lg:h-4/5  rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>  */}
  
 
</div>

<p className='my-5'>github link: <a className='text-blue-500' href="https://github.com/ArifinRafi/Shield52">https://github.com/ArifinRafi/Shield52</a> </p>

                </div>

    <div className='lg:basis-1/2 flex mx-5 px-10 items-center'>
        <span >
            shield 52 is designed for construction workers. A smart way to manage worker safety and tracking in construction sites. The Features are Accident detection Backend GUI for project manager Hazard alarm Health Condition monitoringLocation addressing Suitable solution for Construction site, Factory workers.
        </span>
    </div> 
 </div>


        
            
</div>
    );
};

export default WebDev;