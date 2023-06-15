import React from 'react'
import '../styles/About.css'
import aboutimg from '../assets/aboutimg.png'

export default function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutimg} alt="" />
        </div>
        <div className="about-right">
            <div className="about-right-heading">About Us</div>
            <div className="about-right-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
            </div>
            <div className="about-right-button">
                <div className="about-right-button-inner">
                Read More
                </div>
            </div>
        </div>
    </div>
  )
}
