import React from 'react'
import TicketComponent from '../ticketComponent/TicketComponent'
import './CategoryContent.css'

const categoryContent = () => {
  return (
    <div className='category-container'>
        <div>This is category description. This category is collapsed by default.</div>
        <div>
        <TicketComponent ticketHeading="Free Ticket in Category1" category="categorised" ticketType='free ticket' />
        <TicketComponent ticketHeading="Paid Ticket in Category1" category="categorised" ticketType='paid ticket'/>
        </div>
    </div>
  )
}

export default categoryContent