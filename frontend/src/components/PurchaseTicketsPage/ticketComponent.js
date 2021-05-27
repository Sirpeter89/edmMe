import { useEffect, useState } from 'react'
import './ticketComponent.css'
import { csrfFetch } from '../../store/csrf';

export default function TicketComponent({ticket}){
    const [sold, setSold] = useState(false)
    const [status, setStatus] = useState('Purchase')

    const ticketUpdate = async () =>{
        const res = await csrfFetch(`/api/tickets/${ticket.id}`,{
            method: "PATCH",
        });
        const updatedticket = await res.json();
        setSold(updatedticket.sold);
    }

    useEffect(()=>{
        if(sold){
        setStatus('Sold')
        }
    },[sold])

    console.log("SOLD ISS", sold)

    const handleClick = async (e) => {
        console.log("THE ID ISS", ticket.id)
        await ticketUpdate();
    }

    return (
        <>
            <div className='ticketHolder'>
                <div className='price'>${ticket.price}</div>
                <div className='type'>Admission: {ticket.id}</div>
                <div className='quantity'>1X</div>
                <button className='buyButton' onClick={handleClick}>{status}</button>
            </div>
        </>
    )
}
