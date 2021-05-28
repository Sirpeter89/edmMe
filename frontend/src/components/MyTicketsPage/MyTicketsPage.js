import { useEffect, useState } from 'react';
import TicketHolderComponent from './TicketHolderComponent'
import './MyTicketsPage.css'

export default function MyTicketsComponent(){
    const [actualTicketList, setActualTicketList] = useState([]);

    useEffect(async ()=>{
        let newTicketList = [];
        const res = await fetch("/api/buyTickets");
        const tickets = await res.json();

        for (const ticket of tickets){
            const res = await fetch(`/api/tickets/one/${ticket.id}`);
            const singleTicket = await res.json();
            newTicketList.push(singleTicket)
        }
        setActualTicketList(newTicketList)
    }, [])

    return (
        <div className='tickets'> Your Scannable Tickets
            {actualTicketList.map((ticket)=>
                    <TicketHolderComponent key={ticket.id} ticket={ticket}></TicketHolderComponent>
                )}
        </div>
    )
}
