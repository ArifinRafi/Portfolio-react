import React from 'react';
import pixi from '../images/pixi.JPG'
import duburiv2 from '../images/mac.jpg'
import mt from '../images/mt.JPG'
import arifin from '../images/arifin_dp.jpg'
import './Robotics.css'

const Robotics = () => {
    return (
        <div>
            <h1 className='mx-10 px-5 text-3xl font-bold'>My Projects</h1>
            <div className='lg:flex my-5 py-10'>          
                <div className='lg:basis-1/3 '><h1 className='font-bold text-2xl mx-10'> Pixi Version 1.0</h1> <br />
                <img src={pixi} className='mx-2 md:image-size rounded-xl' alt="" /> </div> 
                <div className='lg:basis-1/2 flex mx-10 px-10 items-center'>
                    <div>
                    Pixi Version 1.0 is an Autonomous Humanoid Robot which can perform face recognition, question answering, shaking hands and making greetings, entertain the audiences with jokes and few dance moves etc. It was a joint collaboration with <a href="https://robowaytech.com/" className='text-blue-500'>  Roboway technologies</a>
                        </div>
                    </div> 

            </div>

            <div className='lg:flex my-5 py-10'>          
                <div className='lg:basis-1/3 '><h1 className='font-bold text-2xl mx-10'> Duburi Version 2.0</h1> <br />
                <img src={duburiv2} className='mx-2 lg:w-full  rounded-xl' alt="" /> </div> 
                <div className='lg:basis-1/2 flex mx-10 px-10 items-center'>
                    <div>
                    Pixi Version 1.0 is an Autonomous Humanoid Robot which can perform face recognition, question answering, shaking hands and making greetings, entertain the audiences with jokes and few dance moves etc. It was a joint collaboration with <a href="https://robowaytech.com/" className='text-blue-500'>  Roboway technologies</a>
                        </div>
                    </div> 

            

            </div>

            <div className='lg:flex my-5 py-10'>          
                <div className='lg:basis-1/3 '><h1 className='font-bold text-2xl mx-10'> Bracu Mongol Tori</h1> <br />
                <img src={mt} className='mx-2 lg:w-full border-round' alt="" /> </div> 
                <div className='lg:basis-1/2 flex mx-10 px-10 items-center'>
                    <div>
                    Pixi Version 1.0 is an Autonomous Humanoid Robot which can perform face recognition, question answering, shaking hands and making greetings, entertain the audiences with jokes and few dance moves etc. It was a joint collaboration with <a href="https://robowaytech.com/" className='text-blue-500'>  Roboway technologies</a>
                        </div>
                    </div> 

            

            </div>

            <div>
            <img  className='md:h-8 lg:w-full' src={arifin}  alt="" />
            </div>
        </div>
    );
};

export default Robotics;