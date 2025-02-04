import React from 'react';
import duburi_v2 from '../images/duburi_v2.jpg'
import duburi_v1 from '../images/duburi_v1.jpg'
import webApp from '../images/swimming_pool.jpg'
import mac from '../images/mac.jpg'
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div>
            <h1 className='text-2xl lg:text-3xl font-bold'>I am a tech enthusias with multiple types of skillsets</h1>

            <div className='lg:flex flex-row my-10 px-10 lg:px-20'>
                <div className='basis-1/3'>
                <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={duburi_v2} className="lg:w-full lg:h-4/5 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={webApp} className="w-full lg:h-4/5 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <img src={mac} className="w-full lg:h-4/5  rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
                </div>
                <div className='basis-1/2'>
                    <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
                        <div> <div className="card lg:w-96 md:w-43 bg-base-100 shadow-xl">
                                <div className="card-body">
                                <h2 className="card-title justify-center">Robotics</h2>
                                <p>I have worked on Underwater Robotics, Humanoid robots, Mars Rover Prototypes and various other robotics projects</p>
                                <div className="card-actions justify-center">
                                 <Link to='/Robotics'><button className="btn btn-primary">See More </button></Link>
                                </div>
                                </div>
                                </div> 
                        </div> 


                        <div> <div className="card lg:w-96 md:w-43 bg-base-100 shadow-xl">
                                <div className="card-body">
                                <h2 className="card-title justify-center">Web Development</h2>
                                <p>I am a full stack developer. I have a descent experience on Reactjs, Node, Express, MongoDB and modern web frameworks</p>
                                <div className="card-actions justify-center">
                                  <Link to='/WebDev'>
                                  <button className="btn btn-primary">Know More</button>
                                  </Link>
                               
                                </div>
                                </div>
                                </div> 
                        </div> 


                        <div> <div className="card lg:w-96 md:w-43 bg-base-100 shadow-xl">
                                <div className="card-body">
                                <h2 className="card-title justify-center">Computer Vision</h2>
                                <p>I have worked on opencv, Tensorflow, Pytorch, Yolo V5 and many more computer vision frameworks in my undergrad life</p>
                                <div className="card-actions justify-center">
                                  <Link to='/ComputerVision'><button className="btn btn-primary">See More</button></Link>
                                
                                </div>
                                </div>
                                </div> 
                        </div> 


                        <div> <div className="card lg:w-96 md:w-43 bg-base-100 shadow-xl">
                                <div className="card-body">
                                <h2 className="card-title justify-center">Leadership and Management</h2>
                                <p>I have worked with different NGO's and firms in rural areas across the Bangladesh. We worked with the young students there</p>
                                <div className="card-actions justify-center">
                                  <Link to='/Leadership'><button className="btn btn-primary">See More</button></Link>
                                
                                </div>
                                </div>
                                </div> 
                        </div> 
                        
                    </div>
                    </div>
            </div>

        </div>
    );
};

export default Skills;