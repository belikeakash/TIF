import React, { useState } from 'react'
import Card from './Card'
import '../styles/Articles.css'
import {FaLessThan, FaGreaterThan} from 'react-icons/fa'
import a1 from '../assets/a-1.png'
import a2 from '../assets/a-2.png'
import a3 from '../assets/a-3.png'
import a4 from '../assets/a-4.png'
import a5 from '../assets/a-5.png'
import a6 from '../assets/a-6.png'

export default function Articles() {
  const arr = [[[{img:a1, title:'Grilled Tomatoes at Home'}],[{img:a2, title:'Snacks for Travel'}],[{img:a3, title:'Post-workout Recipes'}]], [[{img:a4, title:'How To Grill Corn'}],[{img:a5, title:'Crunchwrap Supreme'}],[{img:a6, title:'Broccoli Cheese Soup'}]]];
  const [start, setStart] = useState(0);
  const moveBack = () => {
    if(start>0) setStart(start-1);
  }
  const moveFront = () => {
    if(start<arr.length-1) setStart(start+1);
  }
  return (
    <div className='article'>
        <div className="article-head">Latest Articles</div>
        <div className="article-cards">
            {
              arr[start].map(x => {
                // console.log(x);
                return (
                  <>
                    <Card title={x[0].title} img={x[0].img} />
                  </>
                )
              })
            }
            {/* <Card title={arr[0][0][0].title} img={arr[0][0][0].img} />
            <Card title={arr[0][0][0].title} img={arr[0][0][0].img} />
            <Card title={arr[0][0][0].title} img={arr[0][0][0].img} /> */}
            
        </div>
        <div className="article-controllers">
            <div className="controllers">
              <div className="icons" onClick={moveBack}><FaLessThan /></div>
              <div className="contoller-text">{start+1}/{arr.length} </div>
              <div className="icons" onClick={moveFront}><FaGreaterThan /></div>
            </div>
        </div>
    </div>
  )
}

// arr.map(x=> {

// })