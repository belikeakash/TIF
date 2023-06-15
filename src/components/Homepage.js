import React from 'react'
import foodtruck from '../assets/foodtruck.png'
import homepizza from '../assets/homepizza.png'
import redvector from '../assets/redvector.png'
import '../styles/Homepage.css'

export default function Homepage() {
  return (
    <div className='home'>
        <div className="home-right">
            <div className="home-right-button">
                <div className="home-right-button-inner">
                Get in Touch
                </div>
            </div>
            <img src={homepizza} className='home-right-img1' alt="" />
            <img src={redvector} className='home-right-img2' alt="" />
        </div>
        <div className="home-left">
            <div className="home-left-img">
                <img src={foodtruck} alt="" />
                <div className="home-left-text1">
                    Discover the <span style={{color:'#E23744'}}>Best</span> Foods and Drinks
                </div>
                <div className="home-left-text2">
                    Naturally made Healthcare Products for the better care & support of your body.
                </div>
                <div className="home-left-button">
                    <div className="home-left-button-inner">
                    Explore Now!
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
