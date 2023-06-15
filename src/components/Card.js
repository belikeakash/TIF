import React from 'react'
import '../styles/Card.css'
import cardimg from '../assets/foodtruck.png'

export default function Card({title, img}) {
    return (
        <div className='card'>
            <div className="card-body">
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-text-area">
                    <div className="card-title">{title}</div>
                    <div className="card-text">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....</div>
                    <div className="card-button">
                        <div className="card-button-inner">
                        Read More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
