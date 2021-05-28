import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './PurchaseTicketsComponent.css'
import TicketComponent from './ticketComponent'

export default function PurchaseTicketsComponent(){
    const [tickets, setTickets] = useState([]);

    const {id} = useParams();
    const eventId = id;

    const getTickets = async (eventId) =>{
        const res = await fetch(`/api/tickets/${eventId}`);
        const tickets = await res.json();
        setTickets(tickets.tickets);
    }

    useEffect( ()=>{
        getTickets(eventId);
    },[])

    return (
        <div className='allTicketsContainer'> Available Tickets:
                {tickets.map((ticket)=>
                    <TicketComponent key={ticket.id} ticket={ticket} ></TicketComponent>
                )}
        </div>
    )
}
