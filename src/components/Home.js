import React from 'react';
import ArifinDP from '../images/arifin_dp.jpg'
import './Home.css';
import Skills from './Skills';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHippo} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import About from './About'

const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={ArifinDP} className="lg:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className=" text-3xl lg:text-5xl font-bold">Hi there! I am Arifin Rafi</h1>
      <p className="py-6"> I am a computer science student passionate about solving real-world problems through leadership and analytical thinking. With experience in both youth-led initiatives and the corporate sector, I have honed my ability to learn quickly, adapt to new challenges, and manage tasks efficiently.</p>
<a 
  href="https://drive.google.com/file/d/1ikll8KRZ101cI4-QwmAcjLyQuqIdDC03/view?usp=drive_link" 
  download 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn btn-primary mx-5">Download CV</button>
</a>
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
<About></About>
        </div>

        
    );
};

export default Home;