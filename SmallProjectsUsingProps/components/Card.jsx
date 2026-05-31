import React from 'react'
import {Share} from 'lucide-react'
import {Star} from 'lucide-react'
import { Bookmark } from 'lucide-react'

function Card(props) {
  return (
    <div className='card'>
    <div className="top">
        <img src={props.profilePicture} alt='Profile Picture'></img>
        <button><Share size={24} strokeWidth={1.5}/> </button>
    </div>
    <div className="center">
        <h2>{props.nameEmployee}</h2>
        <h4>{props.header}</h4>
        <h5>{props.skillSet1}</h5>
        <h5>{props.skillSet2}</h5>
    </div>
 <div className="stats">
  <div className="stat">
    <h3><Star size={16} strokeWidth={2.25} />{props.rating}</h3>
    <p>Rating</p>
  </div>

  <div className="stat">
    <h3>{props.earnedCash}</h3>
    <p>Earned</p>
  </div>

  <div className="stat">
    <h3>{props.chargesHourly}</h3>
    <p>Rate</p>
  </div>
</div>
    <div className="bottom">
        <button className="touch">Get in touch</button>
        <button className="bookmark"><Bookmark size={16} strokeWidth={2.25} /></button>
    </div>
    </div>
  )
}

export default Card
