import { useEffect, useState } from 'react'
import './ticketComponent.css'
import { csrfFetch } from '../../store/csrf';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

export default function TicketComponent({ticket}){
    const history = useHistory();
    const [sold, setSold] = useState(false)
    let stat = 'Purchase'
    if(ticket.sold){
        stat = 'Sold'
    }
    const [status, setStatus] = useState(stat)

    const sessionUser = useSelector(state => state.session.user);

    const ticketUpdate = async () =>{
        const res = await csrfFetch(`/api/tickets/${ticket.id}`,{
            method: "PATCH",
        });
        const updatedticket = await res.json();
        setSold(updatedticket.sold);
    }

    const buyTicket = async() =>{
        const res = await csrfFetch(`/api/buyTickets/${ticket.id}`,{
            method: "POST",
            body: JSON.stringify({
                userId: sessionUser.id,
            }),
        });
    }

    useEffect(()=>{
        if(sold){
        setStatus('Sold')
        }
    },[sold])

    const handleClick = async (e) => {
        await ticketUpdate();
        await buyTicket();
        history.push('/myTickets')
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
