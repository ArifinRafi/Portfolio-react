import React from 'react';
import pixi from '../images/pixi.JPG'
import duburiv2 from '../images/mac.jpg'
import mt from '../images/mt.JPG'
import arifin from '../images/arifin_dp.jpg'
import './Robotics.css'
import pixi2 from '../images/pixi2.0.jpg'

const Robotics = () => {
    return (
        <div>
            <h1 className='mx-10 px-5 text-3xl font-bold'>My Projects</h1>

            {/* pixi version2.0 */}


            <div className='lg:flex my-5 py-10'>          
                <div className='lg:basis-1/3  '><h1 className='font-bold text-2xl mx-5'> Pixi Version 2.0</h1> <br />
                <div className='flex justify-center'>
                <img src={pixi2} className='w-80 lg:mx-10   lg:w-5/6 rounded-xl' alt="" />

                </div>
                 </div> 
                <div className='lg:basis-1/2 flex mx-5 px-10  items-center'>
                <div className="bg-gray-100 p-10 rounded-xl">
    <p className="text-justify indent-0">
    Pixi Version 2.0 is an advanced Autonomous Humanoid Robot, building upon the capabilities of its predecessor. It features enhanced face recognition, Bengali language support, multiple operational modes, and ChatGPT integration for more dynamic interactions. Powered by Raspberry Pi 5B, this version delivers superior performance in processing speed and AI-driven functionalities.

Pixi Version 2.0 has been successfully delivered to the ICT Ministry of Bangladesh as a robot receptionist, deployed at Cumilla Circuit House Library as a robot librarian, and showcased in Shark Tank Bangladesh, Season 1. Its improved conversational abilities, seamless user engagement, and task automation make it an ideal solution for real-world applications in service and knowledge-based environments. 🚀 
        <a href="https://robowaytech.com/" className="text-blue-500 ml-1">Roboway Technologies</a>.
    </p>
</div>

                    </div> 

            </div>




            <div className='lg:flex my-5 py-10'>          
                <div className='lg:basis-1/3  '><h1 className='font-bold text-2xl mx-5'> Pixi Version 1.0</h1> <br />
                <div className='flex justify-center'>
                <img src={pixi} className='w-80 lg:mx-10   lg:w-5/6 rounded-xl' alt="" />

                </div>
                 </div> 
                <div className='lg:basis-1/2 flex mx-5 px-10  items-center'>
                <div className="bg-gray-100 p-10 rounded-xl">
    <p className="text-justify indent-0">
        Pixi Version 1.0 is an Autonomous Humanoid Robot which can perform face recognition, question answering, shaking hands, making greetings, entertaining the audience with jokes and a few dance moves, etc. We have used Atmega 328p as the MCU and Raspberry Pi 4B as the processing unit. We have developed a deep-learning CNN-based computer vision model that has been used to recognize the face of a person. Additionally, <code>pyttsx3</code>, <code>pyaudio</code>, and different other libraries have been used to build the software. Serial communication has been implemented to build the communication between the MCU and the processing unit. It was a joint collaboration with 
        <a href="https://robowaytech.com/" className="text-blue-500 ml-1">Roboway Technologies</a>.
    </p>
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
                    <div className='bg-gray-100 p-5 rounded-xl'>
                   <p className='text-justify indent-0'>BRAC University students have made it to the finals of an international underwater rover competition with a low-budget and self-made autonomous underwater vehicle ‘Duburi’.

The team went through to final 15 of Singapore Autonomous Underwater Vehicle Competition (SAUVC), organised by IEEE and OES (Oceanic Engineering Society), at Singapore.

SAUVC website says, the winner among 15 other universities from China, Singapore, Hong Kong, Thailand, Malaysia, Indonesia, and India, will be announced at a programme today.

‘BracU Duburi’ is believed to be Bangladesh’s first-ever autonomous underwater vehicle (AUV) to have participated in an international competition abroad. It underwent a primary selection round among a pool of 46 rovers competing from 13 countries.</p>
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
                    <div className='bg-gray-100 p-5 rounded-xl'>
                    <p className='text-justify indent-0'>Mongol Tori is a next-generation Mars rover that will one day work alongside human explorers on the red planet. Mongol Tori was specifically made for the purpose of competing at the prestigious Mars rover competition known as the URC – University Rover Challenge. Apart from URC, Mongol Tori has also participated in the IRC – Indian Rover challenge which is another Mars rover competition annually organized in India. One of our mains goals is to continue participating in international events like URC and continue representing our country and wave its flag every time we go there. Team Mongol-Tori also aims to implement the aqured knowledge and technology in the development of Bangladesh. Mongol Tori has always enabled its members to excel through innovation, push limits, show dedication, and sportsmanship towards the team. We want to keep this up and we want our members to develop themselves further so that they can go on to teach the junior members through their skills and experience and the juniors, in turn, can teach their next generation and continue the legacy.</p>
                        </div>
                    </div> 

            </div>

            

            

           

            
        </div>
    );
};

export default Robotics;