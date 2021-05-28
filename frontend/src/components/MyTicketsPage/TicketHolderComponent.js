import './TicketHolderComponent.css'


export default function TicketHolderComponent({ticket}){
    return (
        <div className='ticket'>
            <p className='detailType'>Admission Type: {ticket.type}
            <br /> Admission Price: {ticket.price}
            <br /> Admit: 1</p>
            <img className='barcode'src={ticket.ticketImg} />
        </div>
    )
}
