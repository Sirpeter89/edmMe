import { useState } from 'react'
import './ticketComponent.css'

export default function TicketComponent({ticket}){
    const [sold, setSold] = useState('Purchase')

    if(ticket.sold){
        setSold('Sold')
    }

    const handleClick = (e) => {
        e.target.innerText = 'Sold'
    }

    return (
        <>
            <div className='ticketHolder'>
                <div className='price'>${ticket.price}</div>
                <div className='type'>Admission: {ticket.type}</div>
                <div className='quantity'>1X</div>
                <button className='buyButton' onClick={handleClick}>{sold}</button>
            </div>
        </>
    )
}
