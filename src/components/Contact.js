import React from 'react'
import '../styles/Contact.css'
import foodtruck from '../assets/foodtruck.png'
import { AiOutlineInstagram, AiOutlineTwitter, } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

export default function Contact() {
    return (
        <div className='contact'>
            <div className="contact-container">
                <div className="contact-img">
                    <img src={foodtruck} alt="" />
                </div>
                <div className="contact-details">
                    <div className="contact-details-head">
                        Contact Us
                    </div>
                    <div className="contact-location">
                        Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                    </div>
                    <div className="contact-email">
                        example2020@gmail.com
                    </div>
                    <div className="contact-number">
                        (904) 443-0343
                    </div>
                </div>
                <div className="contact-block">
                    <div className="contact-block-more">
                        <div className="contact-block-more-list-head">More</div>
                        <div className="contact-block-more-list">

                            <div>About Us</div>
                            <div>Products</div>
                            <div>Career</div>
                            <div>Contact Us</div>

                        </div>

                    </div>
                    <div className="contact-social">
                    <div className="conatct-trademark">
                            © 2022 Food truck Example
                        </div>
                        <div className="socials">Social Links</div>
                        <div className="socialicons">
                            <AiOutlineInstagram />
                            <AiOutlineTwitter />
                            <FaFacebookF />
                        </div>

                        
                    </div>


                </div>
            </div>
        </div>
    )



}