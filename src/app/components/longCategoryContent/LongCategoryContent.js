import React from 'react'
import TicketComponent from '../ticketComponent/TicketComponent'
import './LongCategoryContent.css'

const LongCategoryContent = () => {
    return (
        <div className='category-container'>
            <div className='longCategoryDescription'>This is category description. This category is expanded by default. This is a little longer description. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer.</div>
            <div>
            <TicketComponent ticketHeading="Free Ticket in Category2" category="categorised" ticketType='free ticket' />
            <TicketComponent ticketHeading="Paid Ticket in Category2" category="categorised" ticketType='paid ticket'/>
            </div>
        </div>
      )
}

export default LongCategoryContent