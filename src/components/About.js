import React from 'react';
import html_logo from '../images/html.png';
import css_logo from '../images/css.png';
import js_logo from '../images/js.png';
import react_logo from '../images/react.png';
import sql_logo from '../images/mysql.svg';
import mongo_logo from '../images/mongodb.svg';
import express_logo from '../images/express.png';
import node_logo from '../images/node.svg';
import arduino_logo from '../images/arduino.png';
import rpi_logo from '../images/rpi.png';
import jetson_logo from '../images/Jetson.png';
import './About.css'
const About = () => {
    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold'>Education</h1>
                <div className='my-6'>

                <p><span className='text-xl'>Bachelor of Science in Computer Science,</span> <span className='text-xl font-bold'>Brac University</span> </p> <br />
                <p><span className='text-xl'>Higher Secondary Certificate,</span> <span className='text-xl font-bold'>Rajuk Uttara Model College, Dhaka</span> </p> <br />
                </div>

                <div><h1 className='text-2xl font-bold'>Technologies that I am good at</h1>
                <h2 className='text-2xl font-bold my-5'>Frontend:</h2>
                <div className="flex items-center justify-evenly">
                    <img src={html_logo} alt="" className="html-css" />
                    <img src={css_logo} alt="" className="css-css" />
                    <img src={js_logo} alt="" className="js-css" />
                    <img src={react_logo} alt="" className="react-css" />
                </div>
                        
                              
                <h2 className='text-2xl font-bold my-5'>Backend:</h2>

                <div className="flex items-center justify-evenly bg-slate-300">
                    <img src={node_logo} alt="" className="html-css" />
                    <img src={mongo_logo} alt="" className="css-css" />
                    <img src={sql_logo} alt="" className="js-css" />
                    <img src={express_logo} alt="" className="react-css" />
                </div>
                
                    

                <h2 className='text-2xl font-bold my-5'>Embedded System:</h2>
                <div className="flex items-center justify-evenly bg-slate-600">
                    <img src={arduino_logo} alt="" className="arduino-css" />
                    <img src={rpi_logo} alt="" className="rpi-css" />
                    <img src={jetson_logo} alt="" className="rpi-css" />
                </div>

                </div>
                
            </div>
        </div>
    );
};

export default About;