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
                <div className='lg:basis-1/3 '><h1 className='font-bold text-2xl mx-5'> Pixi Version 1.0</h1> <br />
                <img src={pixi} className='w-80 mx-20  lg:w-5/6 rounded-xl' alt="" /> </div> 
                <div className='lg:basis-1/2 flex mx-5 px-10 items-center'>
                    <div>
                    Pixi Version 1.0 is an Autonomous Humanoid Robot which can perform face recognition, question answering, shaking hands and making greetings, entertain the audiences with jokes and few dance moves etc. It was a joint collaboration with <a href="https://robowaytech.com/" className='text-blue-500'>  Roboway technologies</a>
                        </div>
                    </div> 

            </div>

            <div className='lg:flex my-5 py-10'>          
                <div className='lg:basis-1/3 '><h1 className='font-bold text-2xl mx-5'> Duburi Version 2.0</h1> <br />
                <img src={duburiv2} className='w-80 mx-20  lg:w-5/6 rounded-xl' alt="" /> </div> 
                <div className='lg:basis-1/2 flex mx-5 px-10 items-center'>
                    <div>
                   <p>BracU Duburi’ is believed to be Bangladesh’s first-ever autonomous underwater vehicle (AUV) to have participated in an international competition abroad. It underwent a primary selection round among a pool of 46 rovers competing from 13 countries.  ‘Duburi’, a wireless underwater rover, performs autonomously once it is submerged into the water and transmission of start signal. It uses image processing and some reverse engineered waterproof sensors for stabilising its movement underwater.</p>
                        </div>
                    </div> 

            </div>

            <div className='lg:flex my-5 py-10'>          
                <div className='lg:basis-1/3 '><h1 className='font-bold text-2xl mx-5'> Bracu Mongol Tori</h1> <br />
                <img src={mt} className='w-80 mx-20  lg:w-5/6 rounded-xl' alt="" /> </div> 
                <div className='lg:basis-1/2 flex mx-5 px-10 items-center'>
                    <div>
                    <p>This is a student led Mars Rover team of Brac University which has successfully participated in University Rover Challenge 4 times in a row which is one of the most prestigious robotics competition in the world. It is organised by the Mars Society and takes place in Mars Desert Rover Station(MDRS), Hanksville, Utah, USA.</p>
                        </div>
                    </div> 

            </div>

           

            
        </div>
    );
};

export default Robotics;