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
                <div className='lg:basis-1/3  '><h1 className='font-bold text-2xl mx-5'> Pixi Version 1.0</h1> <br />
                <div className='flex justify-center'>
                <img src={pixi} className='w-80 lg:mx-10   lg:w-5/6 rounded-xl' alt="" />

                </div>
                 </div> 
                <div className='lg:basis-1/2 flex mx-5 px-10 items-center'>
                    <div>
                    Pixi Version 1.0 is an Autonomous Humanoid Robot which can perform face recognition, question answering, shaking hands and making greetings, entertain the audiences with jokes and few dance moves etc. We have used atmega 328p as the MCU and Raspberry Pi 4B as the processing unit. We have developed a deep learning CNN based computer vision model that has been used to recognize the face of a person. Additionally, pyttsx3, pyaudio and diiferent other library have been used to build the software. Serial communication has been implemented to build the communication between the MCU and the processing unit. It was a joint collaboration with <a href="https://robowaytech.com/" className='text-blue-500'>  Roboway technologies</a>
                        </div>
                    </div> 

            </div>

            <div className='lg:flex my-5 py-10'>          
                <div className='lg:basis-1/3  '><h1 className='font-bold text-2xl mx-5'> Duburi Version 2.0</h1> <br />
                <div className='flex justify-center'>
                <img src={duburiv2} className='w-80 lg:mx-10   lg:w-5/6 rounded-xl' alt="" />

                </div>
                 </div> 
                <div className='lg:basis-1/2 flex mx-5 px-10 items-center'>
                    <div>
                    Pixi Version 1.0 is an Autonomous Humanoid Robot which can perform face recognition, question answering, shaking hands and making greetings, entertain the audiences with jokes and few dance moves etc. We have used atmega 328p as the MCU and Raspberry Pi 4B as the processing unit. We have developed a deep learning CNN based computer vision model that has been used to recognize the face of a person. Additionally, pyttsx3, pyaudio and diiferent other library have been used to build the software. Serial communication has been implemented to build the communication between the MCU and the processing unit. It was a joint collaboration with <a href="https://robowaytech.com/" className='text-blue-500'>  Roboway technologies</a>
                        </div>
                    </div> 

            </div>

            <div className='lg:flex my-5 py-10'>          
                <div className='lg:basis-1/3  '><h1 className='font-bold text-2xl mx-5'> Mongol Tori</h1> <br />
                <div className='flex justify-center'>
                <img src={mt} className='w-80 lg:mx-10 lg:w-5/6 rounded-xl' alt="" />

                </div>
                 </div> 
                <div className='lg:basis-1/2 flex mx-5 px-10 items-center'>
                    <div>
                    Pixi Version 1.0 is an Autonomous Humanoid Robot which can perform face recognition, question answering, shaking hands and making greetings, entertain the audiences with jokes and few dance moves etc. It was a joint collaboration with <a href="https://robowaytech.com/" className='text-blue-500'>  Roboway technologies</a>
                        </div>
                    </div> 

            </div>

            

            

           

            
        </div>
    );
};

export default Robotics;