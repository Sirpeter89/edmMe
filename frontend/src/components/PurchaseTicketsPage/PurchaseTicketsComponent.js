import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function PurchaseTicketsComponent(){
    const [tickets, setTickets] = useState([]);

    const {id} = useParams();
    const eventId = id;

    const getTickets = async (eventId) =>{
        const res = await fetch(`/api/tickets/${eventId}`);
        const tickets = await res.json();
        setTickets(tickets.tickets);
    }

    useEffect( async ()=>{
        await getTickets(eventId);
    },[])

    return (
        <>
        {tickets.map((event)=>
            <div key={event.id}>{event.type}</div>
            )}
        </>
    )
}
