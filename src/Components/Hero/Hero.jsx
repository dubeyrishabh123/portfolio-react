import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profileee.png';

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src= {profile_img} alt=""  />             
      <h1><span>I'm Rishabh Dubey,</span> full stack developer based in India.</h1>
      <p>I'm a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
       

<div
  className="hero-resume"
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'My_Resume.pdf';
    link.click();
  }}
  style={{ cursor: 'pointer' }}
>
  My Resume
</div>


      </div>
    </div>
  )
}

export default Hero
