import './HomePage.css';
import CenterPageComponent from './CenterPageComponent'
import React from "react";
import { NavLink} from "react-router-dom"
export default function HomePage(){

    return(
        <div className='centerPageContainer'>
            <div className='leftCenterComponent'>
                <CenterPageComponent imgUrl='https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            height={500}/>
                <NavLink className='lol'to='/allEvents'>
                    <button className='button'>Browse Events &#8594;</button>
                </NavLink>
            </div>
            <NavLink className='createButton'to='/createEvent'>
                    <button className='button'>Add an Event &#8594;</button>
                </NavLink>
            <div className='rightCenterComponent'>
                <CenterPageComponent imgUrl='https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            height={450}
            width={700}/>
            </div>
        </div>
    )
}
