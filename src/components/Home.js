import React from 'react';
import ArifinDP from '../images/arifin_dp.jpg'
import './Home.css';
import Skills from './Skills';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHippo} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={ArifinDP} className="lg:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className=" text-5xl font-bold">Hi there! I am Arifin Rafi</h1>
      <p className="py-6">I am a final year Computer Scinence Student from Brac University, Dhaka. If you are looking for a software engineer to build your websites, mobile app or embedded system and grow your business, Let’s shake hands with me.</p>
      <a href="../images/Resume-Md.Arifin_Ahmed_rafi.pdf" download > <button className="btn btn-primary mx-5">Download CV</button></a>
      <button className="btn btn-primary mx-5">Read More</button>

      
      <div >
        <a href="https://www.facebook.com/arifin.rafi.16/"><FontAwesomeIcon className='social-media' icon={faFacebook} /></a>
        <a href="https://github.com/ArifinRafi"><FontAwesomeIcon className='social-media' icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/md-arifin-ahmed-rafi-4490a1193/"><FontAwesomeIcon className='social-media' icon={faLinkedin} /></a>
        
        

      </div>
      
      
    </div>
  </div>
</div> <br /> <br />
<Skills></Skills>
        </div>

        
    );
};

export default Home;